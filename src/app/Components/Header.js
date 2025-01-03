'use client'
import '../Styles/side-bar.css'
function Header() {
    const toggleSideBar = ()=>{
      const sideBar = document.querySelector('.side-bar')
      sideBar.classList.contains('show') ? sideBar.classList.remove('show') :sideBar.classList.add('show')
    }
    return (
        <div className="header h-20 md:hidden  bg-sideColor sticky top-0 flex  items-center ">
            <i className="fa-solid fa-bars text-4xl p-5 text-white cursor-pointer" onClick={toggleSideBar}></i>
            <div className="flex-1 flex justify-center">
                <img className=" w-24  " src={"https://cdn.salla.network/images/logo/logo-light-wide.svg"} alt='/' />
            </div>
        </div>
    )
}
export default Header