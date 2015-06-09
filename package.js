Package.describe({
  summary: 'Glob future-wrapped API',
  name: 'izakfilmalter:glob',
  version: '1.0.1',
  git: 'https://github.com/izakfilmalter/meteor-glob'
});

Npm.depends({
    'glob': '5.0.10'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.add_files('glob.js', 'server');

  api.export('Glob');
});
