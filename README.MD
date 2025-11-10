# Brave Image Replacer Extension

## Description
Replaces a specific image source with a different one on a single website.

## Installation
1. Open Brave and go to `brave://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `replace-image-extension` folder
5. Visit the site defined in `manifest.json` and test

## Configuration
Edit `content.js`:
- `targetSrc`: image URL to replace
- `newSrc`: the replacement image URL
