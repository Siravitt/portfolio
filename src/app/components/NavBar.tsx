"use client"

import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className="h-14 grid grid-cols-10 text-light-primary border-b md:grid-cols-12">
            <div className="grid col-span-8 place-items-center md:border-r md:place-content-center md:col-span-4 xl:col-span-2">siravit-tanratvijit</div>
            <Link href={'/hello'} className={`hidden place-content-center ${pathname === "/hello" ? "text-white border-b-2 border-b-plum" : ""} md:border-r md:grid md:col-span-2 xl:col-span-1 hover:text-white hover:text-lg duration-150`}>_hello</Link>
            <Link href={'/about-me'} className={`hidden place-content-center ${pathname === "/about-me" ? "text-white border-b-2 border-b-plum" : ""} md:border-r md:grid md:col-span-2 xl:col-span-1 hover:text-white hover:text-lg duration-150`}>_about-me</Link>
            <Link href={'/projects'} className={`hidden place-content-center ${pathname === "/projects" ? "text-white border-b-2 border-b-plum" : ""} xl:border-r md:grid md:col-span-2 xl:col-span-1 hover:text-white hover:text-lg duration-150`}>_projects</Link>
            <Link href={'/contact-me'} className={`hidden place-content-center ${pathname === "/contact-me" ? "text-white border-b-2 border-b-plum" : ""} md:border-l md:grid md:col-span-2 xl:col-span-2 xl:col-start-11 hover:text-white hover:text-lg duration-150`}>_contact-me</Link>
            <div className="grid col-span-2 place-content-center md:hidden"><MenuRoundedIcon fontSize='large' /></div>
        </div>
    );
}