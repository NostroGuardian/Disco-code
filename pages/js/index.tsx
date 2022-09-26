import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import Menu from '../../src/Components/Menu/Menu';
import s from './pageJs.module.css';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_JS } from '../api/paths';
import Head from 'next/head';
import MenuJs from '../../src/Components/Menu/MenuJs/MenuJs';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(POSTS_PATH_JS)
    .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};


const Home: NextPage = (): JSX.Element => {


  return (

    <div className='page_content'>
      <Head>
        <title>Содержание</title>
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />

        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name='description' content={'Уроки по javascript, задачи, алгоритмы.js статьи,'} />
        <meta property='og:title' content='Уроки по javascript' />
        <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
        <meta property='og:type' content={'article'} />
        <meta property='og:image' content='/meta/meta_js.jpg'/>    


      </Head>

      <h2>Содержание</h2>
      <span>Здесь собраны все мои записи по <code className={s.js}>JavaScript</code>.</span> <br />
      <span>Разборы базовых алгоритмов и даже немного задач</span>

      <div className='page_body'>
        <div className='page_menu'>

            <MenuJs sideBarMenuActive={false} mobileMenuActive={false}/>

        </div>
      </div>
    </div>
  );
};


export default withLayout(Home);






