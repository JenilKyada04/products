
import { BrowserRouter  , Route , Routes} from 'react-router-dom'
import './app.css'
import Homepage from './componet/Mainpage/Homepage'
import Home2 from './componet/secoundPAge/Home2'

function App() {

  return (
    <>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Home2 />} />
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App



// https://www.figma.com/design/VDpk7xCuR3SjtVh9qOz32k/E-commerce-Website-Template--Freebie---Community-?node-id=20-2&p=f