import { useCallback, useState } from 'react'

export function useToggle(value = false): [boolean, () => void] {
	const [state, setState] = useState<boolean>(value)

	const toggle = useCallback((): void => {
		setState((prevState) => !prevState)
	}, [])

	return [state, toggle]
}
