import Link from 'next/link'
import styles from '@/app/styles.module.css';

export default function LinkBtn() {

  return (
    <div className={styles.linkBtn}>
      <Link href="{path.link}">HOME</Link>
    </div>
  )
}