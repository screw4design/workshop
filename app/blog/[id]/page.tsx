import Link from 'next/link'
import { posts } from '@/app/lib/placeholder-data'
import styles from '@/app/styles.module.css'

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)

  if (!post) {
    return <div>投稿がみつかりません</div>
  }

  return (
    <main className={styles.main}>
      <h1 className="text-3sl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.author} - {post.createdAt.toLocaleDateString()}</p>
      <div className="prose lg:prose-xl">{post.content}</div>
      <Link href="/blog/">ブログ一覧へ戻る</Link>
    </main>
  )
}