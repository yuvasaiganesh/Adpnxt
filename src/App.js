import OrdersTab from "./Components/OrdersTab";
import { MdOutlineBrightness2 } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav >
      <img  src="https://cdn3.vectorstock.com/i/1000x1000/75/47/letter-s-logo-or-symbol-icon-vector-4797547.jpg"alt="logo"/>
        <div className="topSection">
          <MdOutlineBrightness2 className="icons"/>
          <FaRegBell className="icons"/>
        </div>
       
      </nav>
      <div className="body">
      <aside>
        <button>DashBoard</button>
        <button className="highlights">Orders</button>
        <button>Shipping</button>
        <button>Channel</button>
      </aside>
      <OrdersTab/>
      

    
      </div>
      </div>
    
  );
}

export default App;
