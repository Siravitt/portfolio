import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
    return (
        <div className="w-full h-14 grid grid-cols-2 absolute bottom-0 border-t text-light-primary md:grid-cols-6 xl:grid-cols-12">
            <div className="grid place-content-center border-r">find me in :</div>
            <div className="grid grid-cols-3 md:flex">
                <div className="grid place-content-center border-r md:w-[60px]"><PhoneIcon fontSize='large' /></div>
                <div className="grid place-content-center border-r md:w-[60px]"><FacebookIcon fontSize='large' /></div>
                <div className=" grid place-content-center md:hidden"><GitHubIcon fontSize='large' /></div>
            </div>
            <div className="hidden border-l md:grid md:place-content-center md:col-start-6 xl:col-start-12">
                <div className='flex items-center gap-2'>
                    <span>@Siravitt</span>
                    <GitHubIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}