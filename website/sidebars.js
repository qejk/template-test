const project = require('./.eveble/project.json');

module.exports = {
  api: {
    Components: project.classes,
    Interfaces: project.interfaces,
    Others: ['api/globals'],
  },
  guides: project.guides,
};
