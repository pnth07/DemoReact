import React from 'react'
//React funtion component nhận props là tham số đầu vào của hàm component
export default function ProductRFC(props) {
    return (
        <div className="card text-white bg-primary">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt />
            <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    <p className="card-text">{props.price}</p>
            </div>
        </div>

    )
}
