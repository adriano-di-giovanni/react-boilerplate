import config from './webpack.config.common';

export default Object.assign({}, config, {
  devtool: 'eval',
});
