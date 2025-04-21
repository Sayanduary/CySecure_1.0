import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";

function Logs() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/packets")
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center  p-4 h-[50vh] justify-center  ">
  
      <div className="flex flex-wrap gap-6 mb-1 bg-gray-600 p-4 rounded ">
        
        <div className="flex items-center relative">
          <IoMdSearch className="text-2xl absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search IP or Port..."
            className="pl-10 pr-4 py-2 border border-gray-400 rounded w-80 text-white"
          />
        </div>

        
        <select className="border border-gray-400 rounded py-2 px-4 w-90 text-white bg-gray-600 ">
          <option>All Protocols</option>
          <option>TCP</option>
          <option>UDP</option>
          <option>ARP</option>
        </select>

        
        <input
          type="date"
          className="border border-gray-400 rounded py-2 px-4 w-90 text-white "
        />

        
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-27">
          Search
        </button>
      </div>

      
      <div className="w-full overflow-x-auto flex justify-center rounded-xl overflow-hidden ">
        <table className=" w-[75%]  border border-black  shadow text-sm rounded bg-gray-600  ">
          <thead className="bg-gray-500 ">
            <tr className="">
              <th className="px-2 py-2 border border-gray-400 text-white">Time</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Source IP</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Source Port</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Destination IP</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Protocol</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Size</th>
              <th className="px-2 py-2 border border-gray-400 text-white">Flag</th>
            </tr>
          </thead>
          <tbody >
            {Data.map((e, index) => (
              <tr key={index} className=" text-center ">
                <td className="px-2 py-2 border text-white border-gray-400">
                  {e.timestamp?.replace(":", "") || "N/A"}
                </td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.sourceIP}</td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.sourcePort}</td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.destinationIP}</td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.protocol}</td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.size}</td>
                <td className="px-2 py-2 border border-gray-400 text-white">{e.data?.flags || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
