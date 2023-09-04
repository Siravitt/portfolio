"use client"

import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import saveContact from '@/utils/saveContact';

export default function Footer() {
    return (
        <div className="w-full h-14 grid grid-cols-2 border-t text-light-primary md:grid-cols-12 xl:grid-cols-12">
            <div className="grid place-content-center border-r md:col-span-2">find me in :</div>
            <div className="grid grid-cols-3 md:flex md:col-span-4">
                <button onClick={saveContact} className="grid place-content-center border-r md:w-[60px] hover:text-white duration-150"><PhoneIcon fontSize='large' /></button>
                <Link href={''} target='_blank' className="grid place-content-center border-r md:w-[60px] hover:text-white duration-150"><LinkedInIcon fontSize='large' /></Link>
                <Link href={'https://github.com/Siravitt'} target='_blank' className=" grid place-content-center md:hidden"><GitHubIcon fontSize='large' /></Link>
            </div>
            <Link href={'https://github.com/Siravitt'} target='_blank' className='hidden md:block md:border-l md:col-span-3 md:col-start-10 xl:col-span-2 xl:col-start-11 hover:text-white hover:text-lg duration-150'>
                <div className='flex justify-center items-center gap-2 h-full object-contain'>
                    <span>@Siravitt</span>
                    <GitHubIcon fontSize="large" />
                </div>
            </Link>
        </div>
    )
}