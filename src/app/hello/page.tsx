import Link from "next/link";
import React from "react";

export default function Hello() {
    return (
        <div className="flex-grow bg-color-blur bg-cover bg-center bg-no-repeat md:bg-none md:grid md:grid-cols-2">
            <div className="h-full px-4 grid grid-rows-2 place-items-end md:px-8 md:place-content-center">
                <div className="text-white grid gap-6 md:gap-4">
                    <div>Hi all. I am</div>
                    <div className="text-5xl">Siravit Tanratvijit</div>
                    <div className="text-mint text-2xl">&gt; Full-stack developer</div>
                </div>
                <div className="w-full h-full text-sm flex flex-col justify-center gap-2 md:text-base">
                    <div className="text-light-primary">// complete the game to continue</div>
                    <div className="text-light-primary">// you can also see it on my Github page</div>
                    <div>
                        <span className="text-dark-sea">const </span>
                        <span className="text-mint">githubLink </span>
                        <span className="text-white">= </span>
                        <span className="text-peach">"</span>
                        <Link href={'https://github.com/Siravitt'} className="text-peach underline decoration-solid">https://github.com/Siravitt</Link>
                        <span className="text-peach">"</span>
                    </div>
                </div>
            </div>
            <div className="hidden bg-color-blur md:block md:bg-cover">

            </div>
        </div>
    );
}