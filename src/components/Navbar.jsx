import logo from '../images/1.png'
function Navbar() {
  return (
    <div >    
    <section className="px-8 py-3 flex justify-between h-20 ">
    <div><img src={logo} className='w-[190px]'/></div>
    <ul className="flex capitalize content-center flex-wrap">
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">home</a></li>
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">about</a></li>
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">skill</a></li>
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">services</a></li>
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">portfolio</a></li>
       <li className = "py-1 hover:border-2 hover:border-purple-300 hover:rounded-md"><a className="px-3 text-lg font-medium transition ease-in-out delay-150 " href="#">contact us</a></li>
    </ul>
              {/* social links */}
              <div className="flex items-center ">
            <a href="#" className="px-2 text-xl">
            <i className="fa-brands fa-github "></i>
            </a>
            <a href="#" className="px-2 text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="px-2 text-xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="px-2 text-xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
   </section></div>

  )
}
export default Navbar;
