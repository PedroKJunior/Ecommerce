import { Routes, Route } from 'react-router'

import Cart from '../View/Cart/Cart'
import Login from '../View/Login/Login'
import Main from '../View/Main/Main'
import ProductView from '../View/Product/ProductView'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/products" element={<Main />} />
			<Route path="/products/:id" element={<ProductView />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	)
}
export default AppRoutes
