import axios from 'axios'

export class AutenticarUsuario {
	async execute(token: string) {
		const response = await axios.get('http://localhost:3000/autenticar', {
			headers: {
				Authorization: token
			}
		});

		return response.data
	}
}