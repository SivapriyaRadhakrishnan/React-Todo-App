import React from 'react'
import Nav from './Nav'

const Delete = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">id</label>
                    <input type="text" className="form-control" />
                    <button className="btn btn-danger">delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete