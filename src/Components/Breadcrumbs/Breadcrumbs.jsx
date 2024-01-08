import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
      HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name} <img src={arrow_icon}/>
    </div>
  )
}

export default Breadcrumbs