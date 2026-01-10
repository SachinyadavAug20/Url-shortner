const page = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our URL Shortener service! We make it easy to create short, memorable links for your long URLs.
        </p>
        <p className="text-gray-500">
          Our tool allows you to customize your short URLs and track their performance. Whether for social media, marketing campaigns, or personal use, we've got you covered.
        </p>
      </div>
    </div>
  )
}

export default page
