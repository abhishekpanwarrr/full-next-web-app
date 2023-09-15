import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/hero.png"

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turing your ideas into reality. We bring together the teams from the global tech industry</p>
        <button className={styles.button }>See our works</button>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt='home' className={styles.img}  />
      </div>
    </main>
  )
}
