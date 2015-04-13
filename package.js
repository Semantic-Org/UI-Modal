
Package.describe({
  name    : 'semantic:ui-modal',
  summary : 'Semantic UI - Modal: Single component release',
  version : '1.11.7',
  git     : 'git://github.com/Semantic-Org/UI-Modal.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'modal.css',
    'modal.js'
  ], 'client');
});
