'use client'

import Link from 'next/link';
import style from './TheHeader.module.css'

// function smth () {
//     const main = document.querySelector('#link');
        
//         main.classList.add(style.active)
    
// }



const TheHeader = () => {

    function toggleActive (e) {
        const main = document.querySelector('#link');
        const linkArray = document.querySelectorAll('a');
        
        if (e.target.matches('a')) {
            linkArray.forEach((item, i) => {
                item.classList.remove(style.active)
                if (!e.target.classList.contains(style.active)) {
                    e.target.classList.add(style.active);
    
                }
            })
        }
    }

    return (
        <header>
            <div onClick={(e) => toggleActive (e)} id='link' className={style.wrapper}>
                <Link href='/'>Home</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/about'>About</Link>
            </div>
        </header>
    )
}


export {TheHeader};