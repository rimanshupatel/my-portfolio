import AboutPic from "../images/5.jpg";
function AboutMe() {
  return (
    <section className="text-gray-600 body-font">
      <div className="text-5xl font-medium text-center">About us</div>
      <div className="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="p-1 text-gray-500 font-medium">- NICE TO MEET YOU ! </p>

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
          I'm Rimanshu patel
          </h1>
          
          <p className="mb-8 leading-relaxed">
            Hello there! My name is Rimanshu Patel. I am a web designer &
            developer, and I am very passionate and dedicated to my work. With 
            years experience as a professional a graphic designer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <div>
            <a href="#" className="inline-flex items-center text-gray-400 border-indigo-600 border py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg transition ease-in delay-150">Let's talk
            <i className ="fa-solid fa-angle-right ml-2 " ></i></a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={AboutPic}
          />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
