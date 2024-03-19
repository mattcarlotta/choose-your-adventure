import Head from "next/head";
import Link from "next/link";


export default function ChooseAdventure() {
    return (
        <>
            <Head>
                <title>Kady, Choose Your Adventure!</title>
            </Head>
            <div className="flex justify-center items-center text-center p-20">
                <div className="w-full max-w-screen-xl flex flex-col space-y-16 min-h-screen">
                    <section>
                        <header>
                            <h1 className="title text-4xl font-bold">CHOOSE YOUR ADVENTURE!</h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            These 2nd date adventures are available to <span className="text-red-500">Katie with a D</span>, please <span className="text-green-500">SELECT</span> one to continue!
                        </p>
                    </section>
                    <section className="grid gap-x-12 gap-y-12 grid-cols-3">
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                MINI GOLF
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Fun for all ages, The Village’s Mini Golf course offers 18 holes, including obstacles! Create lasting memories with everyone by playing a friendly game, or by keeping score for a competitive round of Mini Golf.
                                Bring your own putter, or use one of our own colorful putters and golf balls. The Mini Golf course offers fun for everyone. Bring the whole family down to play a friendly game.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/1"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                AXE THROWING
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/2"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                LOREM IPSUM
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/3"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                LOREM IPSUM
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/3"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="locked border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                MOVIE LIST NIGHT
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <p
                                className="mx-auto font-bold border border-gray-400 text-xl text-gray-400 px-10 py-2 cursor-not-allowed rounded"
                            >
                                LOCKED
                            </p>
                        </article>
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                LOREM IPSUM
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/3"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="unavailable border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                PINE NURSERY PARK WALK
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <p
                                className="mx-auto font-bold text-xl text-gray-400 px-10 py-2 cursor-not-allowed rounded"
                            >
                                UNAVAILABLE
                            </p>
                        </article>
                        <article className="adventure border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                LOREM IPSUM
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <Link
                                className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                                href="/adventure/3"
                            >
                                SELECT
                            </Link>
                        </article>
                        <article className="gold border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 p-4 bg-black rounded">
                            <h2 className="backshadow text-2xl">
                                CAT WALK
                            </h2>
                            <p className="text-sm text-gray-300 backshadow">
                                Proin dictum nunc malesuada elementum porttitor. Etiam sit amet justo a turpis rutrum feugiat at a nibh. Maecenas molestie leo a mi molestie, vel fermentum elit posuere. Nulla vehicula luctus sem, sed luctus diam malesuada a. Proin dignissim sagittis justo non dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed justo nulla. Vestibulum in libero non lorem sollicitudin malesuada.
                            </p>
                            <p
                                className="members-only mx-auto font-bold border text-xl text-gray-300 px-8 py-2 cursor-not-allowed rounded"
                            >
                                MEMBERS ONLY
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
}

