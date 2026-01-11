"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname=usePathname()
    let location = pathname.slice(pathname.lastIndexOf("/")+1)
    
    return (
        <nav className="h-fit py-4 flex text-xl pl-4 text-white font-semibold items-center gap-6 list-none bg-purple-700 justify-between">
            <ul className="flex h-full justify-center items-center gap-5">
                <Link href="/">
                    <div className="flex flex-col">
                        <span className="font-black text-2xl tracking-tighter leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-purple-500">
                            URL<span className="text-white group-hover:text-purple-200 transition-colors">shortner</span>
                        </span>
                    </div></Link>
                <Link href="/"> <li className={(location=="")?"bg-white/20 py-1 px-3 border-2 border-purple-900 rounded-3xl":"py-1"}>Home</li></Link>
                <Link href="/about"> <li className={(location=="about")?"bg-white/20 py-1 px-3 border-2 border-purple-900 rounded-3xl":"py-1"}>About</li></Link>
                <Link href="/generate"> <li className={(location=="generate")?"bg-white/20 py-1 px-3 border-2 border-purple-900 rounded-3xl":"py-1"}>Shortener</li></Link>
                <Link href="/contact"> <li className={(location=="contact")?"bg-white/20 px-3 py-1 border-2 border-purple-900 rounded-3xl":"py-1"}>Contact us</li></Link>
            </ul>
            <li className="place-self-start flex gap-4 px-10">
                <Link href="/generate">
                    <button type="button" className="text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl rounded-3xl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Try Now</button>
                </Link>
                <Link href="https://github.com/SachinyadavAug20/Url-shortner" target="_blank">
                    <button type="button" className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl rounded-3xl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Github</button>
                </Link>
            </li>
        </nav>
    )
}

export default Navbar
