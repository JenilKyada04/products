import Navbar from './Navbar'
import NewArraval from './NewArraval'
import Pop from './Pop'
import ProfilePage from './Hero'
import Topselling from './Topselling'
import Dresspage from './Dresspage'
import CustomerReview from './CustomerReview'
import Footer from './Footer'

function Homepage() {
  return (
    <div>
      <Pop />
      <Navbar/>
      <ProfilePage/>
      <NewArraval/>
      <Topselling/>
      <Dresspage/>
      <CustomerReview/>
      <Footer/>
    </div>
  )
}

export default Homepage
