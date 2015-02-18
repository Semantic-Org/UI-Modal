var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-modal',
  summary : 'Semantic UI - Modal (official): Single component release of modal',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Modal.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
