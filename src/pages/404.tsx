import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <Image priority src="/notfound.avif" alt="Page not found" height={400} width={400} style={{ borderRadius: "20px", margin: "0 auto", border: "1px solid #ccc" }} />
                    <header className="!mt-6">
                        <h1 className="title text-5xl font-bold">ADVENTURE NOT FOUND!</h1>
                    </header>
                    <h2 className="text-xl text-red-500 tracking-wide">
                        Woah adventurer, it seems like you took a wrong turn!
                    </h2>
                    <Link
                        className="glow font-bold w-40 !mt-8 z-10 border border-gray-400 text-xl text-gray-300 px-3 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                        href="/"
                    >
                        TURN BACK
                    </Link>
                </section>
            </div>
        </>
    );
}
