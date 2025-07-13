const { Web3Storage, File } = require('web3.storage');
const fs = require('fs');

const token = 'z4MXj1wBzi9jUstyNmDV3vqooad63jX6AfmVkq6PRPf6SnPN6msqaGoun6S8HZ6jKzvx8FD5GteWfsKZjzkhUrdMGAHxXrYHoNtMN71AFVJYbLYrJiDVzMAigck93dczSc2GuUUpc5JhPfnHKUEiMqqret8KW7fXnXpq3nrg32oMyEXzC9AQ7sx8hD9Fsd4MvrRCWXg76NKdC5G1p7ppMZFugkg5b2DxgRiEKQgZq9WJDSsdheSTx12oWaRobGDAwXwH2MLpG34aXGaWQYnHq3goVmCtGUKRQHgQukRhSn89n1phGgJYdV3rjnjybdAWgLTiPYsq9Wib6eDpXCBkv2hsonvPqVs9eEi68YVR15EsPkmh3thyS'; // Replace with your token
const filePath = 'signed/manifest.signed.json';

async function upload() {
  const client = new Web3Storage({ token });
  const content = fs.readFileSync(filePath);
  const file = new File([content], 'manifest.signed.json');
  const cid = await client.put([file]);
  console.log(`✅ File uploaded to IPFS with CID: ${cid}`);
}

upload().catch(err => console.error('❌ Upload failed:', err));
