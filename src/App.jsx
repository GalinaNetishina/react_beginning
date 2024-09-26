import ShopItemFunc from "./components/ShopItemFunc"
import ShopItemClass from "./components/ShopItemClass"
import style from "./App.module.css"


const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
  <div className={style.container}>
    <div className={style['background-element']}>
    </div>
    <div className={style['highlight-window']}>
      <div className={style['highlight-overlay']}></div>
    </div>
    <div className={style.window}>
      <ShopItemFunc item={item} />
    </div>
    <div className={style.window}>
      <ShopItemClass {...item} />
    </div>
  </div>  
)}


export default App
