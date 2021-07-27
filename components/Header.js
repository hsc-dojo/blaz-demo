import { useRouter } from "next/router";
import Image from "next/dist/client/image";
import Link from "next/link";
import styles from '@/styles/Header.module.css'



export default function Header({ math, physics }) {
  const router = useRouter();
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          
          layout='fixed'
          src={"/brand.svg"}
          alt={"Blaze Logo"}
          width={100}
          height={50}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>

      <nav>
        <ul>
          {math === true && (
            <li>
              <Link href="/math">
                <a>Math</a>
              </Link>
            </li>
          )}
          {physics === true && (
            <li>
              <Link href="/physics">
                <a>Physics</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
