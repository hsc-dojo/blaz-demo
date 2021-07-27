import styles from '@/styles/Login.module.css'
import Image from 'next/image'

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.loginimage}>
                <Image src={'/image/brand/login.png'} width={300} height={250} alt={'loging image'} />
            </div>
            
            <div className={styles.loginPrompt}>
                <h5>Already bought the eBook? Then Log in with your username and password</h5>
                <a className='btn'>Log In</a>
            </div>
        </div>
    )
}