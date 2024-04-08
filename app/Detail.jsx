import React from "react";

const Detail = () => {
  return (
    <div className="flex justify-center  border-black">
      <div className=" w-full max-w-2xl p-2 grid grid-cols-2   border-r-4  ">
        <div>
          <div className="flex items-center rounded-md mb-4">
            <img
              src="https://3.imimg.com/data3/TB/AH/GLADMIN-15662522/aa-250x250.jpg"
              alt="Alok Mobile Repairing logo"
              className="h-40"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Handsfree Jumper</label>
          </div>
          <div>
            <p className="text-xl mb-2">Sold By - Alok Mobile Repairing</p>
            <h2 className="text-xl font-bold">Nokia C2-01 Handsfree Was</h2>
          </div>
        </div>
        <div>
          <form className="mb-4">
            <div className="flex items-center mb-4">
              <button className="bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-md hover:bg-blue-600 ml-auto">
                Contact Seller by adding a few details of your requirement.
              </button>
              <br />
            </div>
            <div>
              <label className=" mb-2">Course level</label>
              <select className="w-full bg-gray-300 border-black  rounded-md ">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <br />
              <label className="block mb-2">Duration</label>
              <select className="w-full border-black bg-gray-300 rounded-md shadow-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <br />
            <div>
              <label className="block mb-2">Requirement Details</label>
              <textarea className="w-full border-black bg-gray-300  rounded-md shadow-sm"></textarea>
            </div>
          </form>
          <div>
            <p className="text-l mt-4">Your Contact Information:</p>
            <p className="text-l">
              Bharat +91-8309303520 |{" "}
              <span className="underline">
                [bharat.name@gmail.com](mailto:bharat.name@gmail.com)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
