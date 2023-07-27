const fs = require('fs');
const https = require('https');

async function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function processUrl(url) {
  try {
    const response = await fetch(url);
    const filename = url.split('/').at(2) + '.txt';
    fs.writeFileSync("./output/"+filename, response);
    console.log(`Saved response from ${url} to ${filename}`);
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
  }
}

async function main() {
  const urlsFile = './input/urls.txt';

  const urls = fs.readFileSync(urlsFile, 'utf-8').split('\n');

  const tasks = urls.map(processUrl);

  await Promise.all(tasks);
}

main().catch((error) => {
  console.error('An error occurred:', error);
});
