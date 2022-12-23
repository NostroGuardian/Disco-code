
        import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
        import { withLayout } from "../../../layout/Layout";
        import { serialize } from "next-mdx-remote/serialize";
        import { MDXRemote } from "next-mdx-remote";
        import rehypeSlug from "rehype-slug";
        import rehypeHighlight from "rehype-highlight";
        import rehypeAutolinkHeadings from "rehype-autolink-headings";
        import Head from "next/head";
        import "highlight.js/styles/dark.css";
        import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
        import cn from "classnames";
        import {
          getAllPosts,
          getPostFromSlug,
          getSlugs,
          MDXPost,
        
        } from "../../api/api";
        import { POSTS_PATH_BASIC_DIMANLOX,POSTS_PATH_ADVANCED_DIMANLOX } from "../../api/paths";
        import Link from "next/link";
        
        
        interface Props { post: MDXPost }
        
        
        const PostPage: NextPage<Props> = ({
          post,
        }): JSX.Element => {
          return (
            <>
              <div className="page">
                <Head>
                  <title>{post.meta.title}</title>
                  <meta property="og:title" content={post.meta.title} />
                  <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                  />
        
                  <meta name="yandex-verification" content="a99ae512e4f1c330" />
                  <meta
                    name="description"
                    content={""}
                  />
                  <meta
                    property="og:description"
                    content={""}
                  />
        
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content="https://discocode.ru/paradigms" />
                  <meta
                    property="og:image"
                    content="/"
                  />
                  <meta property="og:site_name" content="DiscoCode" />
                  <meta property="og:locale" content="ru_Ru" />
        
                  <meta property="og:author" content="Дмитрий Черномашенцев" />
                  <meta property="og:section" content="DimanLox" />
                  <meta property="og:tag" content="DimanLox" />
                </Head>
        
                <AnimationContainer>
                  <div className="mdTitle">
                    <h1>{post.meta.title}</h1>
                  </div>
                  <MDXRemote {...post.source} />
        
                  <div className={cn('mainEdit', "page_edit")}>
                    <a
                      target="_blank"
                      rel="noopener"
                      href={`https://github.com/Aquariids/Disco-code/blob/main/Content/paradigms/style/${post.meta.slug}.mdx`}
                    >
                      {" "}
                      Отредактировать эту страницу
                    </a>
                    <img
                      style={{ width: "30px", height: "30px", paddingLeft: "5px" }}
                      src="/edit.svg"
                    />
                  </div>
                  <div className={cn('mainFooter', "page_footer")}>
                    <Link href={post.meta.prev}>
                      {post.meta.prev === "none" ? (
                        <span></span>
                      ) : (
                        "Предыдущая тема"
                      )}
                    </Link>
                    <Link href={post.meta.next}>
                      {post.meta.next === "none" ? <span></span> : "Следующая тема"}
                    </Link>
                  </div>
                </AnimationContainer>
              </div>
            </>
          );
        };
        
        export default withLayout(PostPage);
        
        export const getStaticProps: GetStaticProps = async ({ params }) => {
          const { lox } = params as { lox: string };
          const { content, meta } = getPostFromSlug(lox, POSTS_PATH_BASIC_DIMANLOX);
          const mdxSource = await serialize(content, {
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight,
              ],
            },
          });
        
          
        const posts_Basic_Diman_Lox = getAllPosts(POSTS_PATH_BASIC_DIMANLOX).map((post) => post.meta);
        
        const posts_Advanced_Diman_Lox = getAllPosts(POSTS_PATH_ADVANCED_DIMANLOX).map((post) => post.meta);
        
          const AllThemePosts = { posts_Basic_Diman_Lox,posts_Advanced_Diman_Lox };
        
          return { props: { post: { source: mdxSource, meta }, AllThemePosts }, revalidate: 60 };
        };
        
        export const getStaticPaths: GetStaticPaths = async () => {
         
            const paths = getSlugs(POSTS_PATH_BASIC_DIMANLOX).map((lox) => ({ params: { lox } }));
          return {
            paths,
            fallback: false,
          };
        };
        
        
        