import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" w-full max-w-full">
      <aside className="relative bg-black overflow-hidden text-white  h-full w-full  ">
        <div className="relative z-10 max-w-screen-xl px-4   flex flex-col md:flex-row items-center md:items-start   ">
          <div className=" top-0 left-24 w-3/4 md:my-20 sm:pt-1 pt-8   ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatbot2306125.appspot.com/o/Group%205.png?alt=media&token=6c3962ef-ac52-4103-9a2d-89f7a0ce3597"
              alt="image1"
            />
          </div>

          <div className="max-w-xl h-full mt-2 md:mt-20  space-y-8 text-center sm:text-left justify-around animate-fadeInUp">
            <h6 className="md:text-xl text-sm font-bold   flex flex-wrap">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officiis hic corporis iste magnam numquam eligendi non qui eum eos et ipsam provident error, quis perferendis culpa deleniti eaque sequi?
             Reprehenderit minus magni saepe vitae deserunt vel tempore atque, corrupti quasi, odio ipsum molestias natus ex illo sapiente ducimus inventore, voluptatem doloremque! Veritatis assumenda accusantium ratione tempora nisi dolores nihil.
             Hic tempore id blanditiis earum quibusdam reiciendis, amet iusto repellat repellendus vero porro beatae accusamus, dolores eligendi expedita architecto itaque. Temporibus facere ducimus laudantium ipsa totam incidunt eum similique illum.
             us obcaecati accusantium similique. Minus, perspiciatis dolores corporis nobis fugiat ipsam velit eos sit facere ea quaerat culpa dicta iste aliquam ipsum. Incidunt quisquam dolore sed!
            </h6>
            
          </div>
        </div>

        <div className=" relative flex   h-auto  mt-24  justify-around mt-100">
          <div className=" w-2/5 mt-100">
            <h1 className=" mt-16 text-4xl text-green-500 font-bold ">
              kissan app
            </h1>
            <p className="text-lg mt-5   ">
              Empower farmers with Kissan! Our app offers a comprehensive
              solution for agricultural challenges. Rent essential tools
              effortlessly, diagnose crop diseases instantly using AI, and
              access a vast knowledge base on common crop ailments and their
              cures. Suggesting Pesticide store near you and many more.
            </p>
            <a href="src\components\Home\app-release.apk">
              <div className="inline-flex mt-9  text-white items-center px-1  py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                &nbsp; Download now
                
              </div>
            </a>
          </div>

          <main className="flex flex-col md:flex-row items-center justify-around w-full flex-1 p-4 ">
            <section className=" rounded-lg shadow-lg  m-4 w-3/4 md:w-1/3 transition duration-500 hover:scale-90">
              <img
                src="https://i.pinimg.com/236x/8a/74/76/8a747670b369962129f7d391b3055da0.jpg"
                alt="Image 1"
                className="w-full mb-4"
              />
            </section>

            <section className=" rounded-lg shadow-lg  m-4 w-3/4 md:w-1/3 transition duration-500 hover:scale-110" >
              <img
                src="https://i.pinimg.com/474x/42/50/ed/4250ed08b207d32ea24e580ba44ae838.jpg"
                alt="Image 2"
                className="w-full mb-4"
              />
            </section>

            <section className=" rounded-lg shadow-lg  m-4 w-3/4 md:w-1/3 transition duration-500 hover:scale-110">
              <img
                src="https://i.pinimg.com/236x/2c/d6/47/2cd64748fd4414d1bbb8094f7cc47600.jpg"
                alt="Image 3"
                className="w-full mb-4"
              />
            </section>
          </main>
        </div>

        <footer className="bg-black-500 text-white w-full py-4">
          <p className="text-center">
            &copy; 2024 IdeationLab. All rights reserved.
          </p>
        </footer>
      </aside>
    </div>
  );
}
