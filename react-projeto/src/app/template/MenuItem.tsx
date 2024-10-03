import Link from 'next/link';

interface MenuItemProps {
    texto: string
    href: string
    icone?: any
}

export default function MenuItem(props: MenuItemProps) {
    return(
        <div className='flex items-center gap-1 p-1 hover:bg-black/20'>
            {props.icone}
            <Link href={props.href}>{props.texto}</Link>
        </div>
    );
}
