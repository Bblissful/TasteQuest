import React from "react";
export const LandingPage = () => {
  return (
    <div className="">
      <div>
        <figure>
          <img src="Images/bg2.jpg" alt="" />
        </figure>
      </div>
      {/* <div className="bg-[#200E0E] text-white  justify-center text-center">
        <h1 className=" font-serif text-lg md:text-2xl">
          Flavors of the world, Savored in Nigeria
        </h1>
        <p className="text-sm md:text-lg">
          {" "}
          Embark on a Culinary Journey with Taste Quést
        </p>
        <button className="reservation-button bg-white text-black rounded-md px-6 py-3 font-semibold">
          Make Reservations
        </button>
      </div> */}
      <section className=" bg-[#4b2525] text-white">
        <p className="text-[#FFE7B8] text-sm m-2">Our Story</p>
        <div className="md:flex">
          <div className="md:flex md:w-1/2">
            <div className="py-0 px-4 md:w-1/2 m-5 border border-transparent bg-[#200E0E] rounded-xl">
              <h1 className="text-center font-baskervville text-lg md:text-lg font-serif">
                Embrace the Essence of Hospitality, where Global Flavors Unite
              </h1>
              <p className="text-sm md:text-lg mb-4 md:mb-0">
                We take inspiration from the timeless wisdom of the Greek
                goddess of hospitality, infusing her spirit into every aspect of
                our culinary venture. As connoisseurs of exquisite flavors and
                passionate hosts, we believe that the world is meant to be
                savored, and our mission is to bring an unparalleled culinary
                experience to Nigeria.
              </p>
            </div>
            <div className="md:w-1/2 text-center justify-center m-6">
              <img
                src="Images/img1.png"
                alt=""
                className="h-[65vh] md:w-[95vh] w-[75vh] rounded-xl"
              />
            </div>
          </div>
          <div className="md:flex md:w-1/2">
            <div className="md:w-1/2 text-center justify-center m-6">
              <img
                src="Images/Frame 6.png"
                alt=""
                className="h-[65vh] md:w-[95vh] w-[75vh] rounded-xl"
              />
            </div>
            <div className="py-0 px-4 md:w-1/2 m-5 border border-transparent bg-[#200E0E] rounded-xl">
              <p>
                With Taste Quest, we go beyond simply providing meals; we curate
                unforgettable moments of togetherness and celebration. Our warm
                and inviting ambiance mirrors the essence of Hestia herself,
                creating an atmosphere where friends, families, and colleagues
                can gather, connect, and create lasting memories. Whether you
                seek a romantic dinner for two, a joyous gathering of loved
                ones, or a vibrant social event, we take pride in ensuring that
                every experience at Héstia is nothing short of extraordinar
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <h1 className="md:pt-9 pt-4 text-center justify-center md:text-3xl text-2xl text-[#502828] font-serif">
          Select Your Flavors
        </h1>
        <p className="pb-3 text-center justify-center text-sm text-[#502828]">
          Menu available from 7 countries
        </p>
        <div>
          <figure className="w-1/2 m-7 md:w-1/4">
            <img
              src="Images/sect1.png"
              alt=""
              className="md:w-[50vh] w-[35vh]"
            />
            <img src="Images/sect1a.png" alt="" className="relative md:w-[50vh] w-[35vh]" />
            <div className="absolute top-[-3] left-0">
                <h2>Italy Specials</h2>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
};
