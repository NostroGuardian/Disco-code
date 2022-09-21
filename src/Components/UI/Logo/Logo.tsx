import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Logo.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { logoProps } from './Logo.props';

const logo = ({ path, src }: logoProps): JSX.Element => {

    const router = useRouter();
    if (router.pathname === path) {
        return (
            <AnimatePresence>
                <motion.div className={s.logo}
                    transition={{ type: "spring", stiffness: 40 }}
                    key={router.pathname}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <Link href={'/'}><img style={{ width: '52px', cursor: 'pointer', borderRadius: '15px' }} src={src} /></Link>
                </motion.div>
            </AnimatePresence>
        );
    } else if (router.asPath.startsWith(path)) {
        return (
            <Link href={'/'}><img style={{ width: '52px', cursor: 'pointer',borderRadius: '15px' }} src={src} /></Link>
        );
    } else {
        return (
            <></>
        );

    }


};

export default logo;