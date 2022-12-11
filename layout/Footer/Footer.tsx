import React from 'react';
import { FooterProps } from './Footer.props';
import s from './Footer.module.scss';
import cn from 'classnames';
import FooterMenu from '../../src/Components/FooterMenu/FooterMenu';
const { footer } = s;

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, footer,)} {...props}>
            <FooterMenu />
        </footer>
    );
};

export default Footer;