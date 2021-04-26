import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mtmmtmn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>mtmmtmn</h1>

        <p className={styles.description}>Frontend Developer</p>

        <div className={styles.grid}>
          <a href="https://www.tsuda.ac.jp/" className={styles.card}>
            <h3>Tsuda University</h3>
            <p>Computer Science</p>
          </a>

          <a href="https://www.unryu.org/" className={styles.card}>
            <h3>Kurihara Lab.</h3>
            <p>Human Computer Interaction</p>
          </a>

          <a href="https://beauty.yahoo.co.jp/" className={styles.card}>
            <h3>Yahoo! BEAUTY</h3>
            <p>Hairstyle Media</p>
          </a>

          <a
            href="https://www.johnnys-net.jp/page?artist=10&id=artistTop"
            className={styles.card}
          >
            <h3>ARASHI</h3>
            <p>Artist</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/m17kmat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/TwitterLogoBlack.svg"
            alt="Twitter Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
