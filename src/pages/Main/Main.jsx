import { Navbar, Footer, Landing, About, Skills, Experience, Contacts, Projects, Services, Achievement } from '../../components'

function Main() {
    return (
        <>
            <Navbar />
            <main>
                <Landing />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Services />
                <Achievement />
                <Contacts />
            </main>
            <Footer />
        </>
    )
}

export default Main
