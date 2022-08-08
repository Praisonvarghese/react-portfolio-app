import "./intro.css"
import Me from "../../img/me.png"

export const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Praison Varghese</h1>
                <div className="i-tittle">
                    <div className="tittle-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Backend Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">MERN Stack Developer</div>
                        <div className="i-title-item">React Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet quia dolor magni eaque debitis? Aspernatur obcaecati error ut! Vero, ipsa! Esse ipsum, asperiores nobis eligendi assumenda culpa aut quod.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
             <img className="i-img" src={Me}></img>
        </div>
    </div>
  )
}
