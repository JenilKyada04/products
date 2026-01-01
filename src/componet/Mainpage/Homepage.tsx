import Navbar from './Navbar'
import NewArraval from './NewArraval'
import Pop from './Pop'
import ProfilePage from './ProfilePage'
import Topselling from './Topselling'
import Dresspage from './Dresspage'
import CustomerReview from './CustomerReview'

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
    </div>
  )
}

export default Homepage
