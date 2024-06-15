const axios = require('axios');
const generateHashes = require('./utils').generateHashes;
const delay = require('./utils').delay;

function claimPewpew(cookieData, hashes) {
  const url = 'https://join.b3.fun/api/pewpew/claim';

  const headers = {
    Accept: '*/*',
    'Content-Type': 'application/json;charset=UTF-8',
    Cookie: cookieData,
    Referer: 'https://join.b3.fun/',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  };

  const data = { hashes };

  return axios.post(url, data, { headers })
    .then((response) => {
      console.log(
        `$PEWPEW has been claimed! Status: `.green +
        `${response.data.success} | Amount: ${response.data.count} | Transaction ID: ${response.data.inngestJob.ids[0]}`.yellow
      );
    })
    .catch((error) => {
      console.error(
        'Error:'.red,
        error.response
          ? `${error.response.statusText}, take your new cookie from the B3 website.`.red
          : error.message.red
      );
    });
}

async function startClaiming(accounts, numClicks) {
  const allHashes = generateHashes();

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const totalHashes = Math.min(numClicks * 10, allHashes.length);
    const hashesToUse = allHashes.slice(0, totalHashes);

    for (let j = 0; j < numClicks; j++) {
      const numHashes = Math.floor(Math.random() * 8) + 3;
      const startIndex = (j * 10) % hashesToUse.length;
      const endIndex = startIndex + numHashes;
      const hashes = hashesToUse.slice(startIndex, endIndex);

      await claimPewpew(account, hashes);

      const delaySeconds = Math.floor(Math.random() * 6) + 5;
      await delay(delaySeconds * 1000);
    }
  }
}

module.exports = startClaiming;
