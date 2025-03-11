import styles from "./styles.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className="-indent-[1ch] font-bold">
          「これが欲しかった」、<br />
          そう言われる<br />
          デザインとシステムを。
        </h1>
        <p>BSTは数百のWEBサイト・システム構築を成功させたプロフェッショナル集団です。規模の大きさや業種に関わらず、クライアントが直面する課題に対し最適なプランで成功に導きます。</p>
        <p>BSTのサービスをご紹介します。</p>
      </section>
    </main>
  );
}
