import { GetServerSideProps } from 'next'

import { getArticles, IArticleItem } from '../../lib/articles'
import { addApolloState, initializeApollo } from '../../lib/appolo'
import {useState, useEffect} from 'react'
import { getDirectories, getPages, IDirectoryItem, IPageItem } from '../../lib/informations'
import Link from 'next/link'
import DirectoryItem from '../../components/app-components/DirectoryItem/DirectoryItem'
import CustomHead from '../../components/app-components/CustomHead'

type IDirectoryPage = {
  directories: IDirectoryItem[]
}

export default function YouthDirectoryPage({directories} : IDirectoryPage) {
  return (
    <div>
      <CustomHead title={"Annuaire des Équipes Pastorales"} description="Annuaire des Équipes Pastorales Chrétiennes de Mâcon."/>
      <div className="section-container">
        <h2>Annuaire du Doyenné</h2>
        <div className="page-container">
          <div className="directories-list">
            {directories.map((dir) => (
              <DirectoryItem key={dir?.title} directory={dir}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    //Initialize Apollo Client for SSR
    const client = initializeApollo()
    const { data } = await client.query({ query: getDirectories })

    if (!data?.directories?.nodes)
      return { notFound: true }
    return addApolloState(client, {
      props: { pageType: 'infopage', directories: data?.directories?.nodes.filter((dir: IDirectoryItem) => dir?.annuaryPost?.type === "individual") },
    })
  } catch (e) {
    console.error(e)
    return { notFound: true }
  }
}