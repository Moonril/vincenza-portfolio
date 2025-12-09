
const ProjectCard = function ({project}) {

    return (
        <div className="bg-stone-950 p-4 rounded-2xl border border-yellow-800 w-sm hover:border-red-800 hover:scale-103 transition delay-50 duration-500 ease-in-out flex flex-col justify-between">
            <div className="relative">
                <img src={project.image} alt={project.image} className="rounded-2xl border border-gray-800 w-full h-72  object-cover" />
                <div className="absolute right-8 top-6 bg-cyan-700 px-2 rounded-2xl">{project.type}</div>
            </div>
            <h5 className="pt-4 pb-2 text-xl font-bold text-left">{project.title}</h5>
            <p className="py-2 text-left">
                {project.description}
            </p>
            <div className="p-2 flex flex-row justify-start flex-wrap gap-2">
                {
                    project.ingredients.map((i, index) => (
                        <p key={index} className="bg-slate-900 border border-slate-400 rounded-xl py-1 px-4 flex flex-row items-center"> <img width="20" height="20" src={i.png} alt={i.png} className="me-1"/> {i.tech}</p>
                    ))
                }
                
            </div>
            <div className="flex flew-row justify-center p-3">
                <a href={project.githubFront} target="_blank"  className="flex flew-row me-2 py-2 px-3 bg-slate-700 rounded-md cursor-pointer hover:opacity-70"><img src="github-48.png" alt="github icon" width={22} className="me-2" /> {project.title === 'Camping Elicrisi' ? 'Front' : 'GitHub'}</a>
                {
                    project.githubEnd && (
                        <a href={project.githubEnd} target="_blank"  className="flex flew-row me-2 py-2 px-3 bg-slate-700 rounded-md cursor-pointer hover:opacity-70"><img src="github-48.png" alt="github icon" width={22} className="me-2" />Back</a>
                    )
                }
                <a href={project.demo} target="_blank" className="flex flew-row ms-2 py-2 px-5 bg-cyan-800 rounded-md cursor-pointer hover:opacity-70 me-2"><img width="20" height="20" src="icons8-enlazar-50.png" alt="css logo" className="me-1"/> Demo</a>
                
            </div>
        </div>
    )
}

export default ProjectCard