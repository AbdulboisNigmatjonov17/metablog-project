"use client"

import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    const { theme } = useTheme()
    return (
        <Link href={'/'} className="flex items-center gap-2">
            <Image width={36} height={36} src={`${theme === 'dark' ? '/LogoDark.svg' : '/LogoLight.svg'}`} alt="Logo" />
            <h3 className="font-extralight text-2xl">Meta<span className="font-semibold">BLOG</span></h3>
        </Link>
    )
}
