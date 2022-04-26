import { useFrame } from '@react-three/fiber'
import React, { useContext, useEffect, useRef } from 'react'
import { Box3, Vector3 } from 'three'
import { CubeContext } from '../cube/context'

export const CubeOrientationControls = ({ enable, children }) => {
  const { cube } = useContext(CubeContext)
  const orientationRef = useRef({ roll: 0, pitch: 0, yaw: 0 })
  const innerRef = useRef()
  const outerRef = useRef()

  // cube control
  useEffect(() => {
    if (cube !== undefined) {
      cube.configuration.enablePostureAngleDetection({ enable: true })
      cube.on('posture-angle:euler', ({ detail: { roll, pitch, yaw } }) => {
        orientationRef.current.roll = (roll * Math.PI) / 180
        orientationRef.current.pitch = -(pitch * Math.PI) / 180
        orientationRef.current.yaw = -(yaw * Math.PI) / 180
      })
    }
  }, [cube])

  // setting to rotate object center
  useEffect(() => {
    innerRef.current.position.set(0, 0, 0)
    const box3 = new Box3().setFromObject(innerRef.current)
    const center = new Vector3()
    box3.getCenter(center)
    innerRef.current.position.set(-center.x, -center.y, -center.z)
  }, [])

  // rotate in each frame
  useFrame(() => {
    if (enable && cube?.isConnected()) {
      outerRef.current.rotation.x = orientationRef.current.pitch
      outerRef.current.rotation.y = orientationRef.current.yaw
      outerRef.current.rotation.z = orientationRef.current.roll
      outerRef.current.rotation.order = 'YXZ'
    } else {
      outerRef.current.rotation.x = 0
      outerRef.current.rotation.y = 0
      outerRef.current.rotation.z = 0
    }
  })

  return (
    <group ref={outerRef}>
      <group ref={innerRef}>{children}</group>
    </group>
  )
}
