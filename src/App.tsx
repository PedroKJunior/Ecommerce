import { BrowserRouter } from 'react-router-dom'

import { LoginRoutes } from './Routes/Routes'
import './Styles/global.sass'

function App() {
	return (
		<BrowserRouter>
			<LoginRoutes />
		</BrowserRouter>
	)
}

export default App
