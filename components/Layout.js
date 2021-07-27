import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'
import Showcase from "./Showcase"
import styles from '@/styles/Layout.module.css'
import Login from '@/components/Login'
import Feature from '@/components/Feature'
import {useRouter} from 'next/router'

export default function Layout({ title, description, keywords, children, math, physics }) {
    const router = useRouter()
           
    return (
        <div>
            <Head>
                <title>{title }</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            {router.pathname ==='/' && <Showcase/>}
            {router.pathname !== '/' && <Header math={math} physics={physics} />}
            {router.pathname === '/' && <Login />}
            {router.pathname === '/' && <Feature/>}
            <div className={styles.container}>{children}</div>
            
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Blaze | A Comprehensive Guidance',
    description: 'A Digital Book Offering Solution to every important TextBooks and Concept Building Tutorials.',
    keywords: 'eBook, Bangladesh, Education, HSC, SU Ahmed, Dr Md Gyas Uddin, Ketab, Dr. Ishak, GuideBook, Physics, Math, Chemistry',
    math: false,
    physics:false
}


