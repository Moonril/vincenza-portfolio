const Banner = function () {

    const today = new Date()

    const fullDate = today.toLocaleDateString('en-GB', { 
        year: "numeric",   
        month: "long",     
        day: "numeric",
    })

    return(
        <section className="text-white font-medium flex flex-row justify-end items-center p-3 gap-2">
            {/* <p>{fullDate}</p> */}
            <div className="group relative">
                <div className="rounded-full aspect-square w-15 border-3 text-orange-800 overflow-hidden">
                    <img src="yellow-leaves.jpg" alt="" className="w-full h-full object-cover scale-150" />
                </div>
                
                <p className="absolute right-full top-1/3 mr-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">{fullDate}</p>
            </div>
            {/* <div className="bg-[url('yellow-leaves.jpg')] rounded-full py-4 px-3 border-3 border-white overflow-hidden text-black">
                <p>{fullDate}</p>
            </div> */}
        </section>
    )
}

export default Banner