import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="bg-primary">
        <div className="h-14 grid grid-cols-10 text-light-primary md:grid-cols-12">
          <div className="grid col-span-8 place-items-center md:place-content-center md:col-span-4 xl:col-span-2">siravit-tanratvijit</div>
          <div className="hidden place-content-center md:grid md:col-span-2 xl:col-span-1">_hello</div>
          <div className="hidden place-content-center md:grid md:col-span-2 xl:col-span-1">_about-me</div>
          <div className="hidden place-content-center md:grid md:col-span-2 xl:col-span-1">_project</div>
          <div className="hidden place-content-center md:grid md:col-span-2 xl:col-span-1 xl:col-start-12">_contact-me</div>
          <div className="grid col-span-2 place-content-center md:hidden">
            {/* SVG */}
          </div>
        </div>
      </div>
    </div >
  );
}
