import React from 'react'
import { IDirectoryItem } from '../../../lib/informations'
import { formatPhone } from '../../../helper/string'
import Image from 'next/image'

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
      >
        <div className="background-directory"></div>
        <div className="directory-title">
          <Image className="directory-image" src={directory?.annuaryPost?.avatar?.sourceUrl} alt={directory?.title} width={45} height={45}/>
          {directory?.title}
        </div>
        <div className='directory-contact' style={{borderBottom: directory?.annuaryPost?.description ? '' : 0}}>
          {directory?.annuaryPost?.manager && <div className="directory-line manager">Responsable :{' '} 
            <span className="directory-info">{directory?.annuaryPost?.manager}</span>
          </div>}
          {directory?.annuaryPost?.contactEmail && <div className="directory-line">Adresse mail : {' '}
            <span className="directory-info">
              <a href={`mailto:${directory?.annuaryPost?.contactEmail}`}>
                {directory?.annuaryPost?.contactEmail}
              </a>
            </span>
          </div>}
          {directory?.annuaryPost?.contactPhone && <div className="directory-line">Téléphone : {' '}
            <span className="directory-info">
              <a href={`tel:${formatPhone(directory?.annuaryPost?.contactPhone)}`}>
                {directory?.annuaryPost?.contactPhone}
              </a>
            </span>
          </div>}
        </div>
        <div className="directory-line">{directory?.annuaryPost?.description}</div>
      </div>
    )
  }
)

export default DirectoryItem
