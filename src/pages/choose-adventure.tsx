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
                            <h1 className="title text-4xl font-bold">CHOOSE YOUR ADVENTURE!</h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            These 2nd date adventures are available to <span className="text-red-500">Katie with a D</span>, please <span className="text-green-500">SELECT</span> one to continue!
                        </p>
                        <Link
                            className="unavailable !mt-4 mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                            href="/"
                        >
                            GO BACK
                        </Link>
                    </section>
                    <section className="grid gap-x-12 gap-y-12 grid-cols-3">
                        {ADVENTURES.map(props => <Adventure key={props.id} {...props} />)}
                    </section>
                </div>
            </div>
        </>
    );
}

