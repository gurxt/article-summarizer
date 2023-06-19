import Hero from './components/Hero'
import Demo from './components/Demo'

import './Application.css'

const Application = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                <Hero />
                <Demo />
            </div>
        </main>
    )
}

export default Application
