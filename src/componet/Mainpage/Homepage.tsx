import Navbar from './Navbar'
import NewArraval from './NewArraval'
import Pop from './Pop'
import ProfilePage from './ProfilePage'
import Topselling from './Topselling'

function Homepage() {
  return (
    <div>
      <Pop />
      <Navbar/>
      <ProfilePage/>
      <NewArraval/>
      <Topselling/>
    </div>
  )
}

export default Homepage
