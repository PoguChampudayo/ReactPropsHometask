import React from 'react'


export const Listing = ({items}) => {
    const itemsList = items.map((item) => {
        if (item.MainImage) {
        return <li key={item.id} className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 50) +'...': item.title}</p>
                    <p className="item-price">{
                        item.currency_code === 'USD' ? '$' + item.price : 
                        (item.currency_code === 'EUR'? '€' + item.price: item.price + ' ' + item.currency_code)
                    }</p>
                    <p className={item.quantity <= 10 ? "item-quantity level-low": 
                    (item.quantity > 20? "item-quantity level-high" : "item-quantity level-medium")}>{item.quantity} left</p>
                </div>
               </li>
        }
    })
  return (
    <div className="item-list">
        {itemsList}
    </div>
  )
}
