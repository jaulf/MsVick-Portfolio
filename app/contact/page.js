"use client"
import { useEffect } from "react";
import Image from "next/image";
import pic from "../../public/contact-logo.png";
import picg from "../../public/contact-logo2.png";
import Navbar from "@/components/navbar";
import call from "../../public/call-calling.png";
import sms from "../../public/sms.png";
import behance from "../../public/behance-fill.png";
import instagram from "../../public/instagram-fill.png";
import twitter from "../../public/twitter-fill.png";
import linkedin from "../../public/linkedin-fill.png";


export default function Contact() {
  
  useEffect(() => {
  
    var sone = document.getElementById('logoO');
    var stwo = document.getElementById('logon');
    var sthree = document.getElementById('logog');

    sone.addEventListener('mouseleave', function() {
      stwo.style.display = 'block';
      sthree.style.display = 'none';
    });
    sone.addEventListener('mouseenter', function() {
      stwo.style.display = 'none';
      sthree.style.display = 'block';
    });
  });

  return (
    <>
    <Navbar />

      <main className="w-full">
        <section className="lg:pt-12 pt-36 flex flex-col justify-center items-center">
          <div id="logoO">
            <Image id="logon" className='contact-img' src={pic} alt="MsVick Logo" quality={100} priority  />
            <Image id="logog" className='contact-img hidden' src={picg} alt="MsVick Logo" quality={100} priority  />        
          </div> 
          <h2 className="uppercase micrac pt-6 lg:pt-10">MsVick</h2>
          <div className="pt-10 flex flex-col justify-center items-center gap-4 bf600">
            <div className="flex justify-center items-center gap-2">
              <Image className='h-6 w-6' src={call} alt="Call Logo" quality={100} priority  />
              <p className="">(+234) 816 870 1083</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image className='h-6 w-6' src={sms} alt="SMS Logo" quality={100} priority  />
              <p className="">hello@msvick.com</p>
            </div>
            <div className="px-3 py-2 flex justify-center items-center gap-5">
              <Image className='h-6 w-6' src={behance} alt="Behance Logo" quality={100} priority  />
              <Image className='h-6 w-6' src={linkedin} alt="Linkedin Logo" quality={100} priority  />
              <Image className='h-6 w-6' src={twitter} alt="Twitter Logo" quality={100} priority  />
              <Image className='h-6 w-6' src={instagram} alt="Instagram Logo" quality={100} priority  />
            </div>
          </div>
        </section>
      </main>

      <footer className="lg:pt-20">
        <p className="footp">
          (c) 2023 | Design by MsVick | Code by Howard Otuya
        </p>
      </footer>
    </>
  );
}