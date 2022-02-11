import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'

import { SearchMenu } from './SearchMenu'

describe('SearchMenu', () => {
	it('Deve conter valor', async () => {
		const handleChange = jest.fn()
		render(<SearchMenu onInputChange={handleChange} onClick={() => { }} />)

		const input = screen.getByTestId('input-search-item')
		const text = 'Testando'
		userEvent.type(input, text)

		await waitFor(() => {
			expect(input).toHaveValue(text)
			expect(handleChange).toHaveBeenCalledTimes(text.length)
		})
		expect(handleChange).toHaveBeenCalledWith(text)
	})
})
