import hydroImg from '../assets/hydro 2.png'
import ytImg from '../assets/ytstats.png'
import sophieGif from '../assets/ssophie.gif'
import pandaGif from '../assets/panda sanctuary.gif'
import journalGif from '../assets/the journal.gif'


export default function ProjectsContainer() {

    return (<section className="projects">

        <h3>Projects</h3>
        <br />

        <div className="project">
            <section className="img-title">
                <div className="title">
                    <h4>Ontario Hydro Plan Comparison</h4>
                    <h6>Flask | Python | Pandas | SQLite | JavaScript | Plotly Charting Library</h6>
                    <div className="links">
                        <a href="https://hydrochart-vuonglon.pythonanywhere.com/">Live Site</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src={hydroImg} alt="" />
                </div>
            </section>

            <div className="description">
                <h6>Overview</h6>
                <p>
                    {/* <!-- A full-stack Flask application hosted on PythonAnywhere.com that visualizes the daily cost of
                    all three energy plans based on a user’s Green Button usage data. XML data is sent to a Flask
                    REST API backend where it is loaded and transformed in Python using Pandas and finally inputted
                    into the Plotly graphing library to visualize and gain insights on the data. --> */}
                    A full-stack web app that helps Ontario residents compare electricity plans using their real usage
                    data.
                    Users upload their Green Button XML files, and the app processes the data with Pandas and displays
                    cost breakdowns using Plotly.
                    </p>
                <br />
                <h6>Project motivation</h6>
                <p>
                    The motivation for this project came from a conversation with a friend about the energy plans
                    offered by our local electricity provider, and which of the three available plans would save
                    them the most money. Though I found no difference between the plans in my case, my friend
                    happily switched to the
                    more cost-effective plan for them (as it allowed them to charge their car for cheaper at night
                    🌚⚡).
                </p>
            </div>
        </div>

        <div className="project">
            <section className="img-title">
                <div className="title">
                    <h4>YouTube Stats Collector</h4>
                    <h6>Flask | Python | JavaScript | YouTube API</h6>
                    <div className="links">
                        <a href="https://ytstats-vuonglon.pythonanywhere.com/">Live Site</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src={ytImg} alt="" />
                </div>
            </section>

            <div className="description">
                <h6>Overview</h6>
                <p>
                        {/* <!-- A Flask application hosted on PythonAnywhere.com that collects a YouTube channel/playlist
                        statistic for exploratory analysis. URL links to YouTube channels/playlists are sent to a Flask
                        REST
                        API backend, where Python further parses the required parameters to make requests to the
                        YouTube API for channel/playlist data. This data is then structured into a CSV file for download
                        and can be used for visualization exercises, ML training data or other data science exercises. --> */}
                        A tool for collecting the metrics of every video in a YouTube playlists or channel. Simply paste
                        the URL to the playlist/channel, and the app will return a CSV of metric data gathered from the
                        YouTube API -
                        ready to be used in visualization exercises or machine learning datasets.
                    </p>
                <br />
                <h6>Project motivation</h6>
                <p>
                    While working on a data visualization project, I needed video metrics from a playlist with
                    hundreds of videos in it. Finding no tool to automate this process, and
                    faced with the possibility of having to repeat this process for a different playlist
                    <b><i>again</i></b>, I
                    resorted to create this app.
                </p>
            </div>
        </div>


        <div className="project">
            <section className="img-title">
                <div className="title">
                    <h4>Design to Code Conversions (PSD to HTML/CSS)
                    </h4>
                    <h6>HTML | CSS | JavaScript | SCSS</h6>
                    <div className="links">
                        <ul>
                            <li>
                                <a
                                    href="https://staedtlernorica.github.io/long-vuong-project-one/index.html">Sophie</a>
                            </li>
                            <li>
                                <a href="https://staedtlernorica.github.io/panda-sanctuary/">Panda Sanctuary</a>
                            </li>
                            <li>
                                <a href="https://staedtlernorica.github.io/Juno-Project-1/">The Journal</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="img-container carousel-container">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="13000">
                                <img src={sophieGif} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Sophie</h5>
                                    {/* <!-- <p>Some representative placeholder content for the second slide.</p> --> */}
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="8000">
                                <img src={pandaGif} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Panda Sanctuary</h5>
                                    {/* <!-- <p>Some representative placeholder content for the first slide.</p> --> */}
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="8000">
                                <img src={journalGif} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>The Journal</h5>
                                    {/* <!-- <p>Some representative placeholder content for the third slide.</p> --> */}
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>

            <div className="description">
                <h6>Overview</h6>
                <p>
                    Some of my old "design to code" mock-ups for classes during my time at
                    Juno College.
                </p>
            </div>
        </div>



    </section>)
} 