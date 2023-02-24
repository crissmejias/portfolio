import { Card } from "./Card";
import portfolio from "../assets/image.png";
import weatherapp from '/weather-app.png'
const Projects = () => {
  return (
    <div className="w-10/12 md:w-1/2 h-98 md:h-5/6 mx-auto flex flex-col justify-start gap-2 my-4 rounded-lg dark:bg-gray-700 bg-[#EAEDFB] shadow-lg shadow-[#695858]  border-black border-[1px] ">
      <div className="mt-8">
        <p className="text-center text-4xl font-bold dark:text-[#fff]">
          Projects
        </p>
      </div>
      <div className=" rounded-lg  w-full flex flex-wrap gap-12 justify-center mx-auto mb-12 mt-4">
        <Card url={weatherapp} title='Weather App' github={'https://github.com/crissmejias/WeatherApp'} site={'https://crissmejias-weather-app.netlify.app/'}/>
        <Card url={weatherapp} title='Weather App' github={'https://github.com/crissmejias/WeatherApp'} site={'https://crissmejias-weather-app.netlify.app/'}/>
      </div>
    </div>
  );
};
export { Projects };
