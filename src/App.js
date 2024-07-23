import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import GroupListing from './components/GroupListing';
import GroupCreate from './components/GroupCreate';
import GroupDetail from './components/GroupDetail';
import GroupEdit from './components/GroupEdit';

function App() {
  return (
    <div className="App">
      <h1>Group Management App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GroupListing />}></Route>
          <Route path='/group/create' element={<GroupCreate />}></Route>
          <Route path='group/detail/:groupid' element={<GroupDetail />}></Route>
          <Route path='/group/edit/:groupid' element={<GroupEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
