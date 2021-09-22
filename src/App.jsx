import {useState, useCallback} from 'react'
import CartList from './components/cats/CartList'
import Form from './components/cats/Form'
import {fetchUser} from './utils'
import {FullSpinner} from './styles/app'

function App() {
   const [items, setItems] = useState([])
   const [status, setStatus] = useState('idle')
   const [error, setError] = useState(null)

   const addItem = async userName => {
     if(items.find(v => v.login === userName)){
       setError({message: `user ${userName} already exists`})
       return;
     }
      setStatus('pending')
      setError(null)
     fetchUser(userName)
      .then(
        item => {
          setItems(x => [...x, item])
          setStatus('resolved')
        },
        error => {
          setError(error)
          setStatus('rejected')
        }
      ) 
}

const deleteItem = useCallback(id => {
  if(!window.confirm('Are you sure?')) {
    return false;
  }
  setItems(items => items.filter(v => v.id !== id))
}, [])

  return (
    <div className="container">
      <Form isDisabled={status === 'pending'}  addItem = {addItem} />
      {status === "pending" && <FullSpinner />}
      {error && <h1>{error.message.toString()}</h1>}
      <CartList deleteItem={deleteItem}  items={items} />
    </div>
  )
}

export default App
