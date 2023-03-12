import Link from 'next/link';
import {useState, useEffect} from 'react'
import Button from '../components/app-components/Button/Button';

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
      <div className="section-container">
        <h2>Erreur 404</h2>
        <div className="section-message">
          {displayMessage}
        </div>
        <Button variant={"primary"} size={"lg"} className="redirect-button">
          <Link href="/">
            Revenir à l'Accueil
          </Link>
        </Button>
      </div>
    </div>
  )
}