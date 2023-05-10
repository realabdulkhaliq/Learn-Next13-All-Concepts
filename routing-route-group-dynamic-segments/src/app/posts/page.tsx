'use client'
import {useRouter} from "next/navigation"
import styles from '../page.module.css'

const Post = () => {
    const router = useRouter();
    return (
        <main className={styles.main}>
        <h1>This is Posts Page</h1>
        <p>
        <button type="button" onClick={()=> router.push('/')} className={styles.button}>This is a link to Home Page using useRouter</button>
        </p>
        {/*
        useRouter only works in Client Components. Add the "use client" directive at the top of the file
        */}
        </main>
    )
}

export default Post