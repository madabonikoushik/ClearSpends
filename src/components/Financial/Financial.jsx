import { iconsImgs } from "../../utils/image"

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Financial Advice</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c8-content">
            <p className="text text-silver-v1">Consider Warren Buffett's advice: "Never invest in a business you cannot understand." Think about the companies that provide the products and services you, your family, and your friends use frequently or daily. </p>
        </div>
    </div>
  )
}

export default Financial