import { Router } from 'express';

import start from './start';
import login from './login';
import logout from './logout';
import fallback from './fallback';
import home from './home';

const routes = Router();

routes.use('/', start);
routes.use('/login', login);
routes.use('/home', home);
routes.use('/logout', logout);
routes.use('*', fallback);

export default routes;