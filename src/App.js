import logo from './logo.svg';
import './App.css';
import Pricecard from './pricecard';


function App() {
  let priceDetails = [
    {
      plan : "Free",
      price : 0,
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : "Single User",
          isDisabled : false
        },
        {
          itemName : "5GB Storage",
          isDisabled : false
        },
        {
          itemName : "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemName : "Community Access",
          isDisabled : false
        },
        {
          itemName : "Unlimited Private Projects",
          isDisabled : true
        },
        {
          itemName : "Dedicated Phone Support",
          isDisabled : true
        },
        {
          itemName : "Free Subdomain",
          isDisabled : true
        },
        {
          itemName : "Monthly Status Reports",
          isDisabled : true
        }
      ]
    },
    {
      plan : "Plus",
      price : 9,
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : "5 User",
          isDisabled : false
        },
        {
          itemName : "50GB Storage",
          isDisabled : false
        },
        {
          itemName : "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemName : "Community Access",
          isDisabled : false
        },
        {
          itemName : "Unlimited Private Projects",
          isDisabled : false
        },
        {
          itemName : "Dedicated Phone Support",
          isDisabled : false
        },
        {
          itemName : "Free Subdomain",
          isDisabled : false
        },
        {
          itemName : "Monthly Status Reports",
          isDisabled : true
        }
      ]
    },
    {
      plan : "Pro",
      price : 49,
      period : 'month',
      currency : "$",
      listItems : [
        {
          itemName : "Unlimited Users",
          isDisabled : false
        },
        {
          itemName : "150GB Storage",
          isDisabled : false
        },
        {
          itemName : "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemName : "Community Access",
          isDisabled : false
        },
        {
          itemName : "Unlimited Private Projects",
          isDisabled : false
        },
        {
          itemName : "Dedicated Phone Support",
          isDisabled : false
        },
        {
          itemName : "Free Subdomain",
          isDisabled : false
        },
        {
          itemName : "Monthly Status Reports",
          isDisabled : false
        }
      ]
    }
  ]

  return (

<section class="pricing py-5">
  <div class="container">
    <div class="row">

{

priceDetails.map((price) => {
return <Pricecard details={price}></Pricecard>
})


}



    </div>
    </div>
    </section>


  )
    
  
}

export default App;