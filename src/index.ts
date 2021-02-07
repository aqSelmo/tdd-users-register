import dotenv from 'dotenv';

import app from './server';
import database from './database';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

app.listen(process.env.PORT || 3000, async () => {
  await database.connectToDatabase();
});
