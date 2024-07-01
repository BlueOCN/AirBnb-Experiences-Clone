import hero_img from '../assets/Group 77.png'

function Hero() {
    return (
        <section className="hero">
            <img className="hero--img" src={hero_img} alt="group_img"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero