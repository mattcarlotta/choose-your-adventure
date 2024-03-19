import type { AdventureProps } from "../data"
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ADVENTURE_STATUS } from "../data"

export default function Adventure({ id, imageSrc, imageAlt, title, description, location, difficulty, status }: AdventureProps) {
    return (
        <article
            className={
                clsx(
                    status === ADVENTURE_STATUS.AVAILABLE && "adventure",
                    status === ADVENTURE_STATUS.UNAVAILABLE && "unavailable",
                    status === ADVENTURE_STATUS.LOCKED && "locked",
                    status === ADVENTURE_STATUS.MEMBERS_ONLY && "gold",
                    "border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 pt-6 pb-8 px-4 bg-black rounded"
                )}
        >
            <Image src={`/${imageSrc}.avif`} alt={imageAlt} height={300} width={300} style={{ borderRadius: "20px", margin: "0 auto" }} />
            <div className="flex flex-col backshadow">
                <h2 className="backshadow text-2xl">
                    {title}
                </h2>
                <p className="text-sm text-gray-300">
                    <span className="text-lg">Location</span>: {location}
                </p>
                <p className="text-sm text-gray-300">
                    <span className="text-lg">Difficulty</span>: {difficulty}
                </p>
                <p className="text-sm text-gray-300 mt-6">
                    {description}
                </p>
            </div>
            {status === ADVENTURE_STATUS.AVAILABLE && (
                <Link
                    className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                    href={`/confirm-adventure/${id}`}
                >
                    SELECT
                </Link>
            )}
            {status === ADVENTURE_STATUS.UNAVAILABLE && (
                <p className="mx-auto font-bold text-xl text-gray-400 px-10 py-2 cursor-not-allowed rounded">
                    UNAVAILABLE
                </p>
            )}
            {status === ADVENTURE_STATUS.LOCKED && (
                <p className="mx-auto font-bold border border-gray-400 text-xl text-gray-400 px-10 py-2 cursor-not-allowed rounded">
                    LOCKED
                </p>
            )}
            {status === ADVENTURE_STATUS.MEMBERS_ONLY && (
                <p className="members-only mx-auto font-bold border text-xl text-gray-300 px-8 py-2 cursor-not-allowed rounded">
                    MEMBERS ONLY
                </p>
            )}
        </article>

    )
}
