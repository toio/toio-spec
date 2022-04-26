import useBaseUrl from '@docusaurus/useBaseUrl'
import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export const CubeModel = ({ props }) => {
  const group = useRef()
  const gltfPath = useBaseUrl('/model/toiocorecube_v003.gltf')
  const { nodes, materials } = useGLTF(gltfPath)
  return (
    <group ref={group} rotation={[Math.PI / 2, 0, Math.PI / 2]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_1.geometry}
        material={materials.base}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_2.geometry}
        material={materials.camera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_3.geometry}
        material={materials.tire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_4.geometry}
        material={materials.button}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_5.geometry}
        material={materials.pin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toiocorecube_v003_6.geometry}
        material={materials.logo}
      />
    </group>
  )
}
