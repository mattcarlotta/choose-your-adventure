import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <Image priority src="/choose-adventure.avif" alt="Choose an adventure" height={325} width={325} style={{ borderRadius: "20px", margin: "0 auto", border: "1px solid #ccc" }} />
                    <header className="!mt-6">
                        <h1 className="title text-xl font-bold uppercase sm:text-5xl">Kady, Choose Your Adventure!</h1>
                    </header>
                    <h2 className="text-gray-300 tracking-wide sm:text-xl">
                        I wanted <span className="text-yellow-500">your</span> input for a <span className="text-orange-500">second date</span>, so I made this for <span className="text-red-500">you</span>. I hope you like it!
                    </h2>
                    <Link
                        className="glow uppercase font-bold w-full max-w-40 !mt-8 z-10 border border-gray-400 text-gray-300 px-3 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-xl"
                        href="/choose-adventure/"
                    >
                        Start
                    </Link>
                </section>
            </div>
        </>
    );
}
