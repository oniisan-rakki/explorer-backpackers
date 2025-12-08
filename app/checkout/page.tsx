"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormSelect } from '../components/FormSelect';
import { FormTextarea } from '../components/FormTextarea';
import { images } from '../data/images';
import { processYocoPayment } from '../lib/api';

// --- Types ---
type BookingDetails = {
  roomTypeId: string;
  roomName: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  amount: string; // We map 'totalCost' from URL to this 'amount' field
  discount: string;
  nights: number;
};

// --- Main Content Component (reads search params) ---
function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Reconstruct bookingDetails from URL parameters
  const bookingDetails: BookingDetails | null = searchParams.get('roomTypeId') ? {
    roomTypeId: searchParams.get('roomTypeId')!,
    roomName: searchParams.get('roomName')!,
    guests: parseInt(searchParams.get('guests') || '0', 10),
    checkIn: searchParams.get('checkIn')!,
    checkOut: searchParams.get('checkOut')!,
    // Map the URL param 'totalCost' to the object key 'amount'
    amount: searchParams.get('totalCost')!, 
    discount: searchParams.get('discount') || '',
    nights: parseInt(searchParams.get('nights') || '0', 10),
  } : null;

  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'ZA', // Default to South Africa
    estimatedArrivalTime: '',
    note: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // If user lands here without booking details, send them back
  useEffect(() => {
    if (!bookingDetails) {
      router.push('/book');
    }
  }, [bookingDetails, router]);
  
  if (!bookingDetails) {
    return null; // Render nothing while redirecting
  }

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGuestDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    // FIX: Remove 'R' and spaces to ensure we get a valid number
    const cleanCostString = bookingDetails.amount.toString().replace(/[^0-9.]/g, '');
    const numericCost = parseFloat(cleanCostString);

    if (isNaN(numericCost)) {
      setError("Invalid price detected. Please return to the previous page and try again.");
      setIsProcessing(false);
      return;
    }

    // --- CRITICAL FIX ---
    // We send 'amount' as a pure Number, not a string
    const fullBookingDetails = {
      ...bookingDetails,
      ...guestDetails,
      amount: numericCost, 
      numberOfGuests: bookingDetails.guests, 
    };
    
    try {
      const yocoUrl = await processYocoPayment(fullBookingDetails);
      if (yocoUrl) {
        window.location.href = yocoUrl; 
      } else {
        throw new Error("Did not receive a Yoco URL.");
      }
    } catch (err) {
      setError("Failed to process payment. Please try again.");
      console.error(err);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <PageTitle title="Checkout" />
      <header className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Content: Inline Flex with Centered Logo */}
          <div className="flex justify-between items-center mb-4">
            <Link href="/book" className="flex items-center text-gray-700 hover:text-green-600 inline-flex">
              <img src={images.iconBack} alt="Back" className="h-4 w-4 mr-2" /> Back to Rooms
            </Link>
            
            <img src={images.logo} alt="Logo" className="h-15" />
            
            <div className="w-32"></div> 
          </div>
          
          {/* Progress Bar */}
          <div className="flex w-full mt-6">
            <div className="w-1/2">
              <div className="flex items-center justify-center bg-green-600 text-white p-3 rounded-l-md font-semibold">
                <img src={images.iconVerifiedCheckout} alt="Verified" className="h-5 w-5 mr-2" />
                <span>Choose a room</span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex items-center justify-center bg-black text-white p-3 rounded-r-md font-semibold">
                <span>Check out</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-gray-100 py-10">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Reservation Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Reservation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <FormInput label="Room" name="roomName" value={bookingDetails.roomName} readOnly />
              <FormInput label="Guests" name="guests" value={bookingDetails.guests} readOnly />
              <FormInput label="Arrival" name="checkIn" value={bookingDetails.checkIn} readOnly />
              <FormInput label="Departure" name="checkOut" value={bookingDetails.checkOut} readOnly />
              <FormInput label="Discount" name="discount" value={bookingDetails.discount} readOnly />
              {/* Note: Changed bookingDetails.totalCost to bookingDetails.amount below to match the Type definition */}
              <FormInput label="Total" name="totalCost" value={`R${bookingDetails.amount}`} readOnly />
            </div>
          </div>
          
          {/* Guest Details Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handlePaymentSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput label="First Name" name="firstName" placeholder="e.g. Kat" value={guestDetails.firstName} onChange={handleGuestChange} required />
                <FormInput label="Last Name" name="lastName" placeholder="e.g. Jones" value={guestDetails.lastName} onChange={handleGuestChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput label="Email" name="email" type="email" placeholder="e.g. example@email.com" value={guestDetails.email} onChange={handleGuestChange} required />
                <FormInput label="Phone" name="phone" type="tel" placeholder="e.g. +27 71 137 0207" value={guestDetails.phone} onChange={handleGuestChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormSelect label="Select your country" name="country" value={guestDetails.country} onChange={handleGuestChange} required>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AG">Antigua & Deps</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="CF">Central African Rep</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="DRC">Democratic Republic of Congo</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="TL">East Timor</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GR">Greece</option>
                  <option value="GD">Grenada</option>
                  <option value="GT">Guatemala</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HN">Honduras</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland Republic</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea North</option>
                  <option value="KR">Korea South</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MK">Macedonia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="KN">St Kitts & Nevis</option>
                  <option value="LC">St Lucia</option>
                  <option value="VC">Saint Vincent & the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome & Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TG">Togo</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad & Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican City</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </FormSelect>
                <FormInput label="Estimated arrival time" name="estimatedArrivalTime" type="time" value={guestDetails.estimatedArrivalTime} onChange={handleGuestChange} required />
              </div>
              <FormTextarea label="Message/Special Requests" name="note" placeholder="Let us know if you have any special requirements..." value={guestDetails.note} onChange={handleGuestChange} />
              
              <div className="mt-6">
                <label className="flex items-start">
                  <input type="checkbox" required className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded mt-1" />
                  <span className="ml-2 text-sm text-gray-600">I accept Explorer Backpackers' <Link href="/termsandconditions" className="text-green-600 hover:underline">Terms & Conditions</Link>.</span>
                </label>
              </div>
              
              <div className="mt-8">
                <Button type="submit" disabled={isProcessing} className="w-full text-sm">
                  {/* Note: Changed bookingDetails.totalCost to bookingDetails.amount below to match the Type definition */}
                  {isProcessing ? 'Processing...' : `Pay Now R${bookingDetails.amount}`}
                </Button>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

// --- MAIN PAGE EXPORT ---
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}