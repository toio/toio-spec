import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import { DownloadLink } from './DownloadButton'
import styles from './ModelDownloadButtonGroup.module.css'

const MODEL_LIST = [
  { label: 'FBX', path: '/model/toiocorecube_v003.fbx' },
  { label: 'OBJ', path: '/model/toiocorecube_v003.obj.zip' },
  { label: 'GLTF', path: '/model/toiocorecube_v003.gltf' },
  { label: 'STL', path: '/model/toiocorecube_v001.stl' },
  { label: 'STP', path: '/model/toiocorecube_v001.stp' },
]

export const ModelDownloadButtonGroup = () => {
  return (
    <>
      <div className={styles.buttonGroupDropdown}>
        <DropDownButtonGroup />
      </div>
      <div className={styles.buttonGroupSimple}>
        <SimpleButtonGroup />
      </div>
    </>
  )
}

const SimpleButtonGroup = () => {
  return (
    <div className="button-group--block" style={{ gap: 8, flexWrap: 'wrap' }}>
      {MODEL_LIST.map(({ label, path }) => {
        return <DownloadLink key={`key-button-${label}`} label={label} fileUrl={useBaseUrl(path)} />
      })}
    </div>
  )
}

const DropDownButtonGroup = () => {
  return (
    <div className="dropdown dropdown--hoverable">
      <button className="button button--primary">Select Type</button>
      <ul className="dropdown__menu">
        {MODEL_LIST.map(({ label, path }) => {
          return (
            <li key={`key-dropdown-${label}`}>
              <DownloadLink type="dropdown" label={label} fileUrl={useBaseUrl(path)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
