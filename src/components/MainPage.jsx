import { Element } from 'react-scroll'

const MainPage = function () {
    return (
        <section className="min-h-screen bg-slate-500 text-center">
            <Element name='about'>about</Element>
            <Element name='projects'>projects</Element>
            <Element name='tech'>tech</Element>
        </section>
    )
}
export default MainPage