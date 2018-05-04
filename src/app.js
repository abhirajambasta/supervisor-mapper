import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import routes from './routes';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { APP_LISTENING_PORT as PORT } from './config/constants';

const APP = express();
APP.disable('x-powered-by');

APP.set('views', path.join(__dirname, 'views'));
APP.set('view engine', 'pug');
APP.use(compression()); //Compress all routes
APP.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
APP.use(logger('dev'));
APP.use(bodyParser.json({ limit: '50mb' }));
APP.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
APP.use(cookieParser());
APP.use(express.static(path.join(__dirname, 'public')));

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });

APP.use(jsonParser);
APP.use(urlencodedParser);

APP.use('/', routes);

APP.listen(PORT, () => console.log('\x1b[32m%s\x1b[0m', '\nAPP listening on port ' + PORT + '!\n'));

export default APP;