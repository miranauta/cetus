const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend('./config.json');

StyleDictionary.registerTransform({
  name: 'name/ti/camel',
  type: 'name',
  transformer: function(prop, options) {
    var path = prop.path.slice(1);
    return _.camelCase([options.prefix].concat(path).join(' '));
  }
});

StyleDictionary.buildAllPlatforms();
