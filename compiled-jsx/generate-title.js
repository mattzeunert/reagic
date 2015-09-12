module.exports = function(keyName){
  var nameComponents = keyName.split(/(?=[A-Z])/);
  nameComponents = nameComponents.map(function(nameComponent){
      return nameComponent[0].toUpperCase() + nameComponent.substr(1);
  });
  return nameComponents.join(" ");
}
