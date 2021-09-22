import PropTypes from 'prop-types'
import Cart from './Cart'

const CartList = ({items}) => {
    return (
        <div className="cart-box">
            {items.map(item =><Cart key={item.id} item={item} /> )}
        </div>
    )
}


CartList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

CartList.defaultProps = {
    items: []
}


export default CartList
