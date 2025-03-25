// app/page.tsx
import styles from "./styles.module.css"

function ContentBlock(props) {

  const imageWrapperClasses = [styles.wrapperImage]
  if (props.image && props.image2) {
    imageWrapperClasses.push("grid-cols-[1fr_200]", "gap-4")
  }
  return (
    <section className={styles.section} >
      <p>{props.subtitle}</p>
      <h2>
        {props.title}
      </h2>
      <p className={styles.grey}>{props.text}</p>
      <div className={imageWrapperClasses.join(' ')}>
        <img
          src={props.image}
          width={620}
          height={300}
          alt='BSTのオーダーメイドWEB制作の実績のビジュアル。'
        />
        {
          props.image2 && (
            <img
              src={props.image2}
            />
          )
        }
      </div>

    </section >
  )
}


export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.section}>
        <h1 className="mb-12 font-bold font-display">
          「これが欲しかった」、<br />
          そう言われる<br />
          デザインとシステムを。
        </h1>
        <p>BSTは数百のWEBサイト・システム構築を成功させたプロフェッショナル集団です。規模の大きさや業種に関わらず、クライアントが直面する課題に対し最適なプランで成功に導きます。</p>
        <p>BSTのサービスをご紹介します。</p>
      </section>

      <ContentBlock
        title="オーダーメイドのウェブデザイン & 開発"
        text="BSTでは、ビジネスニーズに合わせたウェブサイトやシステムを提供しています。高性能なウェブサイトやCMSを構築し、デジタルプレゼンスを強化し、業務の効率化を実現します。"
        image="top_01.png"
        subtitle="01"
      />

      <ContentBlock
        title="信頼できるITサポート & カスタムソリューション"
        text="ITサポートとデータ管理で、ビジネス運営をサポートします。トラブルシューティングやデータ入力、カスタムシステムの開発など、幅広いサービスを提供しています。"
        image="top_02.png"
        subtitle="02"
      />

      <ContentBlock
        title="スタッフの行動が会社の運営を決める"
        text="BSTはスタッフが人生を大切に過ごすため公私どちらの時間も大切にする会社です。"
        image="top_recruit_01.png"
        image2="top_recruit_02.png"
        subtitle="RECRUIT"
      />

    </main>
  )
}