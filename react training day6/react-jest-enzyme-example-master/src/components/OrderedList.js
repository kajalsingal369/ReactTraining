import React from 'react'
import OrderedOptionList from './OrderedOptionList'
function OrderedList(props){
    const {options}=props
    if(!options.length){
        return <span className='empty'>No option list</span>
    }
    return(
        <ol>
            {options.map(option=><OrderedOptionList key={option} value={option}></OrderedOptionList>)}
        </ol>
    )
}
 OrderedList.defaultProps={
     options:[]
 }
 export default OrderedList;