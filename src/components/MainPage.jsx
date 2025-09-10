import { Element } from 'react-scroll'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import Particles from './Particles';
import SkillSection from './SkillSection';

const MainPage = function () {
    return (
        <section className="relative min-h-screen bg-black text-center overflow-hidden z-0">
            <div className="absolute inset-0 -z-10 w-full h-full">
                <Particles
                    particleColors={['#f2233a', '#f99768']}
                    particleCount={1300}
                    particleSpread={5}
                    speed={0.03}
                    particleBaseSize={90}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <Element name='about'><AboutSection /></Element>
            <Element name='projects'><ProjectSection /></Element>
            <Element name='tech'><SkillSection /></Element>

        </section>
    )
}
export default MainPage