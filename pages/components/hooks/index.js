import { useState } from 'react'
export const useInput = initialState => {
  const [value, setValue] = useState(initialState)
  const clear = () => {
    setValue(initialState)
  }
  return {
    onChange: e => setValue(e.target.value),
    value,
    clear
  }
}
export const useSelect = initialState => {
  const [value, setValue] = useState(initialState)
  const clear = () => {
    setValue(initialState)
  }
  return {
    onChange: (e, { value }) => setValue(value),
    value,
    clear
  }
}
