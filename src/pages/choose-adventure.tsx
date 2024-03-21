import Head from "next/head";
import Link from "next/link";
import { ADVENTURES } from "../data";
import Adventure from "../components/Adventure"


export default function ChooseAdventure() {
    return (
        <>
            <Head>
                <title>Select An Adventure!</title>
            </Head>
            <div className="flex justify-center items-center text-center px-4 py-12 sm:p-24">
                <div className="w-full max-w-screen-xl flex flex-col space-y-16 min-h-screen">
                    <section className="flex flex-col space-y-0.5">
                        <header>
                            <h1 className="title text-xl font-bold uppercase sm:text-5xl">Select Your Adventure!</h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            These <span className="text-orange-500 sm:text-lg">second date adventures</span> are available to <span className="text-red-500 sm:text-lg">Katie with a D</span>, please <span className="uppercase text-green-500 sm:text-lg">select</span> one to continue!
                        </p>
                        <Link
                            className="unavailable !mt-4 mx-auto font-bold border border-gray-400 text-xs text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-sm"
                            href="/"
                        >
                            GO BACK
                        </Link>
                    </section>
                    <section className="grid gap-y-8 grid-cols-1 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {ADVENTURES.map(props => <Adventure key={props.id} {...props} />)}
                    </section>
                </div>
            </div>
        </>
    );
}

