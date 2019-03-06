const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend('./config.json');

function isSize(prop) {
  return prop.attributes.category === 'size';
}

StyleDictionary.registerTransform({
  name: 'custom/name/ti/camel',
  type: 'name',
  transformer: function(prop, options) {
    var path = prop.path.slice(1);
    return _.camelCase([options.prefix].concat(path).join(' '));
  }
});

StyleDictionary.registerTransform({
  name: 'custom/size/number',
  type: 'value',
  matcher: isSize,
  transformer: function(prop) {
    return new Number(prop.value);
  }
});

StyleDictionary.buildAllPlatforms();
