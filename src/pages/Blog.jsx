import { Link } from 'react-router-dom';
import React from 'react';

export default function Blog () {
    const data = [
      {
        id: 1,
        name: "hari",
        details: "lives in kotesher"
      },
      {
        id: 2,
        name: "ram",
        details: "lives in boudha"
      },
      {
        id: 3,
        name: "sam",
        details: "lives in jorpati"
      },
    ]
  
    return (
      <div className="container">
        <div className="row">
          {data.map((item, index) =>
            <div key={index} className="p-1 col-lg-2 col-md-4 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.detail}
                  </p>
                  <Link to={'/blog/detail/${item.id}'} className="btn btn-primary">
                    Go somewhere {item.id}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }