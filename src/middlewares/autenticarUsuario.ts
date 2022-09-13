import axios from 'axios'
import { NextFunction, Request, Response } from 'express';

export async function autenticarUsuario(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization

	const response = await axios.get('http://localhost:3000/autenticar', {
		headers: {
			Authorization: authToken as string
		}
	});

	res.set(response.data);

	return next();
}