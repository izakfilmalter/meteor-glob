Package.describe({
  summary: 'Glob future-wrapped API'
});

Npm.depends({
    'glob': '5.0.10'
});

Package.onUse(function (api) {
  api.export('Glob');
  api.add_files('glob.js', 'server');
});
