const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
// Change this to point to the specific folder you want to process
// e.g. 'public/images/capeTownExperiences'
const TARGET_RELATIVE_PATH = 'public/images/citySightseeingExperiences'; 
// ---------------------

const baseDir = path.join(__dirname, TARGET_RELATIVE_PATH);

// Helper: Convert string to camelCase
function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9]/g, '');
}

// Helper: Convert number to words (e.g. 17 -> Seventeen)
function numberToWords(num) {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if (num < 0) return '';
  if (num < 20) return ones[num];
  if (num < 100) {
    return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ones[num % 10] : '');
  }
  if (num < 1000) {
    return ones[Math.floor(num / 100)] + 'Hundred' + (num % 100 !== 0 ? numberToWords(num % 100) : '');
  }
  return num.toString();
}

async function processImages() {
  try {
    const items = await fs.promises.readdir(baseDir, { withFileTypes: true });
    const folders = items.filter(item => item.isDirectory());

    console.log(`\n🚀 Found ${folders.length} folders to process in ${TARGET_RELATIVE_PATH}...\n`);

    let outputCode = '';

    for (const folder of folders) {
      const folderPath = path.join(baseDir, folder.name);
      let folderNameForPrefix = folder.name;

      // --- FIX: Handle leading numbers in folder name (e.g., "5 Day..." -> "Five Day...") ---
      const leadingNumberMatch = folderNameForPrefix.match(/^(\d+)/);
      if (leadingNumberMatch) {
        const num = parseInt(leadingNumberMatch[1], 10);
        const word = numberToWords(num); // e.g., "Five"
        // Replace the starting digits with the word
        folderNameForPrefix = folderNameForPrefix.replace(/^(\d+)/, word + ' ');
      }
      // -------------------------------------------------------------------------------------

      // Generate prefix (e.g., "Five Day..." -> "fiveDay...")
      const varPrefix = toCamelCase(folderNameForPrefix);

      const files = await fs.promises.readdir(folderPath);
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file));

      if (imageFiles.length === 0) continue;

      console.log(`📂 Processing "${folder.name}" -> Prefix: "${varPrefix}"`);

      imageFiles.sort();

      let counter = 1;

      for (const file of imageFiles) {
        const ext = path.extname(file);
        const oldPath = path.join(folderPath, file);
        
        // Convert counter to word for the suffix (e.g., 1 -> One)
        const suffixWord = numberToWords(counter);
        
        // New filename: fiveDay...One.jpg
        const newFileName = `${varPrefix}${suffixWord}${ext}`;
        const newPath = path.join(folderPath, newFileName);

        if (oldPath !== newPath) {
          await fs.promises.rename(oldPath, newPath);
        }

        const webPath = path.join(TARGET_RELATIVE_PATH, folder.name, newFileName)
                            .replace(/^public\\?/, '')
                            .replace(/\\/g, '/');
        
        outputCode += `  ${varPrefix}${suffixWord}: '${webPath}',\n`;

        counter++;
      }
    }

    console.log('\n✅ Processing Complete! Copy the following into your app/data/images.ts:\n');
    console.log('// ---------------------------------------------------------');
    console.log(outputCode);
    console.log('// ---------------------------------------------------------');

  } catch (err) {
    console.error('❌ Error:', err);
  }
}

processImages();