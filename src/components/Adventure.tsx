import type { AdventureProps } from "../data"
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import KeyIcon from "./KeyIcon";
import LockedIcon from "./LockedIcon";
import UnavailableIcon from "./UnavailableIcon";
import { ADVENTURE_STATUS } from "../data"


export default function Adventure({ id, imageSrc, imageAlt, title, description, location, difficulty, status, priority }: AdventureProps) {
    const [wasSelected, setWasSelected] = useState(false);
    const [showModal, setShowModal] = useState<ADVENTURE_STATUS>(ADVENTURE_STATUS.AVAILABLE);

    const handleSelection = () => {
        setShowModal(status);
        setWasSelected(true);
    }

    const handleCloseModal = () => {
        setShowModal(ADVENTURE_STATUS.AVAILABLE);
    }

    return (
        <>
            <div className="border border-gray-600 p-2 rounded">
                <article
                    className={
                        clsx(
                            !wasSelected && "adventure",
                            status === ADVENTURE_STATUS.UNAVAILABLE && wasSelected && "unavailable",
                            status === ADVENTURE_STATUS.LOCKED && wasSelected && "locked",
                            status === ADVENTURE_STATUS.MEMBERS_ONLY && wasSelected && "gold",
                            "border border-gray-300 flex flex-col space-y-6 justify-between col-span-1 pt-6 pb-8 px-4 bg-black min-h-full"
                        )}
                >
                    <Image priority={priority} src={`/${imageSrc}.avif`} alt={imageAlt} height={300} width={300} style={{ borderRadius: "20px", margin: "0 auto" }} />
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
                    {(status === ADVENTURE_STATUS.LOCKED || status === ADVENTURE_STATUS.MEMBERS_ONLY || status === ADVENTURE_STATUS.UNAVAILABLE) && !wasSelected && (
                        <button
                            type="button"
                            className="glow mx-auto font-bold border border-gray-400 text-xl text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white"
                            onClick={handleSelection}
                        >
                            SELECT
                        </button>
                    )}
                    {status === ADVENTURE_STATUS.UNAVAILABLE && wasSelected && (
                        <div className="flex space-x-2 items-center mx-auto font-bold text-xl text-gray-400 px-8 py-2 cursor-not-allowed rounded">
                            <UnavailableIcon className="w-5 h-5 fill-gray-400" />
                            <span>UNAVAILABLE</span>
                        </div>
                    )}
                    {status === ADVENTURE_STATUS.LOCKED && wasSelected && (
                        <div className="flex space-x-2 items-center mx-auto font-bold border border-gray-400 text-xl text-gray-400 px-8 py-2 cursor-not-allowed rounded">
                            <LockedIcon className="w-5 h-5 fill-gray-400" />
                            <span>LOCKED</span>
                        </div>
                    )}
                    {status === ADVENTURE_STATUS.MEMBERS_ONLY && wasSelected && (
                        <p className="flex space-x-2 items-center members-only mx-auto font-bold border text-xl text-gray-300 px-6 py-2 cursor-not-allowed rounded">
                            <KeyIcon className="w-6 h-6 fill-black" />
                            <span>MEMBERS ONLY</span>
                        </p>
                    )}
                </article>
            </div>
            {showModal > 0 &&
                (<div className="fixed top-0 right-0 bottom-0 left-0 z-[1300]" role="presentation">
                    <div className="fixed top-0 right-0 bottom-0 left-0 z-[-1] flex items-center justify-center bg-white" />
                    <div
                        className="h-full"
                        role="dialog"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        aria-modal="true"
                        tabIndex={0}
                    >
                        <div className="fixed top-0 w-full">
                            <h2
                                role="presentation"
                                className="mt-10 p-5 text-center text-md uppercase text-black sm:mt-0 sm:text-2xl"
                                id="modal-title"
                            >
                                Woah There Buddy!
                            </h2>
                            <button
                                aria-label="close modal"
                                className="pointer absolute top-2 right-3 rounded border border-solid border-transparent bg-transparent py-1.5 px-3 text-3xl text-red-500 transition-[color] duration-300 ease-in-out hover:text-red-700 focus:border focus:border-solid focus:border-primary-100 focus:text-fire"
                                type="button"
                                onClick={handleCloseModal}
                            >
                                &#10006;
                            </button>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}
