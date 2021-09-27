import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Contact } from './components/contact'
import { Middle } from './components/middle'
import JsonData from './data/data.json'

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Middle />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
