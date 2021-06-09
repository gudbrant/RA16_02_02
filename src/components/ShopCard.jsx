function ShopCard({card}) {

  return(
    <div key={card.name + card.color + card.price} className='card'>
      <h2 className='title'>{card.name}</h2>
      <h3 className='color'>{card.color}</h3>
      <img src={card.img} alt={`${card.name} ${card.color}`}/>
      <div className='price_add-to-cart'>
        <div className='price'>${card.price}</div>
        <button className='add-to-cart'>Add to cart</button>
      </div>
    </div>  
  )
}

export default ShopCard;