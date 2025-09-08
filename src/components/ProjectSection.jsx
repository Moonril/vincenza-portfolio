const ProjectSection = function () {
    return (
        <section className="text-white p-5">
            <h3 className=" text-3xl pb-2">My Projects</h3>
            <p className="py-3">A collection of projects that showcase my skills in web development. In chronological order</p>
            <div className="flex flex-row justify-center p-5 gap-4">
                <div className="bg-red-400 p-3 rounded-2xl border border-gray-400 w-xs hover:border-purple-600 hover:scale-103 transition delay-50 duration-300 ease-in-out">
                    <h5 className="py-2 text-lg">Spotify with Vanilla JS</h5>
                    <img src="spotify-preview.png" alt="spotify-preview" className="rounded-2xl w-full h-72" />
                    <p className="py-3">team effort Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur fugit tenetur exercitationem quasi a rerum doloribus</p>
                    <div className="p-2 flex flex-row justify-between flex-wrap">
                        <p className="bg-gray-400 rounded-xl py-1 px-2">Javascript</p>
                        <p className="bg-gray-400 rounded-xl py-1 px-2">HTML</p>
                        <p className="bg-gray-400 rounded-xl py-1 px-2">CSS</p>
                    </div>
                    <div className="flex flew-row justify-center p-3">
                        <button className="flex flew-row me-2 py-2 px-3 bg-cyan-800 rounded-md"><img src="github-48.png" alt="github icon" width={22} className="me-2" /> Git</button>
                        <button className="ms-2 py-2 px-3 bg-cyan-800 rounded-md">Demo</button>
                    </div>
                </div>
                <div className="bg-red-400 p-3 rounded-2xl border border-gray-400 w-xs hover:border-purple-600 hover:scale-103 transition delay-50 duration-300 ease-in-out">
                    <h5 className="py-2 text-lg">Netflix with React</h5>
                    <img src="netflix-preview.png" alt="spotify-preview" className="rounded-2xl w-full h-72" />
                    <p className="py-3">team effort Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur fugit tenetur exercitationem quasi a rerum doloribus</p>
                    <div className="p-2 flex flex-row justify-between flex-wrap">
                        <p className="bg-gray-400 rounded-xl py-1 px-2">Javascript</p>
                        <p className="bg-gray-400 rounded-xl py-1 px-2">React</p>
                        <p className="bg-gray-400 rounded-xl py-1 px-2">Bootstrap</p>

                    </div>
                    <div className="flex flew-row justify-center p-3">
                        <button className="flex flew-row me-2 py-2 px-3 bg-cyan-800 rounded-md"><img src="github-48.png" alt="github icon" width={22} className="me-2" /> Git</button>
                        <button className="ms-2 py-2 px-3 bg-cyan-800 rounded-md">Demo</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection