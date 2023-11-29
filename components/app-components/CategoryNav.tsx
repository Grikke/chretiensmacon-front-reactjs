import clsx from "clsx"
import Head from "next/head"

type ICategoryNav = {
  categories: {slug: string, name: string}[]
  activeCategories: string[]
  setActiveCategories: (categories: string[]) => void
}

const CategoryNav = ({
  categories,
  activeCategories,
  setActiveCategories
} : ICategoryNav) => {
  return (
    <div className="category-nav">
      {categories.map(({slug, name}) => (
        <div 
          className={clsx("category-tab", activeCategories.find(c => slug === c) && "active")} 
          key={slug}
          onClick={() => {
            if (activeCategories.find(c => slug === c) && activeCategories.length !== 1)
              setActiveCategories(activeCategories.filter(c => slug !== c))
            else if (!activeCategories.find(c => slug === c))
              setActiveCategories([...activeCategories, slug])
          }}
        >
          {name.toLowerCase()}
        </div>
      ))}
    </div>
  )
}

export default CategoryNav