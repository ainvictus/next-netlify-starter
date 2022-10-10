import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        ** <img src="/underconstruction.png" alt="construction" className={styles.logo} />
           <img src="/augustus_invictus_law.jpg" alt="construction" className={styles.photo} />**
      </footer>
    </>
  )
}
