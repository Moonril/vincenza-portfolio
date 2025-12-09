import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"

const ProjectSection = function () {
    
    const [projects, setProjects] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    
    const getProjects= ()=>{
        fetch("/projects.json")
        .then((response)=>{
            if(response.ok){
                return response.json()
            } else {
                throw new Error('errrore nella fetch')
            }
        })
        .then(data => {

            setIsLoading(false)
            console.log(data)
            
            setProjects(data)

        })
        .catch((error) => {
            console.log('errore', error)
            setIsLoading(false)
            setIsError(true)
        })
    }
    
    useEffect(()=>{getProjects()}, [])

    return (
        <section className="text-white p-5">


            <h3 className=" text-4xl pb-2 font-bold">My Projects</h3>
            <p className="py-3 text-lg">A collection of projects that showcase my skills in web development in <b className="text-orange-500">chronological</b> order. Some were completed during the Epicode Full-Stack course, others are personal projects.</p>

            <h5 className=" text-2xl py-2 font-bold text-orange-600">Clones</h5>
            <p>A series of intial projects, usually clones of existing websites, all developed in less than a day to test and hone my CSS/React skills.</p>
            {/* cards container */}
            <div className="flex flex-row justify-center p-2 md:p-5 gap-5 flex-wrap">


                {/* cards */}
                {
                    isLoading === true && (
                        <div className="text-center">
                            <p>Loading...</p>
                        </div>
                    )
                }

                {/* ERROR */}
                {
                    isError && (
                        <p>
                            Errore nella fetch
                        </p>
                    )
                }


                {
                    !isLoading && !isError && projects.slice(0,3).map((project) =>(
                            <ProjectCard key={project.id} project={project} />
                        )
                    )
                }


            </div>

            <h4 className=" text-3xl pb-2 font-bold my-10 text-orange-600">Personal Projects</h4>
            <p>A series of personal, more complex projects where I developed every single bit, from design and colours to the structure of the database.</p>

                  

            <div className="flex flex-row justify-center p-2 md:p-5 gap-5 flex-wrap"> 

                {/* cards */}
                {
                    isLoading === true && (
                        <div className="text-center">
                            <p>Loading...</p>
                        </div>
                    )
                }

                {/* ERROR */}
                {
                    isError && (
                        <p>
                            Errore nella fetch
                        </p>
                    )
                }


                {
                    !isLoading && !isError && projects.slice(3).map((project) =>(
                            <ProjectCard key={project.id} project={project} />
                        )
                    )
                }


            </div>    
            
            
        </section>
    )
}

export default ProjectSection