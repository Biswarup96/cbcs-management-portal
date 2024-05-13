import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import '../../../node_modules/bootstrap-icons/font/'
import Home from './Home';
import Sidebar from './Sidebar';

function Admin() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
         <Sidebar/>
        </div>
        <div className='col'>
          <Home/>
        </div>
      </div>
     </div>
  )
}

export default Admin