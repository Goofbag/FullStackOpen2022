import { useSelector, useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
    
    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      dispatch(filterChange(event.target.value))
    }

    const style = {
      marginBottom: 10
    }

    const filterValue = useSelector(state => state.filter)

    const dispatch = useDispatch()
  
    return (
      <div style={style}>
        filter <input type='text' value={filterValue} onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter