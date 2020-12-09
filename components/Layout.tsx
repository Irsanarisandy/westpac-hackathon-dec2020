// @ts-ignore
import styles from '../styles/layout.module.css';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
    </div>
  );
}
