process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const reactScriptsConfig = require('react-scripts/config/webpack.config');
const config = reactScriptsConfig(process.env.NODE_ENV);
const path = require('path');
const tsRule = config.module.rules[1].oneOf.find(r => r.test && r.test.toString().includes('ts'));
if (tsRule && tsRule.include) {
  tsRule.include = [tsRule.include, path.resolve(__dirname, 'cypress')];
}
module.exports = config;
