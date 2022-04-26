import DownloadIcon from '@site/static/img/icons/file_download_black_24dp.svg'
import React from 'react'

const CLASS_NAME_LIST = {
  button: 'button button--outline button--primary',
  dropdown: 'dropdown__link',
}

export const DownloadLink = ({ type = 'button', label, fileUrl }) => {
  const isButton = type === 'button'

  return (
    <a
      className={CLASS_NAME_LIST[type]}
      style={
        isButton
          ? {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          : {}
      }
      href={fileUrl}
      download
      onClick={() => {
        if (typeof gtag === 'function') {
          gtag('event', 'download', {
            download_label: label,
            download_file_url: fileUrl,
            download_from: location.href,
          })
        }
      }}
    >
      {label}
      {isButton && (
        <DownloadIcon
          fill="currentColor"
          style={{ marginLeft: 8, width: '1.5em', height: '1.5em' }}
        />
      )}
    </a>
  )
}
