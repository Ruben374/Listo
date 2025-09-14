import { Users } from "lucide-react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      {/* Parte de cima */}
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

      {/* Parte com os cards*/}
      <div className="bg-white flex justify-between min-h-full">
        <div className="w-1/2 bg-amber-600 min-h-full">o</div>
        <div className="w-1/2 full bg-amber-950 min-h-full">o</div>
      </div>
    </Layout>
  );
}

export default Home;
