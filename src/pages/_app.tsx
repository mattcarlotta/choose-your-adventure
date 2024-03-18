import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rosarivo } from "next/font/google";
import clsx from "clsx";

const rosarivo = Rosarivo({ weight: "400", subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={clsx("flex min-h-screen flex-col items-center justify-center p-24", rosarivo.className)}>
            <Component {...pageProps} />
        </main>
    )
}
