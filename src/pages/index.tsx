import Head from "next/head";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <main className={clsx("flex min-h-screen flex-col items-center justify-center p-24", inter.className)}>
                <section className="text-center flex flex-col justify-center items-center">
                    <header>
                        <h1 className="title text-5xl">CHOOSE YOUR ADVENTURE!</h1>
                    </header>
                    <p className="text-gray-300 text-md">
                        Welcome, Kady! You have available adventures, choose one and start right away!
                    </p>
                    <Link
                        className="glow w-44 mt-4 z-10 border border-black text-xl text-white px-4 py-2.5 cursor-pointer rounded hover:border-white"
                        href="/choose-adventure/"
                    >
                        START
                    </Link>
                </section>
            </main>
        </>
    );
}
