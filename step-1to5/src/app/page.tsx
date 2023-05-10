import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { posts } from './data/data'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      <p>
      <Link href={'/posts'}>This is a Next Link to Posts Page</Link>
      </p>
      </div>
      </div>
      <div className={styles.description}>
      <div className={styles.center}>
      <p>
      <Link href={'/seo'}>SEO Page by Routs Group</Link>
      </p>
      <p>
      <Link href={'/googleads'}>Google Ads Page by Routs Group</Link>
      </p>
      </div>
      </div>
      {posts.map((postsdata) => (
        <>
        <h1><Link href={`/${postsdata.id}`}>{postsdata.title}</Link></h1>
        <h3>{postsdata.date}</h3>
        </>
      ))}
    </main>
  )
}
