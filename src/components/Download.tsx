import doc from '../assets/doc.pdf'
const Download = () => {
    return(
            <a href={doc} download={true} className="hover:text-[#C06868] cursor-pointer bg-[#E5D4CE]  shadow-lg shadow-[#695858] border-black border-[1px] dark:border-white dark:hover:text-gray-500 w-2/3 mx-auto rounded-lg p-2  dark:active:bg-white dark:active:border-gray-700  dark:active:text-gray-700 transition-colors text-center text-lg dark:text-white font-bold dark:bg-gray-700">
                Download my CV
            </a>
    )
}
export {Download};