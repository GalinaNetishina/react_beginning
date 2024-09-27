import ShopItemFunc, {Item} from "./components/ShopItemFunc"
import ShopItemClass from "./components/ShopItemClass"
import style from "./App.module.css"


const item = new Item('Tiger of Sweden', 'Leonard coat', 'Minimalistic coat in cotton-blend',
   'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399, '£')


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
      <ShopItemClass item={item} />
    </div>
  </div>  
)}


export default App
