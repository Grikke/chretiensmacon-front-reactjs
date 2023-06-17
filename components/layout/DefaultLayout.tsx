import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import styles from '../../styles/Home.module.css'
import { useAtom } from 'jotai'
import { useMediaQuery } from 'react-responsive'
import { parish } from '../../lib/atom'

import Logo from '../../public/logo.svg'
import LogoFull from '../../public/logo-full.svg'

import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ParishList from '../../lib/parish'

export default function DefaultLayout({children} : {children: ReactNode}) {
  const [activeParish, setActiveParish] = useAtom(parish)
  const [showMenu, toggleMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('parish'))
      setActiveParish(localStorage.getItem('parish'))
    else 
      router.push('/')
  }, [])

  useEffect(() => {
    toggleMenu(false)
  }, [router.asPath])
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    if (activeParish)
      localStorage.setItem('parish', activeParish)
  }, [activeParish])

  const parishTarget: {[key: string] : {
    title: string
    img?: StaticImageData
    description: string
    button: {
      title: string
      event?: () => void
    }
  }} = ParishList
  
  const path: {[key: string]: string} = {
    '/': 'Accueil',
    '/actualites': 'Actualités',
    '/sacrements': 'Sacrements',
    '/informations': 'Informations',
    '/horaires': 'Horaires'
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Chrétiens Mâcon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nova+Cut&display=swap" rel="stylesheet" /> 
      </Head>

      <div className="informative-header">
        <div className="informative-container">
          <div>
            <button>
              <a href="https://autun.catholique.fr/">Diocèse d{"'"}Autun</a>
            </button>
          </div>
          {activeParish ? <div><b>Paroisse - </b>{isMobile ? parishTarget?.[activeParish]?.title.replace('de Paul', '').trim() : parishTarget?.[activeParish]?.title}</div> :
           <div>Pas de paroisse</div>}
        </div>
      </div>
      <header className={clsx(activeParish && "parish")} style={{backgroundImage: activeParish ?`url(
        ${parishTarget?.[activeParish]?.img ? parishTarget?.[activeParish]?.img?.src : ""
      })` : ''}}>
        <div className="header-background">
          <div className="header-container">
            <div className="logo-container">
              <Link href={'/'} className={clsx(!activeParish && "logo-full")}>
                <Image src={activeParish ? Logo : LogoFull} alt="Chrétiens Mâcon"/>
              </Link>
            </div>
            {activeParish && <div className='menu-mobile-button' onClick={() => toggleMenu(!showMenu)} style={{textShadow: showMenu ? '0px 0px 5px white' : ''}}>
              <div>Menu</div> <span style={{transform: `rotate(${90 * (showMenu ? 1 : -1)}deg)`}}>&#62;</span>
            </div>}
            {activeParish && <div className='nav-container'>
              {Object.keys(path).map(val => (
                <div key={val}>
                  <Link className='nav-link' href={val}>
                    {path[val]}
                  </Link>
                </div>
              ))}
            </div>}
          </div>
        </div>
      </header>
      {activeParish && <div className='nav-mobile-container' style={{opacity: showMenu ? 1 : 0, pointerEvents: showMenu ? 'all' : 'none'}}>
        {Object.keys(path).map(val => (
          <div key={val}>
            <Link onClick={() => toggleMenu(false)} className='nav-link' href={val}>
              {path[val]}
            </Link>
          </div>
        ))}
      </div>}

      <main className="main-container">
        {children}
      </main>

      <footer className={styles.footer}>
        <div className="footer-section">
          Développé par et pour le Mâconnais
        </div>
        <div className="footer-section">
          Test
        </div>
      </footer>
    </div>
  )
}