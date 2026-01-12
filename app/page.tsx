import styles from "./page.module.scss";
import React from "react";
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
