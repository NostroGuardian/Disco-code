import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
// import "highlight.js/styles/panda-syntax-dark.css";
import "highlight.js/styles/nord.css";


import { getAllPosts, getPostFromSlug, getSlugs, PostMeta } from '../../api/api';
import { POSTS_PATH_REACT } from '../../api/paths';
import Link from 'next/link';
import cn from 'classnames';
import s from './react.module.css';
import MobileButton from '../../../src/Components/UI/MobileButton/MobileButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useWindowDimensions from '../../../src/hooks/UseWindowDimensions';
import { useState } from 'react';
import MenuReact from '../../../src/Components/Menu/MenuReact/MenuReact';
interface MSXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: PostMeta
}


const PostPage: NextPage<never> = ({ post }: { post: MSXPost }): JSX.Element => {

    const { height, width } = useWindowDimensions();

    const [mobile, setMobile] = useState(false);

    const router = useRouter();
    if (width && (width <= 785)) {
        return (
            <div className='pp'>
                <Head>
                    <title>{post.meta.title}</title>
                    <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                    <meta name="yandex-verification" content="a99ae512e4f1c330" />
                    <meta name='description' content={'Уроки по react, reactjs, react статьи,'} />
                    <meta property='og:title' content={post.meta.title} />
                    <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
                    <meta property='og:type' content={'article'} />
                </Head>

                <h1>{post.meta.title}</h1>
                <MDXRemote  {...post.source} />

                <div className={cn('modal', {
                    ['modaltrue']: mobile === true
                })}>
                    <div className='bg'>

                        <MenuReact setMobile={setMobile} mobile={mobile} />
                    </div>
                </div>
                <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
                <div className={cn(s.footer, 'page_footer')}>
                    <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                    <Link href={post.meta.next}>{post.meta.next === 'none' ? '' : 'Следующая страница'}</Link>
                </div>
                <MobileButton mobile={mobile} setMobile={setMobile} />
            </div>
        );

    } else {
        return (
            <div className='page'>
                <Head>
                    <title>{post.meta.title}</title>

                    <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
                    <meta name="yandex-verification" content="a99ae512e4f1c330" />
                    <meta name='description' content={'Уроки по react, reactjs, react статьи,'} />
                    <meta property='og:title' content={post.meta.title} />
                    <meta property='og:description' content={'Уроки и разбор разных тем по javascript'} />
                    <meta property='og:type' content={'article'} />

                </Head>
                <AnimatePresence>

                    <motion.div
                        transition={{ type: "spring", stiffness: 65 }}
                        key={router.asPath}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        id="page-transition-container"
                    >
                        <h1>{post.meta.title}</h1>
                        <MDXRemote  {...post.source} />
                        <div className={cn(s.edit, 'page_edit')}><a target='_blank' rel='noopener' href={`https://github.com/Aquariids/Disco-code/blob/main/Content/javascript/${post.meta.slug}.mdx`}> Отредактировать эту страницу</a><img style={{ width: '30px', paddingLeft: '5px' }} src='/edit.svg' /></div>
                        <div className={cn(s.footer, 'page_footer')}>
                            <Link href={post.meta.prev}>{post.meta.prev === 'none' ? <span></span> : 'Предыдущая страница'}</Link>
                            <Link href={post.meta.next}>{post.meta.next === 'none' ? '' : 'Следующая страница'}</Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        );
    }
};




export default withLayout(PostPage);



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { react } = params as { react: string };
    const { content, meta } = getPostFromSlug(react, POSTS_PATH_REACT);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight
            ]
        }

    }

    );

    const posts = getAllPosts(POSTS_PATH_REACT)
        .map((post) => post.meta);


    return { props: { post: { source: mdxSource, meta }, posts } };

};




export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(POSTS_PATH_REACT).map((react) => {
        return ({ params: { react } });
    });
    return {
        paths,
        fallback: false
    };
};


