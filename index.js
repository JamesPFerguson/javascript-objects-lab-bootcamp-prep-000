var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var nrecipes = {}
  Object.assign(nrecipes, object)
  nrecipes[key] = value;
  return nrecipes
  
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
  }
 function deleteFromObjectByKey(object, key) {
    var nrecipes = {}
    Object.assign(nrecipes, object)
    delete nrecipes[key]
  }
  function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object;
  }
}