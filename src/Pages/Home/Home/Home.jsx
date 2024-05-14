import React from "react";
import Banner from "../Banner";
import FeaturedRooms from "../FeaturedRooms";
import Map from "../Map";
import NewLetter from "../NewLetter";
import Review from "../Review";

import bed from "../../../assets/images/room1.jpg";
import bed1 from "../../../assets/images/room2.jpg";
import bed2 from "../../../assets/images/room3.jpg";
import offer from "../../../assets/images/fifteen.png";
import sp from "../../../assets/images/sp.png";

const Home = () => {
  const [showModal, setShowModal] = React.useState(true);

  const handleclose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Banner></Banner>
      <Map></Map>
      <NewLetter></NewLetter>
      <FeaturedRooms></FeaturedRooms>
      <Review></Review>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto lg:max-w-2xl max-w-[250px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <figure className="lg:px-20 lg:py-10">
                  <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full flex-col">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-xl font-semibold">
                          Executive Suite
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                    <div
                      id="item2"
                      className="carousel-item w-full flex-col relative"
                    >
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-lg font-semibold">
                          {" "}
                          Deluxe King
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed1} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                    <div
                      id="item3"
                      className="carousel-item w-full flex-col relative"
                    >
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-lg font-semibold">
                          Executive Suite
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed2} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs">
                      3
                    </a>
                  </div>
                </figure>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase lg:px-5 lg:py-3 px-2 border-red-500 border-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute -top-5 -right-8 bg-white rounded-full"
                    type="button"
                    onClick={handleclose}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Home;
