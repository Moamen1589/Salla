import '../Styles/side-bar.css'
import SideBarLink from './Links'
function SideBar() {
    return (
        <div className="side-bar hide w-72 h-screen sticky top-0   bg-sideColor">

            <div className="logo  w-full h-24 flex items-center justify-around pr-7  ">
                <img className=" w-24 " src={"https://cdn.salla.network/images/logo/logo-light-wide.svg"} alt='/' />
            </div>
            <div className='media flex flex-col items-center  gap-3'>

                <img className=' w-20 h-20 rounded-full  border-4 border-dashed border-yellow-600 ' src='https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg' />
                <p className=' text-white text-xl'>متجر الهدايا</p>

                <div className='store-visit  border border-main_Color rounded-full'>
                    <span> <a className=' p-3 text-white' href='#'>زياره المتجر </a>  <span className='bg-main_Color p-2  h-full inline-block rounded-l-full'> <  i className="fa-solid fa-share  " /></span></span>

                </div>
            </div>
            <SideBarLink />
        </div>
    )
}
export default SideBar