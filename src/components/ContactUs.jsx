function ContactUS() {
 
    return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-pink-100"></div>
      <div className="container px-5 py-24 mx-auto flex ">
        <div style={{width:'27rem'}} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg px-8 py-20 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">
         Contact From
          </h2>
          <div className="my-2">
          <label htmlFor="name" className="leading-7 text-md font-medium text-gray-600">Name</label>
                <input type="name" id="name" name="name" placeholder="Your Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="my-2">
          <label htmlFor="email" className="leading-7 text-md font-medium text-gray-600">Email</label>
          <div className="alert"><p className="text-red-500 hidden">Please include an '@' the email address</p></div>
                <input type="email" id="email" name="email" placeholder="Your E-mail" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mt-2 mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div>
            <a href="#" className="inline-flex items-center text-gray-500 bg-red-50 border-red-300 border py-3 px-4 focus:outline-none hover:bg-red-500 hover:text-white rounded text-sm transition ease-in delay-150 shadow-lg shadow-slate-200">Submit Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactUS;
