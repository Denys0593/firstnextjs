import Link from "next/link";
import { Metadata } from "next"

import styles from './blog.module.css';

export const metadata: Metadata = {
    title: 'Blog/ Next App'
  }

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/postgfdgs')

  if (!response.ok) {
    throw new Error('Some fetching error')
  }
  
  return await response.json();
}

export default async function Blog() {
  const posts = await getData();
    
    return (
      <>
        <h1 className={styles.blog}>Blog page
          <div>
            <h2 className={styles.blogwhite}>Blog page</h2>
            <h2 className={styles.blogfirst}>Blog page</h2>
            <h2 className={styles.blogsecond}>Blog page</h2>
            <h2 className={styles.blogthird}>Blog page</h2>
          </div>
        </h1>
        
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
}
