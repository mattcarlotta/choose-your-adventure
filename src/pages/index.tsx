import Head from "next/head";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <header>
                        <h1 className="title text-5xl font-bold">CHOOSE YOUR ADVENTURE!</h1>
                    </header>
                    <h2 className="text-xl text-gray-300 tracking-wide">
                        Hi, <span className="text-red-500">Kady</span>! I made this specifically for <span className="text-red-500">you</span>, so I hope you like it.
                    </h2>
                    <p className="text-sm text-gray-300 tracking-wide">
                        Press the <span className="text-green-500">START</span> button below to view some available 2nd date adventures!
                    </p>
                    <Link
                        className="glow font-bold w-40 !mt-8 z-10 border border-gray-400 text-xl text-gray-300 px-3 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                        href="/choose-adventure/"
                    >
                        START
                    </Link>
                </section>
            </div>
        </>
    );
}
