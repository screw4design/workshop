import styles from "@/app/styles.module.css"

export default function ContentBlock({ subtitle, title, text, images }: {
  subtitle: string,
  title: string,
  text: string,
  images: { path: string, alt: string }[]
}) {

  const imgWrapperClasses = [styles.wrapperImage]

  if (images.length > 1) {
    imgWrapperClasses.push("grid-cols-[2fr_1fr]", "gap-4")
  }
  // if(props.image && props.image2) {
  //   imgWrapperClasses.push("grid-cols-[2fr_1fr]", "gap-4")
  // }

  const subtitleClass = "font-display"

  return (
    <section className={styles.section}>
      {subtitle && <p className={`${styles.grey} ${subtitleClass}`}>{subtitle}</p>}
      {title && (<h2 className="font-display font-bold">{title}</h2>)}
      {text && (<p className={styles.grey} dangerouslySetInnerHTML={{ __html: text }}></p>)}
      {images &&
        <div className={imgWrapperClasses.join(" ")}>
          {images.map((image) => (
            <img
              key={image.path}
              src={image.path}
              width={620}
              height={300}
              alt={image.alt}
            />
          ))}
        </div>
      }
    </section>
  )
}