import Head from 'next/head';
import styles from '../styles/layout.module.css';

import utilStyles from '../styles/utils.module.css';




const name: string = 'Reza'
export const siteTitle: string = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>

      <div className={styles.container}>


        <main>
          {children}
        </main>

      </div>
    </>
  )
}


