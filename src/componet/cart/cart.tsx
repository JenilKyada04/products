import Breadcrumb2 from '../cart/Breadcrumb2'
import Footer from '../Mainpage/Footer'
import Navbar from '../Mainpage/Navbar'
import Pop from '../Mainpage/Pop'
import Yourcart from './Yourcart'

function cart() {
    return (
        <div>
            <Pop />
            <Navbar />
            <Breadcrumb2/>
            <Yourcart/>
            <Footer/>
        </div>
    )
}

export default cart
