import profile from "../assets/profile.jpg";
import { Download } from "./Download";
const Sidebar = () => {
  return (
    <>
      <div className="w-11/12 md:w-11/12 md:max-h-[550px] bg-[#EAEDFB] shadow-lg shadow-[#695858] border-black border-[1px] py-4  mt-4 mx-auto dark:bg-gray-700 rounded-lg  dark:border-gray-200 opacity-[35]">
        <div className="rounded-[92%] border-2 shadow-md shadow-[#695858] w-40 h-40 mx-auto dark:bg-gray-900 opacity-45">
          {" "}
          <img
            className="w-full h-full mix-blend-color-lighten rounded-full object-contain"
            src={profile}
            alt=""
          />
        </div>
        <div className=" my-2 flex  flex-col items-baseline gap-2">
          <p className="dark:text-[#fff] font-bold text-xl text-center mx-auto">
            Cristhian Mejias Serrano
          </p>
          <p className="dark:text-[#fff] font-bold text-md text-center mx-auto">
            Frontend Web Developer
          </p>
          <a
            href="https:/github.com/crissmejias"
            className="hover:text-[#C06868] dark:text-[#fff] dark:hover:text-gray-500 transition-colors  text-center inline-block m-auto"
            target="_blank">
            <i className="fi fi-brands-github"></i> crissmejias
          </a>
          <a
            href="https:/twitter.com/crissmejias"
            className="hover:text-[#C06868] dark:text-[#fff] dark:hover:text-gray-500 transition-colors  text-center inline-block m-auto"
            target="_blank">
            <i className="fi fi-brands-twitter"></i> @crissmejias
          </a>
          <a
            href="https://linkedin.com/in/criss-mejias"
            className="hover:text-[#C06868] dark:text-[#fff] dark:hover:text-gray-500 transition-colors  text-center inline-block m-auto"
            target="_blank">
            <i className="fi fi-brands-linkedin"></i> in/criss-mejias
          </a>
        </div>
      </div>
    </>
  );
};
export { Sidebar };
