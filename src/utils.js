function generateHashes() {
  const hashes = [];
  for (let i = 0; i < 1000; i++) {
    const part1 = Math.floor(Math.random() * 999) + 1;
    const part2 = Math.floor(Math.random() * 999) + 1;
    const part3 = Math.floor(Math.random() * 999) + 1;
    hashes.push(`${part1}.${part2}.${part3}`);
  }
  return hashes;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { generateHashes, delay };
