import Navbar from './Navbar'
import NewArraval from './NewArraval'
import Pop from './Pop'
import ProfilePage from './ProfilePage'

function Homepage() {
  return (
    <div>
      <Pop />
      <Navbar/>
      <ProfilePage/>
      <NewArraval/>
    </div>
  )
}

export default Homepage
