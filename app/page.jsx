import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="w-full">
                <section className="flex justify-center gap-10">
                    <div className="flex flex-col p-2 gap-2 justify-center ">
                        <p className="font-extrabold  text-5xl bg-clip-text text-transparent bg-linear-to-r from-cyan-600 via-violet-400 to-pink-600">
                            The best URL shortner
                        </p>
                        <p className="font-semibold bg-clip-text text-transparent bg-linear-to-b from-amber-700 via-black to-cyan-700 text-xl w-3/4">
                            We are most straght-forward URL shortner.This is an url shortner utilty made for nerds by nerds.
                        </p>

                        <div className="place-self-start flex gap-4 pr-10">
                            <Link href="/generate">
                                <button type="button" className="text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl rounded-3xl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-base text-lg px-4 py-2.5 text-center leading-5">Try Now</button>
                            </Link>
                            <Link href="https://github.com/SachinyadavAug20/Url-shortner" target="_blank">
                                <button type="button" className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl rounded-3xl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-semibold rounded-base text-lg px-4 py-2.5 text-center leading-5">Github</button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-150 h-150">
                        <Image src={"/v.jpg"} className="m-8 mix-blend-darken" fill={true} alt="vector img" />
                    </div>
                </section>
            </main>
        </>

    );
}

