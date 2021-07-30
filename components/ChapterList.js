import styles from "@/styles/ChapterList.module.css"

import Link from "next/link"
import { useRouter } from "next/router"



export default function ChapterList({ chapterName, Writer, link }) {
       
    const router = new useRouter()
    return (
        <div className={styles.ListCard}>
            <h3>{chapterName}</h3>
            <h5>{Writer}</h5>
            <button onClick={()=>{router.push(link)}} className={styles.link} href={link}>Go to Chapter</button>
        </div>
    )
}
