import React from 'react'
// import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Navbar />        
            <Landing />
            <About />
                        <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
