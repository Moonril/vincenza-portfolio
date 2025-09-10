import { Link } from "react-scroll"

const AboutSection = function () {
    return (
        <section className="min-h-screen flex flex-col justify-center p-20 items-center">
        {/* <section className="bg-[url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg')] min-h-screen flex flex-col justify-center p-20"> */}
            <div className=" rounded-2xl w-3xl p-3 text-white font-bold">
                <h1 className="text-5xl">Hi! I'm <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#C8005B] to-red-500">Vincenza</span></h1>
                <p>About a year and half ago I started helping some friends modify some .lua files, they were struggling to understand the code but it seemed very easy to me. After a while I decided to meddle with some HTML, CSS and JS for fun. and realised that this could be more than a little hobby. After a period of solo studying I decided to attend a bootcamp to better understand where this path could take me, this is the reason why I chose a Full-Stack course, I wanted to know more about the whole ordeal. Ultimately I did not betray my creative nature and stayed true to my affection for Front End development</p>
            </div>
            <Link to="projects" smooth={true} className="cursor-pointer hover:translate-y-2 transition duration-500 ease-in-out">
                <img src="https://img.icons8.com/?size=100&id=37218&format=png&color=ffffff" alt="arrow-down-icon" width={50} />
            </Link>
        </section>
    )
}

export default AboutSection