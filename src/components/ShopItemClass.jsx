import style from "../App.module.css"
import {Component} from 'react'
import PropTypes from 'prop-types'


export default class ShopItemClass extends Component {
    render() {
    const {brand, title, description, descriptionFull, price, currency} = this.props.item  
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
    }

ShopItemClass.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        currency: PropTypes.oneOf(['$', '£', '¥', '€', '₽']),
        price: PropTypes.number
    })
}
