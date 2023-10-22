module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 1280],
    minHeight: 1024,
    // percyCSS: '| . { display: none; }',
  },
  discovery: {
    allowedHostnames: [],
    disallowedHostnames: [],
    networkIdleTimeout: 750,
  },
  upload: {
    files: '**/*.{png,jpg,jpeg}',
    ignore: '',
    stripExtensions: false,
  },
};
