import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.iconsFooter}>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitter className={styles.footer_i} size={30} />
          </a>
          <a href="https://m.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook className={styles.footer_i} size={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram className={styles.footer_i} size={30} />
          </a>
        </div>
        <span className={styles.copyright}>RAINBOW - fakEcommerce - 2023®</span>
        <span className={styles.signature}>
          Build with &#128154; by
          <strong className={styles.joPay}> JoPay</strong>
        </span>
      </div>
    </footer>
  )
}
