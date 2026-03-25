require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');
const startClaiming = require('./src/claim');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=     B3 Incentivized Testnet BOT      ='.cyan);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

const JWT_ACCOUNTS = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

const numClicks = parseInt(
  readlineSync.question('Enter the number of clicks: '.cyan),
  10
);

displayHeader();
startClaiming(JWT_ACCOUNTS, numClicks);
