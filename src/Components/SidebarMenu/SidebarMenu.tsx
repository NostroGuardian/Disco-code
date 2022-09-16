import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import Menu from '../Menu/Menu';
import { ISidebarMenu } from "./SidebarMenu.props";

const SidebarMenu = (): JSX.Element => {
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.navMenu}>
                <Menu title="Базовый JavaScript" category='basicjs' dropdown={true}  page='js' />
                {/* <Menu title="Продвинутый JavaScript" category='advancedjs' dropdown ={true} /> */}
            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={s.navMenu}>
                <Menu title="TypeScript" category='basicts' dropdown={true} page='ts'/>
            </nav>
        );
    }
    if (router.pathname.startsWith('/react')) {
        return (
            <nav className={s.navMenu}>
                <Menu title="Базовые темы react" category='basicreact' dropdown={true} page='react'/>
            </nav>
        );
    }
    else {
        return (
            <></>
        );
    }

};

export default SidebarMenu;