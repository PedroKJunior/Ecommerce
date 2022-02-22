import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ISelectList } from '../../Interfaces/ISelectList'
import Select from './Select'

describe('Select', () => {
	const initial = 'Lista de Testes'
	const listTest: ISelectList[] = [
		{ _id: 0, value: 'Testando Valor 0' },
		{ _id: 1, value: 'Testando Valor 1' },
	]
	const handleChange = jest.fn()

	it('Deve iniciar fecahdo', () => {
		render(
			<Select
				valuesList={listTest}
				initialValue={initial}
				selectValue={() => { }}
			/>
		)

		expect(screen.queryByText(initial)).toBeInTheDocument()
		listTest.map((item) => {
			expect(screen.queryByText(item.value)).not.toBeInTheDocument()
		})
	})

	it('deve mostrar as opções quando clicado', () => {
		render(
			<Select
				valuesList={listTest}
				initialValue={initial}
				selectValue={() => { }}
			/>
		)

		expect(screen.queryByText(initial)).toBeInTheDocument()
		listTest.map((item) => {
			expect(screen.queryByText(item.value)).not.toBeInTheDocument()
		})

		const select = screen.getByTestId('select')
		userEvent.click(select)

		listTest.map((item) => {
			expect(screen.queryByText(item.value)).toBeInTheDocument()
		})
	})

	it('deve sinalizar que uma opção foi selecionada e fechar as opções', () => {
		render(
			<Select
				valuesList={listTest}
				initialValue={initial}
				selectValue={handleChange}
			/>
		)

		const select = screen.getByTestId('select')
		userEvent.click(select)

		const option = screen.getByRole('menuitem', {
			name: listTest[0].value,
		})
		expect(option).toBeInTheDocument()

		userEvent.click(option)
		expect(handleChange).toHaveBeenCalledWith(listTest[0]._id)

		expect(screen.queryByText(listTest[0].value)).toBeInTheDocument()
		expect(screen.queryByText(listTest[1].value)).not.toBeInTheDocument()
	})
})
