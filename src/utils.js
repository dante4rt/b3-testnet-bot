function generateHashes() {
  const hashes = [];
  for (let i = 300; i <= 999; i++) {
    hashes.push(`0.0.${i}`);
  }
  return hashes;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { generateHashes, delay };
