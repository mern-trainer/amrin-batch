import "./Hero.css"

const Hero = () => {
    return <div className="hero-container">
        <video src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" autoPlay muted loop></video>
        <div className="content">
            <h4>A new era for safety</h4>
            <h3>Does how you feel< br/>affect how you drive?</h3>
            <button className="btn">Learn More</button>
        </div>
    </div>
}

export default Hero