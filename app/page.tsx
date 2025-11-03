import styles from "./page.module.scss";
// import SignUpPage from "./signup/page";
// import LogIn from "./login/page";
import Link from 'next/link'
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}
