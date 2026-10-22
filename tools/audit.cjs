'use strict';
const { spawnSync } = require('node:child_process');
// Known upstream exceptions; all other advisories fail the check.
const pending = new Set([
  'https://github.com/advisories/GHSA-vfj7-8cjw-p6xm',
  'https://github.com/advisories/GHSA-hp3w-g68c-fv3c'
]);
const result = spawnSync('npm', ['audit', '--json', '--fetch-timeout=30000', '--fetch-retries=0'], {
  encoding: 'utf8', maxBuffer: 8 * 1024 * 1024
});
if (result.error) throw result.error;
let audit;
try { audit = JSON.parse(result.stdout); } catch { throw new Error(result.stderr || 'Invalid npm audit response'); }
if (audit.error || !audit.metadata || !audit.vulnerabilities || result.status > 1 || result.signal) {
  throw new Error(JSON.stringify(audit.error || audit));
}
const advisories = new Map();
for (const entry of Object.values(audit.vulnerabilities)) {
  for (const via of entry.via) {
    if (typeof via === 'object') advisories.set(via.url, via);
  }
}
let failed = false;
for (const [url, advisory] of advisories) {
  const known = pending.has(url);
  console.log(`${known ? 'PENDING UPSTREAM FIX' : 'UNEXPECTED VULNERABILITY'}: ${advisory.name}: ${advisory.title}\n${url}`);
  if (!known) failed = true;
}
console.log(JSON.stringify(audit.metadata.vulnerabilities));
if (audit.metadata.vulnerabilities.total && !advisories.size) failed = true;
process.exitCode = failed ? 1 : 0;
