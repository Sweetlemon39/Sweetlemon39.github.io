'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('tools/audit.cjs', 'utf8');
function check(response) {
  const process = { exitCode: 0 };
  vm.runInNewContext(source, {
    require: name => {
      assert.equal(name, 'node:child_process');
      return { spawnSync: () => response };
    },
    console: { log() {} }, process
  });
  return process.exitCode;
}
function report(url) {
  return {
    status: 1,
    stdout: JSON.stringify({
      metadata: { vulnerabilities: { total: 1 } },
      vulnerabilities: { dependency: { via: [{ name: 'dependency', title: 'advisory', url }] } }
    })
  };
}
test('audit check reports known unpatched advisories without blocking the build', () => {
  for (const id of ['GHSA-vfj7-8cjw-p6xm', 'GHSA-hp3w-g68c-fv3c']) {
    assert.equal(check(report('https://github.com/advisories/' + id)), 0);
  }
});
test('audit check rejects any new advisory', () => {
  assert.equal(check(report('https://github.com/advisories/new-advisory')), 1);
});
test('audit check fails closed on registry errors or missing reports', () => {
  assert.throws(() => check({ status: 1, stdout: '{"error":{"code":"ENOTFOUND"}}' }));
  assert.throws(() => check({ status: 1, stdout: 'unavailable', stderr: 'registry unavailable' }));
  assert.throws(() => check({ status: null, signal: 'SIGTERM', stdout: '{}' }));
});
