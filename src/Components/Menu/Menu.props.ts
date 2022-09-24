import { DetailedHTMLProps, HTMLAttributes, } from "react";
export interface IMenu extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title:string,
    category:string,
    dropdown?:boolean,
    page?:string;
    mobile?:boolean;
    setMobile:any;
    mobileTrue: boolean;
}