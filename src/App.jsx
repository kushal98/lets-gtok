import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Contact } from './components/contact'
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
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
