import {useState} from 'react'
import CartList from './components/cats/CartList'
import Form from './components/cats/Form'
import {fetchUser, sleep} from './utils'
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
      await sleep();
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
  return (
    <div className="container">
      <Form isDisabled={status === 'pending'}  addItem = {addItem} />
      {status === "pending" && <FullSpinner />}
      {error && <h1>{error.message.toString()}</h1>}
      <CartList items={items} />
    </div>
  )
}

export default App
