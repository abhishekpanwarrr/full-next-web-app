import Image from "next/image"
import styles from "./footer.module.css"


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Abhishek. All rights are reserved.
      </div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} width={20} height={20} alt="facebook" />
        <Image src="/2.png" className={styles.icon} width={20} height={20} alt="facebook" />
        <Image src="/3.png" className={styles.icon} width={20} height={20} alt="facebook" />
        <Image src="/4.png" className={styles.icon} width={20} height={20} alt="facebook" />
      </div>
    </div>
  )
}

export default Footer