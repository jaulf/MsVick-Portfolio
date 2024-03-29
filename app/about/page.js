"use client";
import { useEffect } from "react";
import Image from "next/image";
import profile from "../../public/profile.png";
import Navbar from "@/components/navbar";

export default function Home() {
  useEffect(() => {
    var sone = document.querySelector(".satgrn");
    var stwo = document.querySelector(".sgi");
    var sthree = document.querySelector(".sgb");

    sone.addEventListener("mouseleave", function () {
      stwo.style.transition = "filter 300ms ease-out";
      stwo.style.filter = "saturate(0)";
      sthree.style.transition =
        "background-color 300ms ease-out, color 300ms ease-out";
      sthree.style.backgroundColor = "#FFF9F3";
      sthree.style.color = "#1b1b1b";
    });
    sone.addEventListener("mouseenter", function () {
      stwo.style.transition = "filter 300ms ease-out";
      stwo.style.filter = "saturate(1)";
      sthree.style.transition =
        "background-color 300ms ease-out, color 300ms ease-out";
      sthree.style.backgroundColor = "#14a26b";
      sthree.style.color = "#FFF9F3";
    });
  });

  return (
    <>
      <Navbar />

      <main className="w-full pt-main">
        <div className="w-full">
          <div className="bodyCon">
            <section className="pt-112a">
              <div className="flex uppercase flex-col justify-center items-center h-full">
                <p className="bg-text">About</p>
                <p className="otbgt">About</p>
              </div>
            </section>

            <section>
              <div className="ab-cont pt-16 lg:pt-20 gap-10 flex flex-col justify-center items-center">
                <p>
                MsVick upholds humanity, integrity and possibility mentality as its core values - in treating everyone with respect and empathy while being transparent in dealings with people and clients.
                </p>
              </div>

              <div className="pt-10 lg:pt-6 ab-cont ">
                <div className="greg gap-5 text-center flex flex-col lg:flex-row items-center">
                  <p className="w-full lg:w-auto">Humanity</p>
                  <p className="w-full lg:w-auto">integrity</p>
                  <p className="w-full lg:w-auto">possibility mentality</p>
                </div>
                <p className="pt-20">
                Community lies at the heart of the MsVick brand. MsVick actively engages in community building initiatives to create a positive impact on the Tech ecosystem, promoting shared learning, diversity, sustainability, and social responsibility.
                </p>
              </div>

            </section>

            <section className="pt-200 w-full h-full">
              <div className="flex text-center uppercase flex-col justify-center items-center h-full">
                <p className="bg-text">Face of MsVick</p>
                <p className="otbgt">Face of MsVick</p>
              </div>
            </section>

            <section className="flex flex-col xl:items-stretch items-center justify-center lg:flex-row pt-8 lg:pt-20 gap-5">
              <div className="dax borderr p-6 gap-8 lg:p-10 lg:gap-10 flex flex-col">
                <p>
                  I&apos;m <span>Victoria Alli-Johnson</span>, a{" "}
                  <span>UI/UX/Product Designer</span> who believes in designing
                  with a deep understanding of human psychology. I&aposm
                  fascinated by how we connect, interpret, and respond to
                  experiences, whether digital or physical.
                </p>
                <p>
                  With a background primarily in early-stage startups and
                  cross-functional teams, I specialize in crafting adaptive,
                  flexible, intuitive, and useful user experiences for both
                  businesses and customers.
                </p>
                <p>
                  I bring additional skills in product management, enabling me
                  to understand product roadmaps, PRDs, and FRS. Throughout my
                  process, I prioritize clear communication and comprehensive
                  documentation from start to finish
                </p>
              </div>

              <div className="dax cursor-pointer satgrn mx-600 overflow-hidden h-full relative borderr">
                <div className="overflow-hidden h-full relative border">
                  <Image
                    className=" sgi saturate-0 object-top w-full h-full"
                    src={profile}
                    alt="MsVick Profile"
                    quality={100}
                    priority
                  />
                </div>
                <span className="absolute sgb bgmilk bottom-0 left-0 w-full lg:w-auto text-center z-10">
                  Connect with me on LinkedIn
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="lg:pt-28">
        <div className="pt-28 lg:pt-0">
          <p className="footp">
            (c) 2023 | Design by MsVick | Code by Howard Otuya
          </p>
        </div>
      </footer>
    </>
  );
}
