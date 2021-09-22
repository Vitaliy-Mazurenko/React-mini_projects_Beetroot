import CartList from './components/cats/CartList'
import items from './data'

function App() {
  return (
    <div className="container">
      <CartList items={items} />
    </div>
  )
}

export default App
