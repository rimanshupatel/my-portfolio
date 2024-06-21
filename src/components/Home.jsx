import { Typewriter } from "react-simple-typewriter";
import picture from "../images/profile-picture.png";
function Home() {
  return (
      <section className="flex justify-between my-5 ">
        <div className="context py-24">
          <div>
            <h1 className="text-5xl font-semibold py-4">Hii, I'm Rimanshu </h1>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              And I'm
              <span className="ml-2 text-red-500">
                <Typewriter
                  words={['developer' , 'designer', 'coder']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={30}
                  delaySpeed={1500}
                  cursorColor = "black"
                />
              </span>
            </h2>
          </div>
          <div className="max-w-[34rem] my-2 text-lg capitalize py-2">
            <p>
              i have reach experience in web design and Development. i love to
              talk about new technology
            </p>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center mt-5 w-[9.5rem] h-[3.2rem] p-[15px] border border-red-300 bg-red-50 rounded-[10px] font-medium text-gray-500 transition ease-in delay-150 hover:bg-red-500 hover:text-white duration-200 shadow-lg shadow-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-2
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-arrow-down-circle ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>
        <div className="picture">
          <img src={picture} className="w-[22rem]" />
        </div>
      </section>
  );
}
export default Home;
