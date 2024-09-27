import style from "../App.module.css"
import PropTypes from 'prop-types'

export class Item{
    constructor(brand,
    title,
    description,
    descriptionFull,
    price,
    currency){
        this.brand = brand;
        this.title = title;
        this.description = description;
        this.descriptionFull = descriptionFull;
        this.price = price;
        this.currency = currency;
    }
  }

export default function ShopItemFunc({item}) {
    return (
    <div className={style["main-content"]}>
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className={style.description}>
        {item.descriptionFull}
        </div>
        <div className={style['highlight-window mobile']}><div className={style['highlight-overlay']}></div></div>
        <div className={style.divider}></div>
        <div className={style['purchase-info']}>
            <div className={style.price}>{item.currency}{item.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )}

    ShopItemFunc.propTypes = {
        item: PropTypes.instanceOf(Item)
    }

