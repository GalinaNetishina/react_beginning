import style from "../App.module.css"
import {Component} from 'react'
import PropTypes from 'prop-types'


export default class ShopItemClass extends Component {
    render() {
    const item = this.props  
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
    }

ShopItemClass.propTypes = {
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.symbol,
    price: PropTypes.number
}
