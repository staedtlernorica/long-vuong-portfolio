import headshot from '../assets/headshot.png'
import resume from '../assets/resume.pdf'

export default function IntroHeader() {

    return (
        <>
            <section className="intro">
                <div className="blurb">
                    <img src={headshot} alt="Picture of me"/>

                        <div className="greetings-socials">

                            <h1>Hey, I'm Long 👋</h1>
                            <div className="socials">
                                <a href="https://github.com/staedtlernorica">GitHub</a>
                                <a href="https://www.linkedin.com/in/vuonglong/">LinkedIn</a>
                                <a href={resume} target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>

                            </div>
                        </div>
                </div>
                <div className="about " id="about">
                    <p>
                        I'm a full-stack developer with experience building software solutions in cross-functional team
                        environments.
                        I'm passionate about applying my skills
                        to tackle real world challenges.
                    </p>
                    <p>
                        Currently open to new opportunities, particularly in back-end development. I'm interested in solving
                        the challenges of building reliable, efficient and scalable infrastructure.
                    </p>
                    <p>
                        When not coding, I love playing soccer, cooking and exploring new cafes in the city.
                    </p>
                </div>

            </section>
        </>
    )

} 