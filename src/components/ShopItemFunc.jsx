import style from "../App.module.css"
import PropTypes from 'prop-types'

class Item{
    brand
    title
    description
    descriptionFull
    price
    currency
  }

export default function ShopItemFunc(props) {
    const {brand, title, description, descriptionFull, price, currency} = props.item
    return (
    <div className={style["main-content"]}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={style.description}>
        {descriptionFull}
        </div>
        <div className={style['highlight-window mobile']}><div className={style['highlight-overlay']}></div></div>
        <div className={style.divider}></div>
        <div className={style['purchase-info']}>
            <div className={style.price}>{currency}{price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )}

    ShopItemFunc.propTypes = {
        item: PropTypes.instanceOf(Item)
    }

