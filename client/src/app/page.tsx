import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from './page.module.css'

const roboto = Roboto({ 
  weight: '300', 
  subsets: ['latin'] 
})


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={roboto.className}>Hello World</h1>
    </main>
  )
}
