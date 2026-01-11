"use client"
import 'react-toastify/dist/ReactToastify.css'

import { useState } from "react"
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { toast } from "react-toastify";
import Link from 'next/link';

const app = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [generated, setgenerated] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    const generate = () => {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        if (input == "" || output == "") {
            toast.error('Enter a valid URL', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            return;
        }

        const raw = JSON.stringify({
            "url": `${input}`,
            "shorturl": `${output}`
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.error) {
                    toast.error('URL already taken', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                }
                else {
                    setOutput(`${process.env.NEXT_PUBLIC_HOST}/${output}`);
                    toast('Generated shortURL!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
                    setgenerated(true)
                }
            }
            )
            .catch((error) => console.error(error))
    }

    return (
        <div className="h-[87vh] bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center p-4">

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            {!generated && <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Generate your own short URL
                </h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="input"
                        onChange={(e) => { setInput(e.target.value) }}
                        placeholder="Enter your URL"
                        value={input}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    />
                    <input
                        type="text"
                        placeholder="Enter preferred short URL text"
                        name="shorturl"
                        value={output}
                        onChange={(e) => { setOutput(e.target.value) }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    />
                    <button
                        onClick={() => {
                            generate()
                        }}
                        type="button"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium"
                    >
                        Generate
                    </button>
                </div>
            </div>
            }
            {generated && (
                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg w-1/3">
                    <p className="text-sm font-medium text-purple-800 mb-2">Your Short URL:</p>
                    <div className="flex items-center space-x-2 mb-4 w-full justify-between">
                        <code className='w-full cursor-pointer'>
                            <Link className='cursor-pointer' href={output}>
                                <input
                                    type="text"
                                    value={output}
                                    readOnly
                                    className="flex-1 px-3 py-2 cursor-pointer bg-white border border-gray-300 w-11/12 rounded-md text-gray-900 font-mono text-sm focus:outline-none"
                                />
                            </Link>
                        </code>
                        <button
                            onClick={copyToClipboard}
                            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium text-sm"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            setInput("");
                            setOutput("");
                            setgenerated(false);
                            setCopied(false);
                        }}
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 font-medium text-sm"
                    >
                        Generate Another URL
                    </button>
                </div>
            )}
        </div>
    )
}

export default app
