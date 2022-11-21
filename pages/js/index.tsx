import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts, PostMeta } from "../api/api";
import { POSTS_PATH_ADVANCED_JS, POSTS_PATH_ALGORITHMS_JS, POSTS_PATH_BASIC_JS, POSTS_PATH_PRACTICE_JS } from "../api/paths";
import Head from "next/head";
import MainMenuJs from "../../src/Components/Menu/MenuJs/MainMenuJs";

export const getStaticProps: GetStaticProps = async () => {
  const basic_Js = getAllPosts(POSTS_PATH_BASIC_JS).map((post) => post.meta);
  const advanced_Js = getAllPosts(POSTS_PATH_ADVANCED_JS).map((post) => post.meta);
  const algorithms_js = getAllPosts(POSTS_PATH_ALGORITHMS_JS).map((post) => post.meta);
  const practice_Js = getAllPosts(POSTS_PATH_PRACTICE_JS).map((post) => post.meta);

  const postsJs = {basic_Js, advanced_Js,practice_Js,algorithms_js};
  return {
    props: {
      postsJs,
    },
  };
};

const Home: NextPage = ({postsJs}:any): JSX.Element => {

  return (
    <div className="page_content">
      <Head>
        <title>Содержание</title>
        <meta
          name="google-site-verification"
          content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
        />

        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta
          name="description"
          content={"Уроки по javascript, задачи, алгоритмы.js статьи,"}
        />
        <meta property="og:title" content="Уроки по javascript" />
        <meta
          property="og:description"
          content={"Уроки и разбор разных тем по javascript"}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/js" />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="JavaScript" />
        <meta property="og:tag" content="JavaScript, js" />
      </Head>
      <h2>Содержание</h2>

      <div className="page_body">

        <div className="page_menu">

          <MainMenuJs MainPosts={postsJs} />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
