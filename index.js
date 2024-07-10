const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Array of image URLs
const imageUrls = [
  'https://images.pexels.com/photos/19793123/pexels-photo-19793123/free-photo-of-illuminated-subway-station.jpeg',
  'https://images.pexels.com/photos/26529292/pexels-photo-26529292/free-photo-of-blackberries-growing-on-a-chain-link-fence.jpeg',
  // Add more URLs as needed
];

const outputDirectory = 'public/output/images';
const size = { width: 800, height: 800 }; // Desired size
const quality = 85; // Desired quality for JPEG

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

async function processImage(url, index) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(response.data, 'binary');
    const outputFilePath = path.join(outputDirectory, `image${index + 1}.jpg`);

    await sharp(buffer)
      .resize(size.width, size.height)
      .toFormat('jpeg', { quality })
      .toFile(outputFilePath);

    console.log(`Processed image ${index + 1} from URL: ${url}`);
  } catch (error) {
    console.error(`Error processing image from URL: ${url}`, error);
  }
}

async function processImages() {
  for (let i = 0; i < imageUrls.length; i++) {
    await processImage(imageUrls[i], i);
  }
}

processImages();


// thumbnail_
const thumbnail_outputDirectory = 'public/output/thumbnail';
const thumbnail_size = { width: 150, height: 150 }; // Desired size
const thumbnail_quality = 85; // Desired quality for JPEG

if (!fs.existsSync(thumbnail_outputDirectory)) {
  fs.mkdirSync(thumbnail_outputDirectory, { recursive: true });
}

async function process_thumbnail_Image(url, index) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(response.data, 'binary');
    const outputFilePath = path.join(thumbnail_outputDirectory, `image${index + 1}.jpg`);

    await sharp(buffer)
      .resize(thumbnail_size.width, thumbnail_size.height)
      .toFormat('jpeg', { thumbnail_quality })
      .toFile(outputFilePath);

    console.log(`Processed image ${index + 1} from URL: ${url}`);
  } catch (error) {
    console.error(`Error processing image from URL: ${url}`, error);
  }
}

async function process_thumbnail_Images() {
  for (let i = 0; i < imageUrls.length; i++) {
    await process_thumbnail_Image(imageUrls[i], i);
  }
}

process_thumbnail_Images();


// zoomed_
const zoomed_outputDirectory = 'public/output/zoomed';
const zoomed_size = { width: 1200, height: 1200 }; // Desired size
const zoomed_quality = 85; // Desired quality for JPEG

if (!fs.existsSync(zoomed_outputDirectory)) {
  fs.mkdirSync(zoomed_outputDirectory, { recursive: true });
}

async function process_zoomed_Image(url, index) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(response.data, 'binary');
    const outputFilePath = path.join(zoomed_outputDirectory, `image${index + 1}.jpg`);

    await sharp(buffer)
      .resize(zoomed_size.width, zoomed_size.height)
      .toFormat('jpeg', { zoomed_quality })
      .toFile(outputFilePath);

    console.log(`Processed image ${index + 1} from URL: ${url}`);
  } catch (error) {
    console.error(`Error processing image from URL: ${url}`, error);
  }
}

async function process_zoomed_Images() {
  for (let i = 0; i < imageUrls.length; i++) {
    await process_zoomed_Image(imageUrls[i], i);
  }
}

process_zoomed_Images();
