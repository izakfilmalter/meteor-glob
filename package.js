Package.describe({
  summary: "Glob future-wrapped API"
});

Npm.depends({
    "glob": "3.1.21"
});

Package.on_use(function (api) {
  api.export('Glob');
  api.add_files("glob.js", "server");
});