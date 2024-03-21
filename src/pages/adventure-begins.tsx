import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import relativeTimeFromNow from "../utils/date";


export default function AdventureBegins() {
    const [endDate, setEndDate] = useState("");


    useEffect(() => {
        const futureDate = new Date(2024, 2, 30, 0, 0, 0, 0).toDateString();
        setEndDate(relativeTimeFromNow(futureDate).replace(/in /, ""));
    }, [])


    return (
        <>
            <Head>
                <title>Thank You Choosing An Adventure!</title>
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
                <section className="text-center flex flex-col justify-center items-center space-y-1.5">
                    <Image priority src="/adventure-begins.avif" alt="Adventure begins" height={325} width={325} style={{ borderRadius: "20px", margin: "0 auto", border: "1px solid #ccc" }} />
                    <header className="!mt-6">
                        <h1 className="title text-xl font-bold uppercase sm:text-5xl">Adventure Begins Soon!</h1>
                    </header>
                    <h2 className="text-sm text-gray-300 tracking-wide sm:text-xl">
                        Thank you for choosing an adventure! We sent your choice via pidgeon mail to <span className="text-red-500">Matt</span>.
                    </h2>
                    <h3 className="text-sm text-gray-300 tracking-wide sm:text-xl">
                        In the meantime, please wait about <span className="text-red-500">{endDate}</span> for your horse-drawn carriage to reach you!
                    </h3>
                    <Link
                        className="unavailable font-bold w-full max-w-40 !mt-8 z-10 border border-gray-400 text-sm text-gray-300 px-3 py-2 cursor-pointer rounded uppercase hover:border-white hover:text-white sm:text-base"
                        href="/"
                    >
                        Close
                    </Link>
                </section>
            </div>
        </>
    );
}


