Package.describe({
  summary: 'Glob future-wrapped API',
  name: 'izakfilmalter:glob',
  version: '1.0.0',
  git: 'https://github.com/izakfilmalter/meteor-glob'
});

Npm.depends({
    'glob': '5.0.10'
});

Package.onUse(function (api) {
  api.export('Glob');
  api.add_files('glob.js', 'server');
});
