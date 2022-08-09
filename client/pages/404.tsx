import Image from 'next/image';
import notfoud from '../assets/404.gif'
import Navbar from '../components/Navbar'
import styles from './styles.module.scss'


const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className={styles.topmissing}>404</div>
                <div className={styles.topmissing_img}>
                    <Image src = {notfoud} alt='not found'/>
                </div>
                <div className={styles.topmissing_txt}><h1>Look like you are lost</h1></div>
                <div className={styles.topmissing_txt}><h4>The page you are looking for not avaible</h4></div>
            </div>
        </div>
    );
}

export default NotFound;