import React from 'react';
import Nav from './Nav';

function Home() {
  return (
    <div className='px-3'>
      <Nav/>
      <div className='container-fluid'>
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>Add</h3>
                <p className='fs-5'>Students</p>
                <p className='fs-6'>Sem-2</p>
              </div>
              <i className='bi bi-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>Add</h3>
                <p className='fs-5'>Students</p>
                <p className='fs-6'>Sem-3</p>
              </div>
              <i className='bi bi-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>Add</h3>
                <p className='fs-5'>Teachers</p>
                <p className='fs-6'>-------------</p>
              </div>
              <i className='bi bi-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>Upgrade</h3>
                <p className='fs-5'>Student</p>
                <p className='fs-6'>--------</p>
              </div>
              <i className='bi bi-arrow-up-circle p-3 fs-1'></i>
            </div>
          </div>
         
        </div>
      </div>
    <table class="table table-striped">
       <table class="table">
       <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</table>
      
    </div>
  )
}

export default Home