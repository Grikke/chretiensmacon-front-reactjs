import Head from "next/head"

type ICustomHead = {
  title?: string
  description?: string
  image?: string
  url?: string
}

const CustomHead = ({
  title,
  description,
  image,
  url
} : ICustomHead) => {
  const metaTitle = title ? `Chrétiens Mâcon - ${title}` : "Chrétiens Mâcon"
  const metaUrl = url ?? "https://www.chretiensmacon.fr/"
  const metaImage = image ?? "https://www.chretiensmacon.fr/icon.png"
  const metaDescription = description ?? "Informez vous sur les activités du Doyenné Catholique du Mâconnais. Regardez les horaires de la messe."
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="theme-color" content="#752c2d"></meta>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
    </Head>
  )
}

export default CustomHead