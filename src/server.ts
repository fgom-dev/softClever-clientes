import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { exec } from 'child_process'
import { AutenticarUsuario } from './middlewares/autenticarUsuario';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

	const authToken = req.headers.authorization;

	const autenticar = new AutenticarUsuario();

	const response = await autenticar.execute(authToken as string)

	process.env.DATABASE_URL = "mysql://softclever:soft@1973@localhost:3306/" + response.nomeBanco;

	exec('yarn prisma migrate dev');

	res.status(200).json(response);
})

app.listen(3333, () => console.log(`Server started on port 3333`));