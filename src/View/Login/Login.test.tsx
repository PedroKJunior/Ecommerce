import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Login from './Login'

describe('Login', () => {
	it('Deve conter usuário', async () => {
		render(<Login />)

		const input = screen.getByTestId('input-user')
		const text = 'Testando'
		userEvent.type(input, text)

		expect(input).toHaveValue(text)
	})

	it('Deve conter password', async () => {
		render(<Login />)

		const input = screen.getByTestId('input-password')
		const text = 'Testando'
		userEvent.type(input, text)

		expect(input).toHaveValue(text)
	})
})
