const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const manifestPath = path.resolve('manifest/manifest.json');
const keyPath = path.resolve('keys/guardian-001.jwk');
const outputPath = path.resolve('signed/manifest.signed.json');

try {
  console.log('🔐 Signing manifest...');
  const verificationMethod = execSync(`didkit key-to-verification-method key --key-path ${keyPath}`).toString().trim();
  const manifestData = fs.readFileSync(manifestPath, 'utf8');
  const command = `didkit credential issue --key-path ${keyPath} --proof-format ldp --proof-purpose assertionMethod --verification-method ${verificationMethod}`;
  const signedOutput = execSync(command, { input: manifestData }).toString();
  fs.writeFileSync(outputPath, signedOutput);
  console.log(`✅ Signed manifest saved to: ${outputPath}`);
} catch (err) {
  console.error('❌ Signature failed:', err.message);
}
