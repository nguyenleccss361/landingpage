#!/usr/bin/env node

/**
 * Tawk.to Setup Helper Script
 * 
 * This script helps you set up Tawk.to chat widget by:
 * 1. Opening the Tawk.to signup page
 * 2. Guiding you through getting your Property ID and Widget ID
 * 3. Creating/updating your .env.local file
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ENV_FILE = path.join(__dirname, '..', '.env.local');
const ENV_EXAMPLE = path.join(__dirname, '..', '.env.local.example');

console.log('🚀 Tawk.to Setup Helper\n');
console.log('This script will help you set up Tawk.to chat widget.\n');

// Check if .env.local exists
let envContent = '';
if (fs.existsSync(ENV_FILE)) {
  envContent = fs.readFileSync(ENV_FILE, 'utf8');
  console.log('✓ Found existing .env.local file\n');
} else {
  console.log('ℹ Creating new .env.local file\n');
}

// Function to update .env.local
function updateEnvFile(propertyId, widgetId) {
  const lines = envContent.split('\n');
  let propertyIdLine = -1;
  let widgetIdLine = -1;

  // Find existing lines
  lines.forEach((line, index) => {
    if (line.startsWith('NEXT_PUBLIC_TAWK_PROPERTY_ID=')) {
      propertyIdLine = index;
    }
    if (line.startsWith('NEXT_PUBLIC_TAWK_WIDGET_ID=')) {
      widgetIdLine = index;
    }
  });

  // Update or add lines
  if (propertyIdLine >= 0) {
    lines[propertyIdLine] = `NEXT_PUBLIC_TAWK_PROPERTY_ID=${propertyId}`;
  } else {
    lines.push(`NEXT_PUBLIC_TAWK_PROPERTY_ID=${propertyId}`);
  }

  if (widgetIdLine >= 0) {
    lines[widgetIdLine] = `NEXT_PUBLIC_TAWK_WIDGET_ID=${widgetId}`;
  } else {
    lines.push(`NEXT_PUBLIC_TAWK_WIDGET_ID=${widgetId}`);
  }

  // Write file
  fs.writeFileSync(ENV_FILE, lines.join('\n'), 'utf8');
  console.log('✓ Updated .env.local file\n');
}

// Interactive setup
console.log('📋 Setup Steps:\n');
console.log('1. Sign up for Tawk.to (free): https://www.tawk.to/');
console.log('2. Log in to dashboard: https://dashboard.tawk.to/');
console.log('3. Create a property or select existing one');
console.log('4. Go to Administration > Channels > Chat Widget');
console.log('5. Copy your Property ID and Widget ID from the embed code\n');

console.log('The embed code URL looks like:');
console.log('https://embed.tawk.to/PROPERTY_ID/WIDGET_ID\n');

// Try to open browser
try {
  const platform = process.platform;
  let command;
  
  if (platform === 'darwin') {
    command = 'open';
  } else if (platform === 'win32') {
    command = 'start';
  } else {
    command = 'xdg-open';
  }
  
  console.log('🌐 Opening Tawk.to signup page in your browser...\n');
  execSync(`${command} https://dashboard.tawk.to/signup`);
} catch (error) {
  console.log('⚠ Could not open browser automatically.');
  console.log('Please visit: https://dashboard.tawk.to/signup\n');
}

// If running in interactive mode, prompt for IDs
if (process.stdin.isTTY) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter your Tawk.to Property ID: ', (propertyId) => {
    rl.question('Enter your Tawk.to Widget ID: ', (widgetId) => {
      if (propertyId && widgetId) {
        updateEnvFile(propertyId.trim(), widgetId.trim());
        console.log('\n✅ Setup complete!');
        console.log('\nNext steps:');
        console.log('1. Restart your dev server: npm run dev');
        console.log('2. Visit http://localhost:3100');
        console.log('3. Look for the chat widget in the bottom-right corner\n');
      } else {
        console.log('\n⚠ No credentials provided. You can manually edit .env.local');
        console.log('See TAWKTO_SETUP.md for detailed instructions.\n');
      }
      rl.close();
    });
  });
} else {
  console.log('\n📝 To add your credentials:');
  console.log('1. Edit .env.local file');
  console.log('2. Add: NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id');
  console.log('3. Add: NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id');
  console.log('4. Restart your dev server\n');
  console.log('See TAWKTO_SETUP.md for detailed instructions.\n');
}
