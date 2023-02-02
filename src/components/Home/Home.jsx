import React from "react";
import "./home.css"
import Hero from "../Hero/Hero"
import Projects from "../Projects/Projects";
import data from "../../data"

const Home = () =>{
    const projects = data.map(data => <Projects key={data.id} {...data} />)
    return (
        <div>
            <Hero />
            <section className="cards-list">
            {projects}
            </section>
            <section className="sub-section-contact" id="contact">
            <h2>Contact me</h2>
            <p><a className="mail" href="mailto:cassiano@cjsantos.me">cassiano@cjsantos.me</a></p>
            </section>
        </div>

    )
}

export default Home;