import type { AdventureProps } from "../data"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import KeyIcon from "./KeyIcon";
import LockedIcon from "./LockedIcon";
import UnavailableIcon from "./UnavailableIcon";
import CloseIcon from "./CloseIcon";
import { ADVENTURE_STATUS } from "../data"
import { useRouter } from "next/router";


export default function Adventure(
    {
        id,
        imageSrc,
        imageAlt,
        title,
        description,
        location,
        difficulty,
        status,
        priority,
        showForm
    }: AdventureProps & { showForm?: boolean }) {
    const router = useRouter();
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [wasSelected, setWasSelected] = useState(false);
    const [showModal, setShowModal] = useState<ADVENTURE_STATUS>(ADVENTURE_STATUS.AVAILABLE);

    const handleSelection = () => {
        setShowModal(status);
    }

    const handleCloseModal = () => {
        setShowModal(ADVENTURE_STATUS.AVAILABLE);
        setWasSelected(true);
    }

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const res = await fetch(`/api/select-adventure/${id}`);

            const data = await res.json();

            if (!res.ok) {
                throw data?.error;
            }

            router.push("/adventure-begins/");
        } catch (error) {
            setError(String(error));
            setSubmitting(false);
        }
    }

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        }

    }, [showModal]);

    if (error) {
        return (
            <div className="border border-red-600 p-2 rounded">
                <div className="border border-red-300 flex flex-col space-y-2 justify-between bg-red-500 bg-opacity-20 min-h-full p-4 sm:space-y-4 sm:pt-6 sm:pb-8 sm:px-4">
                    <Image priority={priority} src="/submit-error.avif" alt="form submit error" height={350} width={350} style={{ borderRadius: "20px", margin: "0 auto" }} />
                    <h2 className="text-lg font-bold sm:text-2xl">Halt, Explorer!</h2>
                    <h3 className="text-sm font-bold tracking-wide sm:text-xl">{error}</h3>
                </div>
            </div>
        )
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
                            "border border-gray-300 flex flex-col space-y-4 justify-between col-span-1 pt-6 pb-8 px-4 bg-black min-h-full"
                        )}
                >
                    <Image priority={priority} src={`/${imageSrc}.avif`} alt={imageAlt} height={300} width={300} style={{ borderRadius: "20px", margin: "0 auto" }} />
                    <div className="flex flex-col space-y-0.5 backshadow">
                        <h2 className="backshadow text-lg sm:text-2xl">
                            {title}
                        </h2>
                        <p className="text-xs text-gray-300 sm:text-sm">
                            Location: {location}
                        </p>
                        <p className="text-xs text-gray-300 sm:text-sm">
                            Difficulty:&nbsp;
                            <span
                                className={clsx(
                                    difficulty === "Easy" && "text-green-500",
                                    difficulty === "Normal" && "text-orange-500",
                                    difficulty === "Heroic" && "text-purple-500",
                                    difficulty === "Legendary" && "text-yellow-500",
                                )}
                            >
                                {difficulty}
                            </span>
                        </p>
                        <p className="text-sm text-gray-300 !my-4 sm:min-h-[14rem] sm:text-base">
                            {description}
                        </p>
                    </div>
                    {wasSelected
                        ? (
                            <>
                                {{
                                    [ADVENTURE_STATUS.UNAVAILABLE]: (
                                        <div className="flex space-x-2 items-center mx-auto font-bold text-gray-400 px-8 py-2 cursor-not-allowed rounded sm:text-xl">
                                            <UnavailableIcon className="w-5 h-5 fill-gray-400 sm:w-5 sm:h-5" />
                                            <span>OUT OF STOCK</span>
                                        </div>

                                    ),
                                    [ADVENTURE_STATUS.LOCKED]: (
                                        <div className="flex space-x-2 items-center mx-auto font-bold border border-gray-400 text-gray-400 px-8 py-2 cursor-not-allowed rounded sm:text-xl">
                                            <LockedIcon className="w-4 h-4 fill-gray-400 sm:w-5 sm:h-5" />
                                            <span>DLC PASS ONLY</span>
                                        </div>

                                    ),
                                    [ADVENTURE_STATUS.MEMBERS_ONLY]: (
                                        <p className="flex space-x-2 items-center members-only mx-auto font-bold border text-gray-300 px-6 py-2 cursor-not-allowed rounded sm:text-xl">
                                            <KeyIcon className="w-5 h-5 fill-black sm:w-6 sm:h-6" />
                                            <span>MEMBERS ONLY</span>
                                        </p>

                                    ),
                                    [ADVENTURE_STATUS.AVAILABLE]: null,
                                }[status]}
                            </>
                        )
                        : null
                    }
                    {showForm
                        ? (
                            <button
                                type="button"
                                disabled={isSubmitting}
                                className="glow mx-auto font-bold border border-gray-400 text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-xl"
                                onClick={handleSubmit}
                            >
                                {isSubmitting ? "STARTING..." : "START"}
                            </button>
                        )
                        : (
                            <>
                                {status === ADVENTURE_STATUS.AVAILABLE && (
                                    <Link
                                        className="glow uppercase mx-auto font-bold border border-gray-400 text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-xl"
                                        href={`/confirm-adventure/${id}`}
                                    >
                                        Select
                                    </Link>
                                )}
                                {(status === ADVENTURE_STATUS.LOCKED || status === ADVENTURE_STATUS.MEMBERS_ONLY || status === ADVENTURE_STATUS.UNAVAILABLE) && !wasSelected && (
                                    <button
                                        type="button"
                                        className="glow uppercase mx-auto font-bold border border-gray-400 text-gray-300 px-10 py-2 cursor-pointer rounded hover:border-white hover:text-white sm:text-xl"
                                        onClick={handleSelection}
                                    >
                                        Select
                                    </button>
                                )}
                            </>
                        )
                    }
                </article>
            </div>
            {showModal
                ? createPortal(
                    <div className="fixed bottom-0 top-0 z-10 flex h-full w-full justify-center bg-black bg-opacity-70 focus:outline-none items-center" role="presentation">
                        <div
                            className="border border-rose-900 relative z-50 flex flex-col sm:m-4 sm:rounded-md w-[34rem] max-h-full overflow-y-auto sm:h-auto h-full focus-visible"
                            role="dialog"
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                            aria-modal="true"
                            tabIndex={0}
                        >
                            <div className="flex flex-row justify-center items-center border-b border-red-900 bg-black">
                                <h2
                                    role="presentation"
                                    className="p-3 text-center text-white font-bold sm:mt-0 sm:text-xl"
                                    id="modal-title"
                                >
                                    {{
                                        [ADVENTURE_STATUS.UNAVAILABLE]: "Adventure Unavailable",
                                        [ADVENTURE_STATUS.LOCKED]: "DLC Pass Required",
                                        [ADVENTURE_STATUS.MEMBERS_ONLY]: "Halt, Peasant!",
                                        [ADVENTURE_STATUS.AVAILABLE]: "",
                                    }[status]}
                                </h2>
                                <button
                                    aria-label="close modal"
                                    className="pointer absolute top-2 right-3 rounded py-1.5 px-3 text-2xl fill-red-500 transition-[color] duration-300 ease-in-out hover:fill-red-700"
                                    type="button"
                                    onClick={handleCloseModal}
                                >
                                    <CloseIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex-1 flex-col overflow-y-auto bg-black text-white px-5 pt-5 pb-8 text-center relative overflow-x-hidden m:h-auto">
                                {{
                                    [ADVENTURE_STATUS.UNAVAILABLE]: (
                                        <>
                                            <Image priority src="/unavailable.avif" alt={imageAlt} height={400} width={400} style={{ borderRadius: "20px", margin: "0 auto" }} />
                                            <p className="mt-4">Sorry explorer, but this adventure is no longer in stock.</p>
                                        </>
                                    ),
                                    [ADVENTURE_STATUS.LOCKED]: (
                                        <>
                                            <Image priority src="/locked.avif" alt={imageAlt} height={400} width={400} style={{ borderRadius: "20px", margin: "0 auto" }} />
                                            <p className="mt-4">Halt explorer, you don&apos;t have enough XP to enter this area yet.</p>
                                            <p className="mt-4 sm:mt-0">Return after you&apos;ve purchased the deluxe DLC season pass for <a className="text-blue-500 font-bold hover:underline" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" referrerPolicy="no-referrer">$49.99 (click to purchase)</a></p>
                                        </>
                                    ),
                                    [ADVENTURE_STATUS.MEMBERS_ONLY]: (
                                        <>
                                            <Image priority src="/members-only.avif" alt={imageAlt} height={400} width={400} style={{ borderRadius: "20px", margin: "0 auto" }} />
                                            <p className="mt-4">This adventure is <span className="font-bold">RESTRICTED</span> to <span className="text-yellow-500 font-bold">members only!</span></p>
                                            <p>Leave <span className="text-red-500 font-bold">NOW</span> peasant or else I&apos;ll throw you in jail.</p>
                                        </>
                                    ),
                                    [ADVENTURE_STATUS.AVAILABLE]: "",
                                }[status]}
                            </div>
                            <div className="flex flex-initial border-t border-red-900 bg-black p-4" />
                        </div>
                    </div>
                    , document.body)
                : null
            }
        </>
    )
}
