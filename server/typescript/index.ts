import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

import path from 'path';

app.use(express.static(path.join(__dirname, '../../public')));


app.listen(PORT, () => console.log('\x1b[34m', `Server listening on port ${PORT}`));
