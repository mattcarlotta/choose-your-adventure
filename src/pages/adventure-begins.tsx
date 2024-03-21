import relativeTimeFromNow from "../utils/date";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function AdventureBegins() {
    return (
        <>
            <Head>
                <title>Thank You Choosing An Adventure!</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <Image priority src="/adventure-begins.avif" alt="Adventure begins" height={325} width={325} style={{ borderRadius: "20px", margin: "0 auto", border: "1px solid #ccc" }} />
                    <header className="!mt-6">
                        <h1 className="title text-4xl font-bold uppercase">Success!</h1>
                    </header>
                    <h2 className="text-xl text-gray-300 tracking-wide">
                        Thank you for choosing an adventure! We sent your choice via pidgeon mail to <span className="text-red-500">Matt</span>.
                    </h2>
                    <h3 className="text-xl text-gray-300 tracking-wide">
                        In the meantime, please wait about <span className="text-red-500">{relativeTimeFromNow(new Date("2024-3-30")).replace(/in /, "")}</span> for the horse-drawn carriage to reach you!
                    </h3>
                    <Link
                        className="unavailable font-bold w-40 !mt-8 z-10 border border-gray-400 text-md text-gray-300 px-3 py-2 cursor-pointer rounded uppercase hover:border-white hover:text-white"
                        href="/"
                    >
                        Close
                    </Link>
                </section>
            </div>
        </>
    );
}


