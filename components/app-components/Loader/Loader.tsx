import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="loader-animation">
      <Image alt="Chargement..." src={'/icon/loader.svg'} width={75} height={75}/>
    </div>
  )
}

export default Loader
