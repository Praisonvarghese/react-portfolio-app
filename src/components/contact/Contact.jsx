import "./contact.css"

const Contact = () => {
  return (
    <div className="c">
        <div className="c-bg">
        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/phone.png" alt="" className="c-icon" />
                    +1 1234 567 78
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/email.png" alt="" className="c-icon" />
                    praison@gmail.com
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/address.png" alt="" className="c-icon" />
                    7th Avenue ,North America
                    </div>
                </div>
            </div>
            <div className="c-right">
                <h1>Let's Connect Now</h1>
                <div className="wrapper">
                    <input type="text" name="name" placeholder="Enter your name here" className="text-box" />
                    <input type="text" name="name" placeholder="Email address" className="text-box" />
                    <textarea name="message" id="" placeholder="Message here.." cols="50" rows="10" class="text-area"></textarea>
                      <button class="sbmt-btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact