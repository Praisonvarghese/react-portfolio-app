import "./productlist.css"
import Product from '../product/Product'
import Img2 from "../../img/project2.png"
import Img1 from "../../img/project1.png"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire .It's Praise</h1>
          <p className="pl-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dignissimos ad et ratione ipsam culpa, delectus fugiat hic autem eligendi!</p>
        </div>
        <div className="pl-list">
          <Product img={Img2} repo="https://praisonvarghese.github.io/real-estate-project/" />
          <Product img={Img1} repo="https://praisonvarghese.github.io/real-estate-project/" />
        </div>
    </div>
  )
}

export default ProductList