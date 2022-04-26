import React from 'react'
import { CubeContextProvider } from '../cube/context'

// Default implementation, that you can customize
function Root({ children }) {
  return <CubeContextProvider>{children}</CubeContextProvider>
}

export default Root
