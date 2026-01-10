import Link from 'next/link'
import { EnvelopeIcon, LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const page = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-4">Get in touch with us through the following channels:</p>
        <div className="space-y-3">
          <Link href="mailto:samtagon777@gmail.com" className="flex items-center justify-center bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            Email
          </Link>
          <Link href="https://in.linkedin.com/in/sachin-yadav-05a105374" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium">
            <LinkIcon className="w-5 h-5 mr-2" />
            LinkedIn
          </Link>
          <Link href="https://github.com/SachinyadavAug20" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium">
            <CodeBracketIcon className="w-5 h-5 mr-2" />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
