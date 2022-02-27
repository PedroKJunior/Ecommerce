import { useState } from 'react'
import { MdLock, MdPerson, MdLogin } from 'react-icons/md'

import { userLogin } from '../../API/login'
import Loading from '../../Components/Loading/Loading'
import { IUser } from '../../Interfaces/IUser'
import './login.sass'

const Login = () => {
	const initialLogin: IUser = { user: '', password: '' }
	const [login, setLogin] = useState<IUser>(initialLogin)
	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<boolean>(false)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setError(false)
		setLogin({ ...login, [event.target.name]: event.target.value })
	}

	const handleLogin = () => {
		setLoading(true)
		const fetchLogin = async () => {
			const response = await userLogin(login)
			console.log(response)
			if (response === 'error') {
				setError(true)
			}
			setLoading(false)
			setLogin(initialLogin)
		}

		fetchLogin()
	}

	return (
		<div className="content-login">
			<div className={`box ${error && 'error'}`}>
				<h1>Magazine</h1>

				<span>{error && 'Erro ao tentar fazer Login'}</span>
				<div className="input">
					<MdPerson size={25} />
					<input
						type="text"
						placeholder="Usuário"
						name="user"
						onChange={handleChange}
						onClick={() => setError(false)}
						value={login.user}
					/>
				</div>
				<div className="input">
					<MdLock size={20} />
					<input
						type="password"
						placeholder="Senha"
						name="password"
						onChange={handleChange}
						onClick={() => setError(false)}
						value={login.password}
					/>
				</div>
				<button onClick={handleLogin}>
					<MdLogin size={25} />
					<span>Login</span>
				</button>
			</div>
			{loading && <Loading color="#FFFFFF" />}
		</div>
	)
}
export default Login
