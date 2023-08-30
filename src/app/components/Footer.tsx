import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
    return (
        <div className="w-full h-14 grid grid-cols-2 border-t text-light-primary md:grid-cols-6 xl:grid-cols-12">
            <div className="grid place-content-center border-r">find me in :</div>
            <div className="grid grid-cols-3 md:flex">
                <button className="grid place-content-center border-r md:w-[60px] hover:text-white duration-150"><PhoneIcon fontSize='large' /></button>
                <Link href={''} target='_blank' className="grid place-content-center border-r md:w-[60px] hover:text-white duration-150"><LinkedInIcon fontSize='large' /></Link>
                <Link href={'https://github.com/Siravitt'} target='_blank' className=" grid place-content-center md:hidden"><GitHubIcon fontSize='large' /></Link>
            </div>
            <Link href={'https://github.com/Siravitt'} target='_blank' className="hidden md:border-l md:grid md:place-content-center md:col-start-6 xl:col-start-12 hover:text-white hover:text-lg duration-150">
                <div className='flex items-center gap-2'>
                    <span>@Siravitt</span>
                    <GitHubIcon fontSize="large" />
                </div>
            </Link>
        </div>
    )
}