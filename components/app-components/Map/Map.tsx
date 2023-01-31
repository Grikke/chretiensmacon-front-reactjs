import React, { forwardRef } from 'react'
import Estienne from '../../../public/map/parish-estienne.svg'

export type IMap = {
  
}

const Map = forwardRef<IMap>(({}) => {
    return (
      <>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="888.33px" height="596.05px" viewBox="0 0 888.33 596.05"
	  >
          <use xlinkHref={"/map/background.svg"}/>
        </svg>
      </>
    )
  }
)
Map.displayName = 'Map'

export default Map
