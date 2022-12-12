import React, { useEffect } from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const {footer, container, container__js, container__ts, container__next, container__react, card__title } = s;
const Card = ({ title, color, url }: ICard) => {


    const loadingCard = () => {
        localStorage.setItem('updateCards','ok');
        
        const activeEl = document.querySelectorAll(`.${container}`);
        activeEl.forEach((item)=> {
            if(item && item.classList.contains(container__js)) {
                item.classList.add(s.activeCardJs);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardJs);
                },200);

            }
            else if(item && item.classList.contains(container__react)) {
                item.classList.add(s.activeCardReact);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardReact);
                },200);

            }
            else if(item && item.classList.contains(container__next)) {
                item.classList.add(s.activeCardNextJs);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardNextJs);
                },200);

            }
            else if(item && item.classList.contains(container__ts)) {
                item.classList.add(s.activeCardTS);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardTS);
                },200);

            } else  {
                item && item.classList.add(s.activeCardBasic);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardBasic);
                },200);
            }

        });
    };

useEffect(():any => {

    if(localStorage.getItem('updateCards') == 'ok') {
        return "";
    } else {
        loadingCard();
    }
},[]);
        
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function addBacgroundActiveCard(e:any) {
        const activeEl = e.target;

            if(activeEl && activeEl.classList.contains(container__js)) {
                activeEl.classList.add(s.activeCardJs);
            }
            else if(activeEl && activeEl.classList.contains(container__react)) {
                activeEl.classList.add(s.activeCardReact);
            }
            else if(activeEl && activeEl.classList.contains(container__next)) {
                activeEl.classList.add(s.activeCardNextJs);
            }
            else if(activeEl && activeEl.classList.contains(container__ts)) {
                activeEl.classList.add(s.activeCardTS);
            } else  {
                activeEl && activeEl.classList.add(s.activeCardBasic);
            }

    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function removeBacgroundActiveCard(e:any) {

        const activeEl = e.target;

            if(activeEl && activeEl.classList.contains(container__js)) {
                activeEl.classList.remove(s.activeCardJs);
            }
            else if(activeEl && activeEl.classList.contains(container__react)) {
                activeEl.classList.remove(s.activeCardReact);
            }
            else if(activeEl && activeEl.classList.contains(container__next)) {
                activeEl.classList.remove(s.activeCardNextJs);
            }
            else if(activeEl && activeEl.classList.contains(container__ts)) {
                activeEl.classList.remove(s.activeCardTS);
            }
            else  {
                activeEl && activeEl.classList.remove(s.activeCardBasic);
            }
        
        
    }
    return (
        <div className={s.card}>
            <div className={card__title}>{title} </div>
            <Link href={url}>
                <div onMouseOver={addBacgroundActiveCard} onMouseOut={removeBacgroundActiveCard} className={cn(container, {
                    [container__js]: color === 'js',
                    [container__ts]: color === 'ts',
                    [container__next]: color === 'next',
                    [container__react]: color === 'react',
                })} >
                    
                </div>
                <div className={footer}>
                        Подробнее...
                    </div>
                    
            </Link>
            </div>
            


    );
};

export default Card;