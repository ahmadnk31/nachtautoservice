#!/usr/bin/env node

/**
 * Script to convert PNG images to WebP format
 * Run with: node scripts/convert-to-webp.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Images to convert
const imagesToConvert = [
  { input: 'public/logo.png', output: 'public/logo.webp' },
  { input: 'public/nachtautoservice-preview.png', output: 'public/nachtautoservice-preview.webp' },
  { input: 'src/assets/night-mechanic-hero.png', output: 'src/assets/night-mechanic-hero.webp' },
];

console.log('⚠️  WebP conversion script');
console.log('This script requires sharp package to be installed.');
console.log('Run: npm install --save-dev sharp');
console.log('\nAlternatively, you can convert images manually using:');
console.log('1. Online tool: https://squoosh.app/');
console.log('2. Or install cwebp: brew install webp (on macOS)');
console.log('   Then run: cwebp input.png -q 80 -o output.webp\n');

// Check if sharp is available
try {
  const sharp = await import('sharp');
  
  console.log('Converting images to WebP...\n');
  
  for (const { input, output } of imagesToConvert) {
    const inputPath = join(projectRoot, input);
    const outputPath = join(projectRoot, output);
    
    try {
      const imageBuffer = readFileSync(inputPath);
      await sharp.default(imageBuffer)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ Converted: ${input} → ${output}`);
    } catch (error) {
      console.error(`❌ Error converting ${input}:`, error.message);
    }
  }
  
  console.log('\n✨ Conversion complete!');
} catch (error) {
  console.log('\n❌ Sharp package not found. Please install it first:');
  console.log('   npm install --save-dev sharp\n');
  console.log('Or convert images manually using the methods mentioned above.');
}

