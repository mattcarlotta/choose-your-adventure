import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import type { AdventureProps } from '../../data'
import Head from 'next/head'
import Link from 'next/link'
import { ADVENTURES } from '../../data'
import Adventure from '../../components/Adventure'

export default function ConfirmAdventure({ adventure }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Kady, Confirm Your Adventure!</title>
            </Head>
            <div className="flex justify-center items-center text-center p-20">
                <div className="w-full max-w-screen-xl flex flex-col space-y-16 min-h-screen">
                    <section className="flex flex-col space-y-0.5">
                        <header>
                            <h1 className="title text-4xl font-bold uppercase">Confirm Your Adventure!</h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            There&apos;s still time to turn back, but once you click <span className="text-green-500 text-lg">SELECT</span> that&apos;s it!
                        </p>
                        <Link
                            className="unavailable !mt-4 mx-auto font-bold border border-gray-400 text-sm text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                            href="/choose-adventure"
                        >
                            GO BACK
                        </Link>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <div className="w-full max-w-md">
                            <Adventure {...adventure} showForm priority />
                        </div>
                    </section>
                </div>
            </div>
        </>

    )
}

export const getStaticProps = ((context) => {
    const id = context.params?.id as string

    const adventure = ADVENTURES.find(adv => adv.id === id);


    if (!adventure) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            adventure
        },
    }
}) satisfies GetStaticProps<{
    adventure: AdventureProps
}>

export const getStaticPaths = (() => {
    const paths = ADVENTURES.map(adv => ({
        params: {
            id: adv.id
        },
    }));

    return {
        paths,
        fallback: false,
    };
}) satisfies GetStaticPaths;
