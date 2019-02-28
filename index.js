const _ = require("lodash");
const StyleDictionary = require("style-dictionary").extend("./config.json");

function isSize(prop) {
  return prop.attributes.category === 'size' && !isTextSize(prop) && !isWeightSize(prop);
}

function isTextSize(prop) {
  return prop.attributes.type === 'text' && prop.attributes.category === 'size';
}

function isWeightSize(prop) {
  return prop.attributes.type === 'weight' && prop.attributes.category === 'size';
}

StyleDictionary.registerTransform({
  name: "name/ti/camel",
  type: "name",
  transformer: function(prop, options) {
    var path = prop.path.slice(1);
    return _.camelCase([options.prefix].concat(path).join(" "));
  }
});

StyleDictionary.registerTransform({
  name: 'size/remToPt/literal',
  type: 'value',
  matcher: function(prop) {
    return isSize(prop);
  },
  transformer: function(prop) {
    return parseFloat(prop.value, 10) * 16;
  }
});

StyleDictionary.registerTransform({
  name: 'size/custom/literal',
  type: 'value',
  matcher: function(prop) {
    return isTextSize(prop) || isWeightSize(prop);
  },
  transformer: function(prop) {
    return parseFloat(prop.value, 10) * 1.0;
  }
});

StyleDictionary.buildAllPlatforms();
