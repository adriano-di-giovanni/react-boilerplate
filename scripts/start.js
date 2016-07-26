// module deps
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../config/webpack.config.development';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler);

server.listen(3000);
