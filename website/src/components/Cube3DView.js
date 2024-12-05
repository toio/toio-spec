import BrowserOnly from '@docusaurus/BrowserOnly'
import { ResizeObserver } from '@juggle/resize-observer'
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { CubeModel } from './CubeModel'

export const Cube3DView = () => {
  return (
    <BrowserOnly fallback={null}>
      {() => {
        const UA = window.navigator.userAgent.toLowerCase()
        const isIOS = UA.indexOf('iphone') !== -1 || UA.indexOf('ipad') !== -1
        return (
          <Canvas shadows resize={{ polyfill: ResizeObserver }}>
            <color attach="background" args={['#555']} />
            <Suspense fallback={null}>
              <CubeModel />
              <ContactShadows opacity={0.2} scale={0.05} blur={2} far={0.01} />
            </Suspense>
            <PerspectiveCamera makeDefault position={[0, 0.03, 0.06]} near={0.01}>
              <directionalLight position={[0, 0, 5]} />
            </PerspectiveCamera>
            <ambientLight />
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
