import { Users, Ellipsis, ClipboardClock, Plus, Dot } from "lucide-react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="flex-1 ">
        <div className="flex h-15 flex-1 justify-between items-center">
          <span className="text-5xl text-black">Welcome back, Kurapika 👋</span>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <img
                src="https://preview.redd.it/i-just-started-watching-hxh-on-ep-39-and-realized-leorio-is-v0-gq7vko7ghzzd1.jpeg?width=640&crop=smart&auto=webp&s=4f4c3b4c50db26e469eea2c4aa61be4bba1a0aa1"
                alt="Avatar 1"
                className="w-12 h-12 rounded-2xl border-2 border-white"
              />
              <img
                src="https://miro.medium.com/1*7Qy6qbDkrIQ_7qPrnSqkiA.png"
                alt="Avatar 2"
                className="w-12 h-12 rounded-2xl border-2 border-white"
              />
              <img
                src="https://image.geekship.com.br/yy0VxCp_uRP1bVh-sNTRZ1XIEX8=/1280x0/smart/filters:strip_icc():format(webp)/hull.geekship.com.br/wp-content/uploads/2024/01/gon-freecss-de-regata-branca-sorridno-com-sua-testa-vermelha-possivelmente-por-algum-golpe.jpeg"
                alt="Avatar 3"
                className="w-12 h-12 rounded-2xl border-2 border-white"
              />
              <img
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/hisoka.jpg"
                alt="Avatar 4"
                className="w-12 h-12 rounded-2xl border-2 border-white"
              />

              <div className="w-12 h-12 rounded-2xl border-2 border-white bg-gray-200 text-gray-700 flex items-center justify-center font-semibold text-sm">
                +4
              </div>
            </div>

            <button className="flex items-center px-5 py-2.5  text-red-400 rounded-xl border-2 border-red-300 shadow-md transition-colors duration-200 hover:bg-red-50 hover:border-red-300 gap-1">
              + <Users />
              <span className="text-base font-semibold"> Invite</span>
            </button>
          </div>
        </div>

        <div className="bg-white flex justify-between border-2 min-h-screen">
          <div className="w-1/2 flex flex-col items-center">
            <div className=" flex flex-col p-2 w-full mb-3 gap-4 px-5">
              <div className="flex flex-1 justify-between">
                <div className="flex justify-between gap-4">
                  <ClipboardClock className="text-gray-400" />
                  <span className="text-red-500">To-Do</span>
                </div>
                <button className="text-gray-400 flex gap-1">
                  <Plus className="text-red-500" /> Add task
                </button>
              </div>
              <div className="flex flex-1 space-x-2">
                <span className="text-black">20 June</span>
                <span
                  className="
                text-gray-400 flex"
                >
                  <Dot /> Today
                </span>
              </div>
            </div>

            <div className="flex max-w-xl border-2 shadow-md rounded-xl p-4 items-start gap-4 bg-amber-300">
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-red-500 rounded-full"></div>
              </div>

              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-lg font-semibold">
                  Attend Nischal’s Birthday Party
                </h2>
                <div className="flex flex-row flex-1 gap-5">
                  <p className="text-sm text-gray-600">
                    Buy gifts on the way and pick up cake from the bakery.
                    <span className="font-medium">(6 PM | Fresh Elements)</span>
                  </p>

                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJY1JLYLvoFUmZDByG7NnEHNsP6_J4bFP5w&s"
                      alt="Birthday Party"
                      className="w-50 h-30 rounded-lg object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>
                    Priority:{" "}
                    <span className="text-blue-500 font-medium">Moderate</span>
                  </span>
                  <span>
                    Status:{" "}
                    <span className="text-red-500 font-medium">
                      Not Started
                    </span>
                  </span>
                  <span>Created on: 20/06/2023</span>
                </div>
              </div>

              <button className="flex items-center justify-center">
                <Ellipsis />
              </button>
            </div>
          </div>
          <div className="w-1/2  bg-amber-950 ">o</div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
