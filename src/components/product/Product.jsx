import "./product.css"
import Img from "../../img/project2.png"

const Product = ({img,repo}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={repo} target="_blank" className="">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product