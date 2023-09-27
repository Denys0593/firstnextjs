import Link from "next/link";

import style from '../../../buttons/button.module.css';

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json();
}

export async function generateMetadata({params: {id}}: Props) {
    const post = await getData(id);
    return {
        title: post.title
    }
}

export default async function Post({params: {id}}: Props) {
    const post = await getData(id)
    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button className={style.butt}>
            <Link className={style.link} href='/blog'>Back to Blog</Link>
        </button>
        </>
    )
}
