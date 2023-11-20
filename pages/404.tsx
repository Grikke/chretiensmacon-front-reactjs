import Link from 'next/link';
import {useState, useEffect} from 'react'
import Button from '../components/app-components/Button/Button';
import CustomHead from '../components/app-components/CustomHead';

type IErrorPage = {
  
}

export default function ErrorPage({} : IErrorPage) {
  const message = "Cette page n'existe pas, plus ou pas encore."
  const [displayMessage, setDisplayMessage] = useState(message);
  useEffect(() => {
    var shortMessage = ""
    let showMessageInterval = setInterval(() => {
      shortMessage = message?.slice(0, shortMessage.length) + message?.slice(shortMessage.length, shortMessage.length + 1).toUpperCase()
      if (shortMessage.length === message.length)
        clearInterval(showMessageInterval)
      setDisplayMessage(shortMessage)
    }, 50)
    return () => clearInterval(showMessageInterval)
  }, []);
  return (
    <div>
      <CustomHead title={"Page non trouvée"} description="Cette page ou article n'a pas pu être trouvé."/>
      <div className="section-container error-container">
        <div>
          <h2>Erreur 404</h2>
          <div className="section-message">
            {displayMessage}
          </div>
          <Button variant={"primary"} size={"lg"} className="redirect-button">
            <Link href="/">
              Revenir à l{"'"}Accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}