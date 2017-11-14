var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var nrecipes{}
  Object.assign(nrecipes, recipes)
  nrecipes[key] = value;
  return nrecipes
}