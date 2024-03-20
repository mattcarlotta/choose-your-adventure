import Head from "next/head";
import Link from "next/link";
import { ADVENTURES } from "../data";
import Adventure from "../components/Adventure"


export default function ChooseAdventure() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <div className="flex justify-center items-center text-center p-20">
                <div className="w-full max-w-screen-xl flex flex-col space-y-16 min-h-screen">
                    <section className="flex flex-col space-y-0.5">
                        <header>
                            <h1 className="title text-5xl font-bold uppercase">Choose Your Adventure!</h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            These <span className="text-lg text-orange-500">second date adventures</span> are available to <span className="text-red-500 text-lg">Katie with a D</span>, please <span className="text-green-500 text-lg uppercase">select</span> one to continue!
                        </p>
                        <Link
                            className="unavailable !mt-4 mx-auto font-bold border border-gray-400 text-sm text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                            href="/"
                        >
                            GO BACK
                        </Link>
                    </section>
                    <section className="grid gap-8 grid-cols-3">
                        {ADVENTURES.map(props => <Adventure key={props.id} {...props} />)}
                    </section>
                </div>
            </div>
        </>
    );
}

