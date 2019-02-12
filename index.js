const _ = require("lodash");
const StyleDictionary = require("style-dictionary").extend("./config.json");

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
    return prop.attributes.category === 'size';
  },
  transformer: function(prop) {
    return parseFloat(prop.value, 10) * 16;
  }
});

StyleDictionary.buildAllPlatforms();
