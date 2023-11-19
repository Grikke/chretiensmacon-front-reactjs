import { IArticleItem } from '../../../lib/articles'
import Carousel from 'react-multi-carousel'
import Button from '../Button/Button';
import Link from 'next/link';


import "react-multi-carousel/lib/styles.css";

export type IArticle = {
  articles: IArticleItem[]
}

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const ArticleCarousel = (
  (
    {articles} : IArticle
  ) => {
    return (
      <Carousel containerClass="carousel-container" sliderClass='carousel-container' autoPlay={articles.length < 1} autoPlaySpeed={5000} infinite={true} responsive={responsive}>
        {articles.slice(0, 10).map(article => (
          <div
            className="carousel-item carousel-article"
            key={article.slug} 
          >
            <div 
              className="carousel-thumbnail" 
              style={{
                backgroundImage: `url(${article?.featuredImage?.node?.sourceUrl})`
              }}
            />
            <div className="carousel-filter" />
            <div className="carousel-title">{article.title}</div>
            <div className="carousel-button-container">
            <Link href={`/articles/${article.slug}`}>
              <Button variant='primary' className="carousel-button" size={"lg"}>
                  En savoir plus
              </Button>
            </Link>
            </div>
          </div>
        ))}
      </Carousel>
    )
  }
)

export default ArticleCarousel
