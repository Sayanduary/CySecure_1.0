import React, { useEffect, useRef } from "react";
import cySecureFeatures from "../../cySecureFeatures";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import keyfeatures from "../../KeyFeatures";
import Typed from "typed.js";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Home() {
  const featureList = Object.entries(cySecureFeatures);
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["CySecure."],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <div className="flex ">
        <div className="w-[70%] h-[80vh] flex flex-col justify-center items-center gap-8 p-5">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-green-500 to-red-500 bg-clip-text text-transparent">
            Welcome to <span ref={el}></span>
          </h1>
          <p className="text-2xl font-bold text-white">
            Your Real-Time Network Monitoring and Security Dashboard
          </p>
          <p className="text-center italic text-xl text-white  w-[80%]">
            CySecure is a powerful and intelligent tool designed to help you
            monitor, analyze, and protect your network traffic in real-time.
            From packet tracking to threat alerts, CySecure ensures you're
            always one step ahead of potential threats.
          </p>
        </div>
        <div className="w-1/2 h-[60vh] flex justify-center items-center">
          <img src="/images/cyber.png" alt="Cyber" className="h-90" />
        </div>
      </div>

      {/* What You Can Do Section */}
      <div className=" flex flex-col gap-20 h-[80vh]">
        <h1 className="text-5xl text-center font-bold text-white">
          What You <span className="text-green-500">Can Do</span>
        </h1>
        <div className=" flex gap-11 p-15">
          {featureList.map(([key, values]) => (
              <div
                onClick={() => navigate(values.route)}
                className="cursor-pointer border-1 bg-gray-700/5 flex flex-col gap-5 p-8 rounded-lg border-white shadow-xl hover:shadow-cyan-400 transition-all duration-50"
              >
                <h1 className="text-3xl font-bold text-green-500 text-center">
                  {values.title}
                </h1>
                <p className="text-xl text-white">{values.description}</p>
                <p className="text-lg text-white">{values.useCase}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="my-12 flex flex-col gap-14 h-[65vh]">
        <h1 className="text-5xl font-bold text-center text-white">
          CySecure <span className="text-green-500">Features</span>
        </h1>
        <Swiper
          key={uuidv4()}
          effect="coverflow"
          grabCursor={true}
          spaceBetween={40}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          speed={1000}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-[90%] mySwiper"
        >
          {keyfeatures.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <div className="border-1 rounded-lg border-white flex flex-col gap-5 p-8">
                <h1 className="text-green-500 font-bold text-3xl text-center">{item.name}</h1>
                <p className="text-white text-xl">{item.desci}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

          <div className="h-[50vh] flex flex-col gap-8">
          <h1 className="text-center text-5xl font-bold text-green-500">Get Started</h1>
          <p className="text-white text-center text-3xl">Ready To Explore Your Network</p>
          <div className="flex justify-center gap-6">
            <button onClick={()=>navigate("/dashboard")} className=" border-1 border-white text-white p-4 rounded-lg cursor-pointer text-lg shadow-xl font-bold hover:bg-purple-500 hover:text-black hover:border-0 transition-all duration-50">Go to Dashboard</button>
            <button onClick={()=>navigate("/logs")} className=" border-1 border-white text-white p-4 rounded-lg cursor-pointer text-lg font-bold hover:bg-purple-500 hover:text-black hover:border-0 transition-all duration-50">View Packet Logs</button>
            <button onClick={()=>navigate("/alert")} className=" border-1 border-white text-white p-4 rounded-lg cursor-pointer text-lg font-bold hover:bg-purple-500 hover:text-black hover:border-0 transition-all duration-50">See Alerts</button>
          </div>
          </div>

          <footer>
            <div className="h-[30vh] flex justify-center items-center gap-42 p-20 bg-gray-900 ">
            <div className="w-1/3 flex flex-col gap-3" >
              <h1 className="text-2xl font-bold text-green-500 te">About This Project </h1>
              <p className=" text-white"> CySecure is developed using the MERN stack (MongoDB, Express, React, Node.js) 
              with real-time support from Socket.IO. It's built for network admins, security 
              analysts, and anyone curious about how their network behaves.</p>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <h1 className=" text-green-500 text-2xl font-bold">Contact/Feedback</h1>
              <p className="text-gray-300 text-xl">Have suggestions or need help?</p>
            <p className="text-gray-300 ">📧 Email us at: support@cysecure.com</p>
            <p className="text-gray-300">🐱 GitHub: github.com/cysecure-repo</p>
            </div>
            </div>
          </footer>

    </>
  );
}

export default Home;
