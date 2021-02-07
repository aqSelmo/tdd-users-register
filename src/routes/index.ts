import { Router } from 'express';

import userRoutes from './users.routes';

const route = Router();

route.use('/users', userRoutes);

export default route;
