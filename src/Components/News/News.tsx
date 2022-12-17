import Link from 'next/link';
import React, { useState } from 'react';
import s from './News.module.scss';
const News = () => {

    const [posts, setposts] = useState([
        { id: 1, body: `Добавлен новый раздел "Практика js" и добавил статью про`, link: 'webpack', src: 'js/practice-js/webpack', date: '17.11.2022' },
        { id: 2, body: `Написал о том как сделать`, link: 'классический слайдер на js', src: 'js/practice-js/slider-js', date: '19.11.2022' },
        { id: 3, body: `Добавлена новая статья о том как работают`, link: 'web запросы и ответы', src: 'js/practice-js/webpack', date: '30.11.2022' },
        { id: 4, body: `Закончил писать про`, link: 'fetch & promise', src: 'js/advanced-js/promise-fetch_api', date: '02.12.2022' },
        { id: 5, body: `Добавлен новый раздел "JavaScript под капотом" и первая статья о работе`, link: 'движка в javaScript & JRE', src: 'js/under-the-hood-js/engine', date: '7.12.2022' },
        { id: 6, body: `Добавлена статья о работе`, link: 'контекста выполнения & call stack ', src: '/js/under-the-hood-js/call-stack', date: '16.12.2022' },
        { id: 7, body: `Создал новую тему "html & css" и добавил статью про`, link: 'структуру веб страницы', src: '/html-css/html/html-page', date: '17.12.2022' },

    ]);


    console.log();
    return (
        <div className={s.news}>
            <span className={s.news__title}> <h3>Что нового</h3> </span>
            <ul className={s.news__content}>
                {
                    posts && posts.slice(posts.length - 7, posts.length).map((post) => { // моя гениальная идея удалять первый элемент, при заполнении
                        return (
                            <li key={post.id} className={s.news__item}>{post.body} <Link href={post.src}>{post.link}</Link><span className={s.news__date}>{post.date}</span></li>
                        );

                    })
                }
            </ul>
        </div>
    );
};

export default News;
