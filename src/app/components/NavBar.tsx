import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function NavBar() {
    return (
        <div className="h-14 grid grid-cols-10 text-light-primary border-b md:grid-cols-12">
            <div className="grid col-span-8 place-items-center md:border-r md:place-content-center md:col-span-4 xl:col-span-2">siravit-tanratvijit</div>
            <div className="hidden place-content-center md:border-r md:grid md:col-span-2 xl:col-span-1">_hello</div>
            <div className="hidden place-content-center md:border-r md:grid md:col-span-2 xl:col-span-1">_about-me</div>
            <div className="hidden place-content-center md:border-r md:grid md:col-span-2 xl:col-span-1">_project</div>
            <div className="hidden place-content-center md:border-l md:grid md:col-span-2 xl:col-span-1 xl:col-start-12">_contact-me</div>
            <div className="grid col-span-2 place-content-center md:hidden"><MenuRoundedIcon fontSize='large' /></div>
        </div>
    );
}