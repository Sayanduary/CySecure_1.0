import React from "react";
 import cySecureFeatures from "../../../cySecureFeatures";
 import { useNavigate } from "react-router-dom";
function Home() {
  const featureList = Object.entries(cySecureFeatures);
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex ">
        <div className=" w-[70%]  h-[60vh] flex flex-col justify-center items-center gap-8 p-5 ">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ">Welcome to CySecure</h1>
          <p className="text-2xl font-bold text-white ">Your Real-Time Network Monitoring and Security Dashboard</p>
          <p className="text-center italic text-xl text-white">
            CySecure is a powerful and intelligent tool designed to help you
            monitor, analyze, and protect your network traffic in real-time.
            From packet tracking to threat alerts, CySecure ensures you're
            always one step ahead of potential threats
          </p>
        </div>
        <div className=" w-1/2  h-[60vh] flex justify-center items-center">
        <img src="/public/images/cyber.png" alt="" className="h-90 justify-center" />
      </div>
      </div>
      <div className="">
      <h1 className="text-4xl text-center font-bold text-white">What You <span className="text-cyan-400">Can Do</span></h1>
      <div className="flex gap-8 p-10 ">
        {featureList.map(([key,values])=>(
          <div key={key} onClick={()=> navigate(values.route)}  className=" border-1 bg-gray-700/5 flex flex-col gap-5 p-8  rounded-xl border-white shadow-xl shadow-purple-700 ">
            <h1 className="text-2xl font-bold text-cyan-500 text-center">{values.title}</h1>
            <p className="text-xl text-white">{values.description}</p>
            <p className="text-lg text-white">{values.useCase}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

export default Home;
