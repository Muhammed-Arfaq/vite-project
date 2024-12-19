import { useState } from "react";
import { useEffect } from "react";
import { getAllData } from "./api";

function App() {

  const [allData, setAllData] = useState([]);

  const getData = async () => {
    await getAllData().then((result) => {
      console.log(result);
      setAllData(result?.data?.data);
    });
  };
  console.log(allData);
  useEffect(() => {
    getData()
  }, [allData])

  return (
    <>
      <main className="bg-gradient-to-r from-slate-200 to-slate-50 h-screen">
        <div className="flex flex-col items-center max-w-[1280px] mx-auto">
          <h1 className="font-bold text-6xl uppercase font-serif mt-28">
            Pioneer Soft User Data
          </h1>
          <div>
            <div className="flex p-4 overflow-x-scroll max-w-4xl rounded-2xl gap-x-12 mt-10">
              {allData?.map((data) => (
                <>
                  <div className="text-center font-sans">
                    <img
                      className="rounded-2xl shadow-2xl w-44 h-56 object-cover"
                      src={data?.avatar}
                      alt=""
                    />
                    <p className="font-semibold text-md mt-5">{data?.first_name}&nbsp;{data?.last_name}</p>
                    <p className="font-semibold text-md">{data?.email}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
