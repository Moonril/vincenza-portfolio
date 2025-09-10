const SkillSection = function () {
    return (
        <section className="text-white p-5 flex flex-row justify-center gap-2 my-4">
            <div className="border border-blue-900 rounded-2xl p-4 pe-20 text-start  bg-linear-to-br from-stone-900 to-stone-800">
                <h3 className="font-bold text-xl mb-2">Front End</h3>
                <p>Javascript</p>
                <p>Typescript</p>
                <p>React</p>
                <p>Redux</p>
                <p>Bootstrap</p>
                <p>Tailwind css</p>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 pe-20 text-start  bg-stone-950">
                <h3 className="font-bold text-xl mb-2">Back End</h3>
                <p>Java</p>
                <p>Spring</p>
                <p>PostgreSQL</p>
            </div>
        </section>
    )
}

export default SkillSection