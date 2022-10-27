import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import MenuJs from "../Menu/MenuJs/MenuJs";
import MenuTs from "../Menu/MenuTs/MenuTs";
import MenuReact from "../Menu/MenuReact/MenuReact";
import MenuParadigms from "../Menu/MenuParadigms/MenuParadigms";
import { useEffect } from "react";

const SidebarMenu = ():JSX.Element => {

    useEffect(()=> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const activeHeight:any = document.querySelector('.active_scroll')?.clientHeight;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const activeLink:any = document.querySelector('.active_scroll');
    const heightTop = activeLink?.offsetTop + activeHeight;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
    const menuHeight:any = document.querySelector(`.${s.nav_menu}`)!.clientHeight - 89;
        if(heightTop > menuHeight) {

            document.querySelector(`.${s.nav_menu}`)?.scrollBy(0,heightTop - menuHeight);

        } 
    
  });
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.nav_menu}>
                <MenuJs sideBarMenuActive= {true} mobileMenuActive={false} />
            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={s.nav_menu}>
                <MenuTs sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }
    if (router.pathname.startsWith('/react')) {
        return (
            <nav className={s.nav_menu}>
                <MenuReact sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }

    if (router.pathname.startsWith('/paradigms')) {
        return (
            <nav className={s.nav_menu}>
                <MenuParadigms sideBarMenuActive={true} mobileMenuActive={false}/>
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