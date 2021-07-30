import Layout from '@/components/Layout'
import ChapterList from '@/components/ChapterList'
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Layout>
        
        <div className={styles.ChapterList}>
           <ChapterList chapterName={"Work Power and Energy"} link={"physics/mathematical_problem/wpe"} Writer={"Dr Md Gyasuddin Ahmed"} />
           <ChapterList chapterName={"Static Electricity"} link={"physics/mathematical_problem/static_electricity"} Writer={"Dr Md Gyasuddin Ahmed"}/>
        </div>
       
      </Layout>
    </div>
  )
}
