import React from 'react'

export const Cards = (props) => {
   
    return (
        <div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={props.img1}
       className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.titulo1}</h5>
       
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={props.img2}
       className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.titulo2}</h5>

      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={props.img3}
      className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.titulo3}</h5>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
      
        </div>
    )
}

export default Cards;