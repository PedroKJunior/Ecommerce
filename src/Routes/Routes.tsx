import { Routes, Route } from 'react-router'

import Login from '../View/Login/Login'
import Main from '../View/Main/Main'
import ProductView from '../View/Product/ProductView'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/products" element={<Main />} />
			<Route path="/products/:id" element={<ProductView />} />
		</Routes>
	)
}
export default AppRoutes
