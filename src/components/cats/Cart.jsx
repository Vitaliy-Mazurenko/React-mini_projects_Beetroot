

const Cart = ({item}) => {
    return (
        <div className="cart">
        <h3>{item.name}</h3>
        <p>{item.login}</p>
        <img src={item.avatar_url} alt={item.name}/>
         <button className="delete-button">Delete user</button>
    </div>
    )
}
// shape

export default Cart
