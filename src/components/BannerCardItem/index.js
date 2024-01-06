// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`banner-card-cont ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description"> {description}</p>
        <button className="showmore-btn" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
