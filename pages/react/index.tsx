import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import Menu from '../../src/Components/Menu/Menu';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_REACT } from '../api/paths';
import s from './pageReact.module.css';



const Home: NextPage = (): JSX.Element => {

  return (
    <div className='page_content'>
      <Head>
        <title>Содержание</title>
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name='description' content={'Уроки по react, reactjs, react статьи,'}/>
        <meta property='og:title' content='Уроки по react'/>
        <meta property='og:description' content={'Уроки и разбор разных тем по javascript'}/>
        <meta property='og:type' content={'article'}/>


      </Head>

      <h2>Содержание</h2>
      <span>Здесь собраны все мои записи по <code className={s.react}>React</code></span> <br />


      <div className='page_body'>
        <div className='page_menu'>
          <Menu title=" Базовые темы react" category='basicreact' page='react' />
          <Menu title=" Продвинутые темы react" category='.' page='react' />

        </div>
      </div>
    </div>
  );
};





export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {

  const posts = getAllPosts(POSTS_PATH_REACT)
    .slice(0, 9)
    .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};

