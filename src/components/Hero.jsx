import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumai_logo" className="h-32 w-64 object-contain" />
            <button
                type="button"
                onClick={() => window.open('https://github.com/gurxt/sumai')}
                className='red_gradient_btn'
            >
                Github
            </button>
        </nav>
        <h1 className="head_text">
            Summarize Articles with <br />
            <span className="red_gradient">
                OpenAI GPT-4
            </span>
        </h1>
    </header>
  )
}

export default Hero
