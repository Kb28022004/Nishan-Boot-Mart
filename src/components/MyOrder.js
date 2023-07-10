import React from 'react'
import { Button } from '../styles/Button'
import './Myorders.css'

const MyOrder = () => {
    const data=[{
        id:8547,
        Date:"20/02/2002",
status:'Delivered',
total:8500
    },
    {
    id:8547,
    Date:"22/08/2002",
status:'Cancelled',
total:8890
},
{
    id:8547,
    Date:"28/07/2002",
status:'On the way',
total:22500
}
]
  return (
    <div className='yourorders'>
<h1 className='mainhead1'>Your Orders</h1>
<table>
    <thead>
        <tr style={{backgroundColor:"cyan",fontSize:"15px",fontWeight:"bold"}}>
            <td>Order ID</td>
            <td>Date</td>
            <td>Status</td>
            <td>Total</td>
            <td>Action</td>
        </tr>
    </thead>
    <tbody>
        {data.map((element,index)=>{
            return (
                <tr key={index}>
                 <td>{element.id}</td>
                 <td>{element.Date}</td>
                 <td>

                  <p>
                        {element.status ==="Delivered" && <span className='greendot'></span>}
                        {element.status ==="Cancelled" && <span className='reddot'></span>}

                        {element.status ==="On the way" && <span className='yellowdot'></span>}

                        {element.status}
                        </p>
                    </td>

                 <td>{element.total}</td>
                 {/* <td>{element.Action}</td> */}
<td> <Button>View</Button>
{element.action} </td>
                </tr>
                
            )
        })}
    </tbody>
</table>
    </div>
  )
}

export default MyOrder