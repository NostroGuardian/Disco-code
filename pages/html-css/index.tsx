import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts } from "../api/api";
import {POSTS_PATH_HTML } from "../api/paths";
import Head from "next/head";
import MainMenuHtmlCss from "../../src/Components/Menu/MenuHtml&css/MainMenuHtmlCss";

export const getStaticProps: GetStaticProps = async () => {
  const posts_Html = getAllPosts(POSTS_PATH_HTML).map((post) => post.meta);

  const AllThemePosts = {posts_Html,};
  return {
    props: {
      AllThemePosts,
    },
  };
};

const Home: NextPage = (): JSX.Element => {
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
          content={"Функциональное программирование, ООП, стили написания кода."}
        />
        <meta property="og:title" content="Парадигмы программирования" />
        <meta
          property="og:description"
          content={"Функциональное программирование, ООП, стили написания кода."}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/paradigms" />
        <meta
          property="og:image"
          content="/"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="Paradigms" />
        <meta property="og:tag" content="OOP, js, paradigms" />
      </Head>

      <div className="page_body">
      <h1> Html & css </h1>

        <div className="page_menu">
        <p className="page__text">
            Немного поговорим про структуру веб страниц и как их можно стилизовать.
      </p>
        <div className="page__title">Содержание</div>
    <p> Материал дополняется и пишется</p>
          <MainMenuHtmlCss />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
