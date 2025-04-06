# Pesticide for Chrome (Manifest V3 Temporary Fix)

## Overview

This repository provides a temporary fix for the popular Chrome extension **"Pesticide for Chrome (without hover bar)"**.

The original extension, available [here](https://chromewebstore.google.com/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi) (ID: `neonnmencpneifkhlmhmfhfiklgjmloi`), has unfortunately become non-functional for many users. It is often flagged as an `unsupported_extension` because it does not comply with Google Chrome's newer Manifest V3 extension policies.

This modified version attempts to bridge that gap by updating the necessary parts of the original extension's code (with some assistance from AI) to meet the Manifest V3 requirements. It aims to restore the core functionality for developers and designers who relied on Pesticide for quick CSS layout debugging.

**Disclaimer:** This is an unofficial, temporary fix. It is based on the original extension's code but has been modified. While efforts were made to maintain functionality, there might be bugs or differences compared to the original. This is provided as-is, use at your own discretion.

## Installation Instructions

To use this modified version, you need to load it into Chrome manually as an unpacked extension. Follow these steps:

1.  **Download the Code:**

    - Click the green `Code` button on this repository page.
    - Select `Download ZIP`.
    - Extract the contents of the downloaded ZIP file to a memorable location on your computer (e.g., `~/chrome-extensions/pesticide-fix`). You should have a folder containing files like `manifest.json`, `pesticide.js`, etc.

2.  **Open Chrome Extensions Page:**

    - Open your Google Chrome browser.
    - Type `chrome://extensions` into the address bar and press Enter.

3.  **Enable Developer Mode:**

    - Look for the **"Developer mode"** toggle switch, usually located in the top-right corner of the Extensions page.
    - Click the toggle to turn **ON** Developer mode. You should see new buttons appear, including "Load unpacked".

4.  **Load the Unpacked Extension:**

    - Click the **"Load unpacked"** button.
    - A file browser window will open. Navigate to the folder where you extracted the code in Step 1 (the folder containing `manifest.json`).
    - Select that folder and click "Select Folder" or "Open".

5.  **Done!**
    - The modified "Pesticide for Chrome" extension should now appear in your list of extensions and be ready to use.
    - You might want to disable or remove the original, non-functioning
