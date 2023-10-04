import React from "react";
import {FaTiktok, FaInstagram, FaYoutube} from "react-icons/fa"


const Footer = () => {

    const copyrightDate = new Date().getFullYear()

  return (

    
<footer className=" dark:bg-gray-900 bg-purple-600">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">INTEL</h2>
            <ul className="text-white dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Transport si plati</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Retururi si rambursari</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Garantie</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Intrebari frecvente</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">LAW AND ORDER</h2>
            <ul className="text-white dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Detaliile companiei</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Termeni si conditii</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Politica de confidentialitate</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">CINE SUNTEM NOI?</h2>
            <ul className="text-white dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
             odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
             Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
             pede.</p>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white ">Social</h2>
            <div className="text-white dark:text-gray-400 text-sm grid grid-cols-3 gap-4 justify-items-center w-20">
               
               <div>
                <a href="https://www.instagram.com/luciangrrr/" target="_blank" className="text-white hover:text-gray-900 dark:hover:text-white "><FaInstagram className="w-5 h-5 m-0"/></a>
            </div>
                
                <div>
                    <a href="https://www.youtube.com/@luciangrx5295" target="_blank" className="text-white hover:text-gray-900 dark:hover:text-white"><FaYoutube className="w-5 h-5"/></a>
                    </div>
                
                <div>
                    <a href="https://www.tiktok.com/@luciangrrx" target="_blank" className="text-white hover:text-gray-900 dark:hover:text-white"><FaTiktok className="w-5 h-5"/></a>
                    </div>
                
            </div>
        </div>
    </div>
    <div className="px-4 py-6 bg-purple-600 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">© 2023 <a href="/">Biolan Lucian™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
           <img title="Apple Pay" src="/img/apple-pay.png" className="h-10" alt="" />
           <img title="MasterCard" src="/img/mastercard.png" className="h-10" style={{margin: "0 0 0 10px"}} alt="" />
           <img title="Visa" src="/img/visa.png" className="h-10" style={{margin: "0 0 0 10px"}} alt="" />
           <img title="PayPal" src="/img/paypal.png" className="h-10" style={{margin: "0 0 0 10px"}} alt="" />
        </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;
