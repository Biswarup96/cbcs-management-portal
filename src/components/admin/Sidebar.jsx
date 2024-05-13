import React from 'react'
import './style.css'

function Sidebar() {
  return (
    <div className='big-white sidebar p-2'>
      <div className='m-2'>
      
        <i className='bi bi-img-fill me-3 fs-4'></i>
        <span className='brand-name fs-4'>Admin</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2 my-1'>
        <i className='bi bi-speedometer2 fs-5 me-3'></i>
        <span className='fs-5'>Dashboard</span>
      </a>
      <a className='list-group-item py-2 my-1'>
        <i className='bi bi-house fs-5 me-3'></i>
        <span className='fs-5'>Home</span>
      </a>
      <a className='list-group-item py-2 my-1'>
        <i className='bi bi-book fs-5 me-3'></i>
        <span className='fs-5'>Add-Notice</span>
      </a>
      <a className='list-group-item py-2'>
        <i className='bi bi-plus fs-5 me-3'></i>
        <span className='fs-5'>Staffs</span>
      </a>
      <a className='list-group-item py-2'>
        <i className='bi bi-power fs-5 me-3'></i>
        <span className='fs-5'>Log-out</span>
      </a>






    
    </div>
  </div>
  )
}

export default Sidebar