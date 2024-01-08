import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Introducing our latest must-have product! The UltimateXYZ - a versatile, 
                    high-quality item that promises to enhance your daily life. With cutting-edge features,
                     sleek design, and unbeatable performance, this product is a game-changer. Don't miss 
                     out - order yours today and experience the next level of innovation!</p>
            </div>

        </div>
    )
}

export default DescriptionBox