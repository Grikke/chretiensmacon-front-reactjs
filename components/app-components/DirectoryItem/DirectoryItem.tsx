import React from 'react'
import { IDirectoryItem } from '../../../lib/informations'
import { formatPhone } from '../../../helper/string'

export type IDirectory = {
  directory: IDirectoryItem
}

const DirectoryItem = (
  (
    {directory} : IDirectory
  ) => {
    return (
      <div 
        className="directory-container" 
        style={{backgroundImage: `url(${directory?.annuaryPost?.avatar?.sourceUrl})`}}
      >
        <div className="background-directory"></div>
        <div className="directory-title">{directory?.title}</div>
        {directory?.annuaryPost?.manager && <div className="directory-line manager">Responsable :{' '} 
          <span className="directory-info">{directory?.annuaryPost?.manager}</span>
        </div>}
        <div className="directory-line">{directory?.annuaryPost?.description}</div>
        {directory?.annuaryPost?.contactEmail && <div className="directory-line">Adresse mail : {' '}
          <span className="directory-info">{directory?.annuaryPost?.contactEmail}</span>
        </div>}
        {directory?.annuaryPost?.contactPhone && <div className="directory-line">Téléphone : {' '}
          <span className="directory-info">
            <a href={`tel:${formatPhone(directory?.annuaryPost?.contactPhone)}`}>
              {directory?.annuaryPost?.contactPhone}
            </a>
          </span>
        </div>}
      </div>
    )
  }
)

export default DirectoryItem
