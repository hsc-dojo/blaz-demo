import styles from '@/styles/Footer.module.css'
import {FcPhoneAndroid} from 'react-icons/fc'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <h3>This is a Demo Site</h3>
            <p>&copy; Turjo </p>
            <div>
              <p>01684635839</p>
            </div>
        </div>
    )
}
