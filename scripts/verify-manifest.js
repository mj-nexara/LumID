const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const signedPath = path.resolve('signed/manifest.signed.json');
const reportPath = path.resolve('signed/verify.report.json');

try {
  console.log('🔍 Verifying signed manifest...');
  const signedData = fs.readFileSync(signedPath, 'utf8');
  const result = execSync(`didkit credential verify --proof-format ldp`, { input: signedData }).toString();
  fs.writeFileSync(reportPath, result);
  console.log(`✅ Verification complete. Report saved to: ${reportPath}`);
} catch (err) {
  console.error('❌ Verification error:', err.message);
}
