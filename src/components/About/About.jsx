import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="about-me">
      <h2 className="about-title">About me</h2>
      <p>Hi there! My name is Cassiano and I'm originally from Brazil and this is my story.</p>
      <br />
      <p> Back in 2006 I started computer science... Wait a minute! Didn't you just say in the home page that you are self taught? in short, mostly yes. I did start computer science, but I never finished it as I decided to change degrees to Economics.</p>
      <br />
      <p>Long story short, I was young and dumb and decided to pursue a degree in Economics because I landed a job in a bank. Skip a couple of years, I graduate and decide to move to New Zealand.</p>
      <br />
      <p>We're in 2014 now and for the next 8 years I worked in hospitality. From washing dishes, on my first week in NZ, to becoming a Regional Manager a couple of years ago. But the thing is, I really had come back to the dream of my younger years of becoming a software developer.</p>
      <br />
      <p>During this past 8 years I have been studying on an off, web dev, algorithms and data structures, python, javascript, etc, but now I am taking this more seriously than ever. So I made a decision, I decided to quit my job 6 months ago and focus on learning as much as I could. </p>
      <br />
      <p>Finally I think I'm ready! I have a full grasp on the fundamentals and can apply my knowledge in a practical way. So without further ado, here is the list of languages, frameworks and technologies I'm skilled at:</p>
      <ul className="skills">
        <li>Python</li>
        <li>C#</li>
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>Git and Github</li>
        <li>React, jQuery and Bootstrap</li>
        <li>mySQL and MongoDB</li>
        <li>Linux - Ubuntu, Debian and Kali</li>
        <li>Dabbed a bit with Unity</li>
      </ul>

    </div>
  )
}

export default About