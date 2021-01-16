'use strict';
const execa = require('execa');
const plist = require('simple-plist');

(async () => {
  if (process.platform !== 'darwin') {
    return Promise.reject(new Error('Unsupported platform.'));
  }

  const {stdout} = await execa('ioreg', ['-k', 'BatteryPercent', '-r', '-a']);
  let data = plist.parse(stdout);

  const outputJson = JSON.stringify(data, null, 2);
  console.log(outputJson);
})();

