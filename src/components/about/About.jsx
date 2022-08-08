
import "./about.css"

export const 
About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://media.istockphoto.com/photos/programmers-and-developer-teams-are-coding-and-developing-software-picture-id1335081545?b=1&k=20&m=1335081545&s=170667a&w=0&h=ah5xfqQvwkoEZEW0xqPVE4W-ERcDdM73YhQDlBk5zV0=" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, laboriosam.
            </p>
            <p className="a-desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus quia, quam placeat obcaecati odio culpa commodi tempore voluptatibus. Eius reiciendis eos molestias accusantium ducimus iusto accusamus molestiae, modi quaerat, soluta nemo inventore, ea deserunt.
            </p>
            <div className="a-award">
                <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/award.png" alt="" className="award-img" />
                <div className="a-awards-text">
                    <h4 className="a-award-title">International Design Award</h4>
                    <p className="a-award-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minus voluptatem atque soluta optio iusto! Labore harum nulla omnis quos.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
