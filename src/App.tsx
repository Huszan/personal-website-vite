import { useMediaQuery } from '@uidotdev/usehooks';
import './App.scss'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

function App() {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <div id='app' className={`${isMobile ? 'sd' : 'md'}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
