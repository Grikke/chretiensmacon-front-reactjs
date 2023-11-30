import Map from '../components/app-components/Map/Map'
import CustomHead from '../components/app-components/CustomHead'

type IHomePage = {
}

export default function Home({} : IHomePage) {
  return (
    <div>
      <CustomHead/>
      <div className="section-container">
        <h1>Paroisses Catholiques du Mâconnais</h1>
        <Map/>
      </div>
    </div>
  )
}
