'use client';
import styles from '@/app/styles.module.css'
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const siteLinks = [
    {
      path: "/",
      label: "BST Co.,ltd."
    },
    {
      path: "/about",
      label: "About"
    },
    {
      path: "/recruit",
      label: "Recruit"
    }
  ]

  return (
    <div className={styles.navBarWrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={`/bst_emblem.png`}
            width={56}
            height={38}
            alt="BSTのロゴ"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.ul}>
          {siteLinks.map((link, index) => (
            <li key={link.label + index}>
              <Link href={link.path} className={`${styles.link} ${pathname === link.path ? styles.currentPage : ""}`}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}