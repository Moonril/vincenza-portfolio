import { Element } from 'react-scroll'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'

const MainPage = function () {
    return (
        <section className="min-h-screen bg-black text-center">
            <Element name='about'><AboutSection /></Element>
            <Element name='projects'><ProjectSection /></Element>
            <Element name='tech'>tech</Element>
        </section>
    )
}
export default MainPage