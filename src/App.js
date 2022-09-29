import './App.css';
import {Header} from "./Header";
import {BestSallers} from "./BestSallers";
import {Route, Routes} from "react-router-dom";
import {Product} from "./Product";

function App() {
  return (
    <div className='appContainer'>
      <Header />
        <Routes>
          <Route path = '/products' element={<BestSallers />}/>
          <Route path = '/products/:id' element={<Product />}/>
        </Routes>
    </div>
  );
}

export default App;
