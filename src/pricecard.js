import React from "react"


function Pricecard(props){
return (
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.details.plan}</h5>
            <h6 class="card-price text-center">{props.details.currency}{props.details.price}<span class="period">/{props.details.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
              {
                  props.details.listItems.map((item) => {
                      return !item.isDisabled ? 
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{item.itemName}</li> :
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{item.itemName}</li>
                  })
              }
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
)
}


export default Pricecard;