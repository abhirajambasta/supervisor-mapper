import { Router } from 'express';

import landing from './landing';
import difference from './difference';
import download from './download';
import edit from './edit';
import modify from './modify';

const routes = Router();

routes.use('/', landing);
routes.use('/difference', difference);
routes.use('/download', download);
routes.use('/edit', edit);
routes.use('/modify', modify);

export default routes;