import PropTypes from 'prop-types'
import Cart from './Cart'

const CartList = ({items, deleteItem}) => {
    return (
        <div className="cart-box">
            {items.map(item =><Cart deleteItem={deleteItem} key={item.id} item={item} /> )}
        </div>
    )
}


CartList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteItem: PropTypes.func.isRequired
}

CartList.defaultProps = {
    items: []
}


export default CartList
