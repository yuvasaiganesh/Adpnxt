import { IoClose } from "react-icons/io5";
import OrdersTable from "../OrdersTable"



const OrdersTab=()=>{
    return(
        <div className="content">
        <div className="orderButton">
          <button className="order">Orders</button>
          <IoClose className="icons"/>
          
        </div>

        <div className="column1">
        <button className="order">Pending</button>
        <button>Accepted</button>
        <button>Awb Created</button>
        <button>Ready to Ship</button>
        <button>Shipped</button>
        <button>Completed</button>
        <button>Cancelled</button>
      </div>

      <div className="tableButton">
        <div className="column2">
        <div className="import"><button>Import Orders</button>
        <IoClose className="icons"/></div>
        
        <button className="tableButton disike">Accepted</button>
        <button className="tableButton disike">Print</button>
        </div>

        <div>
          <button className="refreshButton">Refresh</button>
        </div>

     </div>
     <OrdersTable/>
     </div>
    )
}

export default OrdersTab