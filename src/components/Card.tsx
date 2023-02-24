type props = {
  url: string;
  title: string;
  github: string;
  site: string;
};
const Card = (props: props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.url})` }}
      className={`"w-full flex flex-col aspect-[4/6] items-center justify-between flex-wrap p-4 rounded-xl dark:bg-inherit bg-transparent blur-[0.5px] hover:shadow-lg hover:shadow-[#695858] border-black border-[1px]  group bg-blend-hard-light bg-center bg-[length:100%] bg-no-repeat dark:hover:bg-gray-500 transition duration-100 ease-in`}>
      <h2 className="mt-4 font-medium text-2xl text-center dark:group-hover:text-white group-hover:blur-[0.5px] transition-none">
        {props.title}
      </h2>
      <div className="mb-4 dark:text-white flex justify-evenly w-full ">
        <a
          href={props.github}
          target="_blank"
          className="z-50 blur-none cursor-pointer hidden text-3xl group-hover:inline transition duration-500 ease-in">
          <i className="fi fi-brands-github"></i>
        </a>
        <a
          href={props.site}
          target="_blank"
          className="cursor-pointer hidden text-3xl group-hover:inline">
          <i className="fi fi-rr-window-alt group-hover:shadow-inner"></i>
        </a>
      </div>
    </div>
  );
};
export { Card };
