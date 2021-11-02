//
// With credits to https://github.com/eugeneware/ffmpeg-static
//
const os = require('os');
const path = require('path');

const platform = os.platform();
if (platform !== 'darwin' && platform !=='linux' && platform !== 'win32') {
  console.error('Unsupported platform.');
  process.exit(1);
}

const arch = os.arch();

if (platform === 'darwin' && !['x64', 'arm64'].includes(arch)) {
  console.error('Unsupported architecture.');
  process.exit(1);
}

const ffprobePath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'ffprobe.exe' : 'ffprobe'
);

exports.path = ffprobePath;
