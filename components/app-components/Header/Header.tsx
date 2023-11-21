import Link from 'next/link'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import clsx from 'clsx'

import Logo from '../LogoIcon'
import ParishList from '../../../lib/parish'
import { loading, parish } from '../../../lib/atom'
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'next/router'

const Header = () => {
  const [showMenu, toggleMenu] = useState(false)
  const [activeParish] = useAtom(parish)
  const setLoading = useSetAtom(loading)  
  const path: {[key: string]: string} = {
    '/': 'Accueil',
    '/actualites': 'Actualités',
    '/services': 'Services',
    '/horaires': 'Horaires'
  }
  const router = useRouter()
  const parishTarget: {[key: string] : {
    title: string
    img?: StaticImageData
    description: string
    button: {
      title: string
      event?: () => void
    }
  }} = ParishList

  return (
    <div className="header-overall">
      <header className={clsx(activeParish && "parish")} style={{backgroundImage: activeParish ?`url(
        ${parishTarget?.[activeParish]?.img ? parishTarget?.[activeParish]?.img?.src : ""
      })` : ''}}>
        <div className="header-background">
          <div className="header-container">
            <div className="logo-container">
              <Link href={'/'} className={clsx(!activeParish && "logo-full")}>
                <Logo full={!activeParish} />
              </Link>
            </div>
            {activeParish && <div className='menu-mobile-button' onClick={() => toggleMenu(!showMenu)} style={{textShadow: showMenu ? '0px 0px 5px white' : ''}}>
              <div>Menu</div> <span style={{transform: `rotate(${90 * (showMenu ? 1 : -1)}deg)`}}>&#62;</span>
            </div>}
            {activeParish && <div className='nav-container'>
              {Object.keys(path).map(val => (
                <div key={val}>
                  <Link onClick={() => router.asPath !== val && setLoading(true)} className='nav-link' href={val}>
                    {path[val]}
                  </Link>
                </div>
              ))}
            </div>}
          </div>
        </div>
      </header>
      {activeParish && <div className='nav-mobile-container' style={{opacity: showMenu ? 1 : 0, display: showMenu ? '' : 'none' , pointerEvents: showMenu ? 'all' : 'none'}}>
        {Object.keys(path).map(val => (
          <div key={val}>
            <Link onClick={() => {
              if (router.asPath !== val)
                setLoading(true)
              toggleMenu(false)
            }} className='nav-link' href={val}>
              {path[val]}
            </Link>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Header