import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rosarivo } from "next/font/google";

const rosarivo = Rosarivo({ weight: "400", subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={rosarivo.className}>
            <Component {...pageProps} />
        </main>
    )
}
