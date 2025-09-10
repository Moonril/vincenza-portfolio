import { Link, Element } from 'react-scroll'

const Sidebar = function () {

    

    return (
        <section className="bg-transparent fixed left-0 top-0 bottom-0 flex flex-col justify-center p-3 z-10 gap-2">
            <Link to='about' smooth={true} className='group relative flex items-center p-1 cursor-pointer bg-opacity-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                </svg> 
                <span className='absolute left-full ml-2 whitespace-nowrap text-sm text-red-200 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>About</span>
            </Link>
            <Link to='projects' smooth={true} className='group relative flex items-center p-1 cursor-pointer rounded-2xl bg-opacity-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className='absolute left-full ml-2 whitespace-nowrap text-sm text-red-200 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Projects</span>
            </Link>
            <Link to='tech' smooth={true} className='group relative flex items-center p-1 cursor-pointer rounded-2xl bg-opacity-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <span className='absolute left-full ml-2 whitespace-nowrap text-sm text-red-200 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Skills</span>
            </Link>


        </section>
    )
}
export default Sidebar