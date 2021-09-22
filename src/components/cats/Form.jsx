import {useState} from 'react'
import PropTypes from 'prop-types'
import {Button} from '../../styles/app'

const Form = ({addItem, isDisabled}) => {
  const [val, setVal] = useState('')

  const handleChange = ({target}) => setVal(target.value)

    const handleSubmit = e => {
        e.preventDefault();
        addItem(val);
        setVal('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-box">
          <div className="form-box__item">
              <input type="text" value={val} onChange={handleChange}/>
              <Button disabled={isDisabled}>Add user</Button>
          </div>
        </div>
       </form>
    )
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Form
