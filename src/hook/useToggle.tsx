import { useCallback, useState } from 'react'

export function useToggle(value: boolean): [boolean, () => void] {
	const [state, setState] = useState<boolean>(value)

	const toggle = useCallback(() => {
		setState((prevState) => (prevState ? false : true))
	}, [value])

	return [state, toggle]
}
