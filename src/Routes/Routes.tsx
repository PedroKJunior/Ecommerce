import { Routes, Route, Navigate } from 'react-router-dom'

import Cart from '../View/Cart/Cart'
import Login from '../View/Login/Login'
import Main from '../View/Main/Main'
import ProductView from '../View/Product/ProductView'
import View from '../View/View'
import { isAuthenticated } from './auth'

const PrivateRoute = () =>
	isAuthenticated() ? <Cart /> : <Navigate to="/login" />

export const LoginRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<View />} />
		</Routes>
	)
}

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/products/:id" element={<ProductView />} />
			<Route path="/cart" element={<PrivateRoute />} />
		</Routes>
	)
}
