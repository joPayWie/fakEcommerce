import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.main_footer}>
      <div className={styles.container_footer}>
        <div className={styles.icons_footer}>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitter size={30} />
          </a>
          <a href="https://m.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram size={30} />
          </a>
        </div>
        <span className={styles.copyright}>RAINBOW - fakEcommerce - 2023®</span>
        <span className={styles.signature}>
          Build with &#128154; by
          <strong className="text-white text-3xl"> JoPay</strong>
        </span>
      </div>
    </footer>
  )
}
