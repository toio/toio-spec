import BrowserOnly from '@docusaurus/BrowserOnly'
import { ResizeObserver } from '@juggle/resize-observer'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { CubeModel } from './CubeModel'

export const Cube3DView = () => {
  const intensity = 0.8
  const radius = 0.025
  return (
    <BrowserOnly fallback={null}>
      {() => {
        const UA = window.navigator.userAgent.toLowerCase()
        const isIOS = UA.indexOf('iphone') !== -1 || UA.indexOf('ipad') !== -1
        return (
          <Canvas shadows resize={{ polyfill: ResizeObserver }}>
            <color attach="background" args={['#999']} />
            <Suspense fallback={null}>
              <CubeModel />
              <ContactShadows opacity={0.2} scale={0.05} blur={2} far={0.01} />
              <Environment preset="city" />
            </Suspense>
            <PerspectiveCamera makeDefault position={[0, 0.03, 0.06]} near={0.01} />
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
            <OrbitControls
              enablePan={false}
              enableZoom={!isIOS}
              enableRotate={!isIOS}
              autoRotate={!isIOS}
              minDistance={0.035}
              maxDistance={0.5}
              target={[0, 0.01, 0]}
            />
          </Canvas>
        )
      }}
    </BrowserOnly>
  )
}
