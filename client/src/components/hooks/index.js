import { useState } from 'react'
export const useInput = initialState => {
  const [value, setValue] = useState(initialState)
  return {
    onChange: e => setValue(e.target.value),
    value
  }
}
export const useSelect = initialState => {
  const [value, setValue] = useState(initialState)
  return {
    onChange: (e, { value }) => setValue(value),
    value
  }
}
