import ProductList from "./components/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";

export const URL = process.env.REACT_APP_SERVER_URL

function App() {
  return (
    <div className="app">
      <div className="product-container">
        <ProductList />
        {/* <TaskList/> */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
