import Image from 'next/image';
import notfoud from '../assets/404.gif'
import Navbar from '../components/Navbar'
const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div><h1>404</h1></div>
                <div>
                    <Image src = {notfoud}
                            layout = "responsive"
                            m-50="true"
                            alt='not found'
                            />
                </div>
                <div><h1>Look like you're lost</h1></div>
                <div><h4>The page you are looking for not avaible!</h4></div>
            </div>
        </div>
    );
}

export default NotFound;