
import { BrowserRouter  , Route , Routes} from 'react-router-dom'
import './app.css'
import Homepage from './componet/Mainpage/Homepage'
import Home2 from './componet/secoundPAge/Home2'
import ScrollToTop from './componet/Mainpage/ScrollToTop'
import Cart from './componet/cart/cart'

function App() {

  return (
    <>
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Home2 />} />
        <Route path="/newarrivals" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </BrowserRouter>

    </>
  )
}

export default App


// https://www.figma.com/design/VDpk7xCuR3SjtVh9qOz32k/E-commerce-Website-Template--Freebie---Community-?node-id=20-2&p=f
// https://www.figma.com/file/VDpk7xCuR3SjtVh9qOz32k/E-commerce-Website-Template--Freebie---Community-?node-id=20-2&t=JYJ1k3b0b0mJlYk2-0
