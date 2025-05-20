import styles from '@/app/styles.module.css';
import styleWorks from './styleWorks.module.css';
import Link from 'next/link';
import Image from 'next/image'
import { notFound } from 'next/navigation';

export default async function Page({ searchParams }) {

  const { page = '1' } = await searchParams

  const endpoint = 'https://bstinc.co.jp/wp-json/wp/v2/works/'
  const filterEmbed = '_embed=true'
  const filterPerPage = 'per_page=5'
  const filterPage = `page=${page}`

  const fetchUrl = endpoint + '?' + filterEmbed + '&' + filterPerPage + '&' + filterPage

  const data = await fetch(fetchUrl)
  const posts = await data.json()

  const wpTotalPages = data.headers.get('x-wp-totalpages')

  const postPages = []
  for (let i = 1; i <= Number(wpTotalPages); i++) {
    postPages.push(i)
  }

  if (data.status != 200) {
    notFound()
  }

  return (
    <main className={`${styles.main} ${styleWorks.mainWorks}`}>
      <section className={styles.section}>
        <h1 className="font-bold font-display">制作実績</h1>
      </section>
      <section className={styles.section}>
        <ol className={styleWorks.listWorks}>
          {
            posts.map((post) => (
              <li key={post.title.rendered} className={styleWorks.itemWorks}>
                <Link
                  href={`works/${post.id.toString()}`}
                >
                  {/* TODO: アイキャッチがない場合の処理 */}
                  <figure className={styleWorks.figure}>
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                      width={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.width}
                      height={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.height}
                      alt={post._embedded['wp:featuredmedia'][0].caption.rendered}
                    ></Image>
                  </figure>
                  <div className={styleWorks.textWrapper}>
                    <h3>{post.title.rendered}</h3>
                    <p>{post.acf.description_text}</p>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                </Link>

              </li>
            ))
          }
        </ol>
        <ol className={styleWorks.listPages}>
          {
            Number(page) > 1 && (
              <li>
                <Link className={styleWorks.pageLink} href={`?page=${Number(page) - 1}`}>Prev</Link>
              </li>
            )
          }
          {
            postPages.map((postPage) => (
              <li key={postPage + 'pagenation'}>
                <Link className={styleWorks.pageLink} href={`?page=${postPage}`}>{postPage}</Link>
              </li>
            ))
          }
          {
            Number(page) < Number(wpTotalPages) && (
              <li>
                <Link className={styleWorks.pageLink} href={`?page=${Number(page) + 1}`}>Next</Link>
              </li>
            )
          }

        </ol>
      </section>
    </main >
  )
}