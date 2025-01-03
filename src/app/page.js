import './Styles/all.min.css'
import Image from "next/image";
import SideBar from "./Components/SideBar";
import Footer from './Components/Footer';
import Option from './Components/Option';
import Header from './Components/Header';
import Head from 'next/head';
export default function Home() {

  return (
    <>
      <Header />
      <div className=' flex  min-h-full '>
        <SideBar />
        <Option />
      </div>
      <Footer />
    </>
  );
}
