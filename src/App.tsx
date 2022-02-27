import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './Routes/Routes'
import './Styles/global.sass'

//import MainMenu from './Components/MainMenu/MainMenu'

function App() {
	return (
		<BrowserRouter>
			{/* <MainMenu /> */}
			{/* <Loading color="#0433FF" /> */}
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
