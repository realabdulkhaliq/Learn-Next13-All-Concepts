/*
- warn Failed to reload dynamic routes: 
Error: You cannot use different slug names for the same dynamic path ('id' !== 'name').
*/
import Link from 'next/link'
import styles from '../../page.module.css'

export default function GiveName({ params, searchParams }: {
    params: { name: string },
    searchParams: { ids: string },
  }) {
    
      return (
        <>
        <main className={styles.main}>
        <div className={styles.center}>
            <h1>My name is {params.name}.</h1>
        </div>
    </main>
        <Link href={'/'}><button>Back to Home</button></Link>
    </>
      )
    }