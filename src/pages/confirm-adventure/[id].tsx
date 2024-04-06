import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import type { AdventureProps } from '../../data';
import Head from 'next/head';
import Link from 'next/link';
import { ADVENTURES, ADVENTURE_STATUS } from '../../data';
import Adventure from '../../components/Adventure';

export default function ConfirmAdventure({
    adventure
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Confirm Your Adventure!</title>
            </Head>
            <div className="flex justify-center items-center text-center min-h-screen px-4 py-12 sm:p-24">
                <div className="w-full max-w-screen-xl flex flex-col space-y-16">
                    <section className="flex flex-col space-y-0.5">
                        <header>
                            <h1 className="title text-xl font-bold uppercase sm:text-5xl">
                                Confirm Your Adventure!
                            </h1>
                        </header>
                        <p className="text-sm text-gray-300 tracking-wide">
                            There&apos;s{' '}
                            <span className="text-orange-500 sm:text-lg">
                                still time to turn back
                            </span>
                            , but once you click{' '}
                            <span className="uppercase text-green-500 sm:text-lg">start</span>,
                            then... <span className="text-red-500 sm:text-lg">that&apos;s it!</span>
                        </p>
                        <Link
                            className="unavailable !mt-4 mx-auto text-xs font-bold border border-gray-400 text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-sm"
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
    );
}

export const getStaticProps = ((context) => {
    const id = context.params?.id as string;

    const adventure = ADVENTURES.find(
        (adv) => adv.id === id && adv.status === ADVENTURE_STATUS.AVAILABLE
    );

    if (!adventure) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            adventure
        }
    };
}) satisfies GetStaticProps<{
    adventure: AdventureProps;
}>;

export const getStaticPaths = (() => {
    const paths = ADVENTURES.reduce(
        (acc, adv) => {
            if (adv.status === ADVENTURE_STATUS.AVAILABLE) {
                acc.push({
                    params: {
                        id: adv.id
                    }
                });
            }

            return acc;
        },
        [] as { params: { id: string } }[]
    );

    return {
        paths,
        fallback: false
    };
}) satisfies GetStaticPaths;
