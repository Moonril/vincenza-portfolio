
const ProjectCard = function () {
    return (
        <div className="bg-stone-950 p-4 rounded-2xl border border-yellow-800 w-sm hover:border-red-800 hover:scale-103 transition delay-50 duration-500 ease-in-out flex flex-col justify-between">
            <div className="relative">
                <img src="recipe-preview.png" alt="camping-preview" className="rounded-2xl border border-gray-800 w-full h-72  object-cover" />
                <div className="absolute right-8 top-6 bg-cyan-700 px-2 rounded-2xl">Front End</div>
            </div>
            <h5 className="pt-4 pb-2 text-xl font-bold text-left">Family Recipes Book</h5>
            <p className="py-2 text-left">
                A small recipe book used to digitalise all our family recipes. 
            </p>
            <div className="p-2 flex flex-row justify-start flex-wrap gap-2">
                <p className="bg-slate-900 border border-slate-400 rounded-xl py-1 px-4 flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                    <linearGradient id="SVGID_1__V6HShIzw21x7_gr1" x1="32" x2="32" y1="9.043" y2="55.011" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__V6HShIzw21x7_gr1)" d="M51,8H13c-2.8,0-5,2.2-5,5v38c0,2.8,2.2,5,5,5h38c2.8,0,5-2.2,5-5V13C56,10.2,53.8,8,51,8z M54,51	c0,1.7-1.3,3-3,3H13c-1.7,0-3-1.3-3-3V13c0-1.7,1.3-3,3-3h38c1.7,0,3,1.3,3,3V51z"></path><linearGradient id="SVGID_2__V6HShIzw21x7_gr2" x1="45.578" x2="45.578" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SVGID_2__V6HShIzw21x7_gr2)" d="M46.7,41.5l-0.8-0.3c-1.4-0.6-2-1-2-2c0-0.8,0.6-1.4,1.5-1.4c0.8,0,1.3,0.3,1.8,1c0.1,0.2,0.4,0.3,0.7,0.1 l1.7-1.1c0.2-0.1,0.3-0.5,0.2-0.7c-1-1.5-2.4-2.1-4.3-2.1c-2.9,0-4.7,1.8-4.7,4.2c0,2.6,1.5,3.9,3.9,4.8l0.8,0.3 c1.5,0.6,2.2,1,2.2,2.1c0,0.9-0.7,1.6-2,1.6c-1.4,0-2.1-0.8-2.8-1.8c-0.2-0.2-0.5-0.3-0.7-0.1l-1.7,1.1c-0.2,0.1-0.3,0.4-0.2,0.7 c1,1.7,2.6,3,5.4,3c3.1,0,5.3-1.6,5.3-4.5C51,43.8,49.5,42.6,46.7,41.5z"></path><linearGradient id="SVGID_3__V6HShIzw21x7_gr3" x1="34.081" x2="34.081" y1="35.681" y2="50.191" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SVGID_3__V6HShIzw21x7_gr3)" d="M38.5,35h-2.3c-0.3,0-0.5,0.2-0.5,0.5v10.1c0,1.6-0.6,2-1.7,2c-0.9,0-1.6-0.5-2.1-1.2 c-0.1-0.2-0.4-0.3-0.7-0.1l-1.8,1.1c-0.2,0.1-0.3,0.5-0.2,0.7c0.9,1.5,2.6,2.9,5,2.9c2.9,0,4.8-1.5,4.8-4.9V35.5 C39,35.2,38.8,35,38.5,35z"></path>
                    </svg><span className="ps-1">Javascript</span></p>
                <p className="bg-slate-900 border border-slate-400 rounded-xl py-1 px-4 flex flex-row items-center"> <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo" className="me-1"/> React</p>
                <p className="bg-slate-900 border border-slate-400 rounded-xl py-1 px-4 flex flex-row items-center"><img width="20" height="20" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css" className="me-1" /> Tailwind</p>
                
            </div>
            <div className="flex flew-row justify-center p-3">
                <a href="https://github.com/Moonril/family-recipes" target="_blank"  className="flex flew-row me-2 py-2 px-3 bg-slate-700 rounded-md cursor-pointer hover:opacity-70"><img src="github-48.png" alt="github icon" width={22} className="me-2" />Git</a>
                <a href="https://family-recipes-ten.vercel.app/" target="_blank" className="flex flew-row ms-2 py-2 px-5 bg-cyan-800 rounded-md cursor-pointer hover:opacity-70 me-2"><img width="20" height="20" src="icons8-enlazar-50.png" alt="css logo" className="me-1"/> Demo</a>
                
            </div>
        </div>
    )
}

export default ProjectCard