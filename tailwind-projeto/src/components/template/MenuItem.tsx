import Link from "next/link"
import React from "react"

export interface MenuItemProps {
    label: string
    href: string
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.href}
            className={`
                flex py-1 px-1 hover:underline
                ${props.className ?? ''}
            `}
        >
            <span className="text-zinc-400 text-sm">{props.label}</span>
        </Link>
    )
}