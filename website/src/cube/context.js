// type CubeContextType = {
//   cube: Cube,
//   scan: () => Promise<Cube>
// }
// export const CubeContext = React.createContext<CubeContextType>({})

import React, { useState } from 'react'
import * as Cube from './cube'

export const CubeContext = React.createContext({})

export const CubeContextProvider = ({ children }) => {
  const [cube, setCube] = useState()

  // scan and connect
  const scan = async () => {
    const cube = await Cube.scan()
    cube.on('disconnect', () => {
      setCube(undefined)
    })
    setCube(cube)
    return cube
  }

  return <CubeContext.Provider value={{ cube, scan }}>{children}</CubeContext.Provider>
}
