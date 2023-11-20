import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useAtom } from 'jotai'
import { parish } from '../../lib/atom'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../app-components/Header/Header'
import InformativeHeader from '../app-components/Header/InformativeHeader'
import Footer from '../app-components/Footer'

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

  useEffect(() => {
    if (activeParish)
      localStorage.setItem('parish', activeParish)
  }, [activeParish])
  
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nova+Cut&display=swap" rel="stylesheet" /> 
      </Head>
      <InformativeHeader/>
      <Header />
      <main className="main-container">
        {children}
      </main>
      <Footer/>
    </div>
  )
}