import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req: Request, res: Response) => {
  res.send('typescript-node');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
