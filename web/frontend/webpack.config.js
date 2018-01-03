const { join } = require('path');
const Merge = require('webpack-merge');

const WEBPACK_CONFIG_DIR = join(__dirname, 'config', 'webpack');
const base_config = require(join(WEBPACK_CONFIG_DIR, 'base.js'));
const development_config = require(join(WEBPACK_CONFIG_DIR, 'development.js'));
const production_config = require(join(WEBPACK_CONFIG_DIR, 'production.js'));


module.exports = process.env.NODE_ENV === 'development' ? Merge(base_config, development_config) : Merge(base_config, production_config);
