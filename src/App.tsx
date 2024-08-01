import { useMediaQuery } from '@uidotdev/usehooks';
import './App.scss'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { useSections } from './hooks/UseSections';
import { sectionsData } from './data/SectionsData';

function App() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const sectionsHook = useSections(sectionsData);

  return (
    <div id='app' className={`${isMobile ? 'sd' : 'md'}`}>
      <Header sectionsHook={sectionsHook} />
      <Content sectionsHook={sectionsHook} />
      <Footer sectionsHook={sectionsHook} />
    </div>
  )
}

export default App
