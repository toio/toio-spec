import BrowserOnly from '@docusaurus/BrowserOnly'
import { ResizeObserver } from '@juggle/resize-observer'
import {
  ContactShadows,
  Environment,
  Float,
  PerspectiveCamera,
  useContextBridge,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect, useState } from 'react'
import { CubeContext } from '../cube/context'
import { CubeModel } from './CubeModel'
import { CubeOrientationControls } from './CubeOrientationControls'

export const HeroCubeView = () => {
  const { cube, scan } = useContext(CubeContext)
  const [enableCubeControl, setEnableCubeControl] = useState(false)

  // If any cube is not connected when CubeControl is enabled, scan cube
  useEffect(() => {
    if (enableCubeControl && cube === undefined) {
      scan().catch(() => {
        setEnableCubeControl(false)
      })
    }
  }, [enableCubeControl])

  // When the cube is disconnected, disable CubeControl
  useEffect(() => {
    if (cube === undefined) {
      setEnableCubeControl(false)
    }
  }, [cube])

  const ContextBridge = useContextBridge(CubeContext)

  const intensity = 0.8
  const radius = 0.025

  return (
    <BrowserOnly fallback={null}>
      {() => {
        return (
          <Suspense fallback={null}>
            <Canvas shadows resize={{ polyfill: ResizeObserver }}>
              <Environment preset="city" />
              <PerspectiveCamera makeDefault position={[0, 0, 0.08]} near={0.01} />
              <ambientLight intensity={intensity / 3} />
              <spotLight
                penumbra={1}
                position={[radius, radius * 2, radius]}
                intensity={intensity * 2}
                castShadow
              />
              <pointLight
                position={[radius * -2, radius * -0.5, radius * -2]}
                intensity={intensity}
              />
              <group
                onDoubleClick={() => {
                  if (navigator.bluetooth === undefined) {
                    return
                  }
                  setEnableCubeControl((enable) => {
                    return !enable
                  })
                }}
              >
                <Float
                  rotation={[0, enableCubeControl ? 0 : -Math.PI / 10, 0]}
                  rotationIntensity={enableCubeControl ? 0 : 1}
                  floatIntensity={enableCubeControl ? 0 : 0.075}
                  speed={2}
                >
                  <ContextBridge>
                    <CubeOrientationControls enable={enableCubeControl}>
                      <CubeModel />
                    </CubeOrientationControls>
                  </ContextBridge>
                </Float>
              </group>
              <ContactShadows opacity={0.2} scale={0.5} position={[0, -radius, 0]} />
            </Canvas>
          </Suspense>
        )
      }}
    </BrowserOnly>
  )
}
