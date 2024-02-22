import Header from './components/header/Header'
import Sections from './components/sections/Sections'
import Slider from './components/Slider';
function App() {
  const mockImagenes = [
		'https://picsum.photos/id/1020/400',
		'https://picsum.photos/id/1025/400',
		'https://picsum.photos/id/1010/400',
	];

  return (
    <>
     <Header/>
     <Sections/>
     <Slider imagenes={mockImagenes} />;
    </>
  )
}

export default App
