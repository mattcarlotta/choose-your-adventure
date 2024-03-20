import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <Image priority src="/choose-adventure.avif" alt="Choose an adventure" height={325} width={325} style={{ borderRadius: "20px", margin: "0 auto", border: "1px solid #ccc" }} />
                    <header className="!mt-6">
                        <h1 className="title text-5xl font-bold">CHOOSE YOUR ADVENTURE!</h1>
                    </header>
                    <h2 className="text-xl text-gray-300 tracking-wide">
                        Hi, <span className="text-red-500">Kady</span>, I want your input so I made this for <span className="text-yellow-400">you</span>. I hope you like it!
                    </h2>
                    <Link
                        className="glow font-bold w-40 !mt-8 z-10 border border-gray-400 text-xl text-gray-300 px-3 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                        href="/choose-adventure/"
                    >
                        START
                    </Link>
                    <p className="text-xs text-gray-300 tracking-wide">
                        (Press the <span className="text-green-500">START</span> button!)
                    </p>
                </section>
            </div>
        </>
    );
}
