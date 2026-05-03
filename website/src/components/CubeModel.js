import useBaseUrl from '@docusaurus/useBaseUrl'
import { useGLTF } from '@react-three/drei'
import React from 'react'

export const CubeModel = ({ props }) => {
  const glbPath = useBaseUrl('/model/toiocorecube_v003.glb')
  const { nodes, materials } = useGLTF(glbPath)
  return (
    <group rotation={[Math.PI / 2, 0, Math.PI / 2]} {...props} dispose={null}>
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
