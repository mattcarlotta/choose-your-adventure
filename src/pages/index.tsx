import Head from "next/head";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <section className="text-center flex flex-col justify-center items-center">
                <header>
                    <h1 className="title text-5xl font-bold">CHOOSE YOUR ADVENTURE!</h1>
                </header>
                <p className="text-md text-gray-300 tracking-wide">
                    Welcome, Kady! You have 2nd date adventures available, please choose one to start!
                </p>
                <Link
                    className="glow font-bold w-40 mt-8 z-10 border border-gray-400 text-xl text-gray-300 px-3 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                    href="/choose-adventure/"
                >
                    START
                </Link>
            </section>
        </>
    );
}
