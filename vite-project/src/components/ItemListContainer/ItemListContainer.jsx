import React from 'react'

export const ItemListContainer = ({greeting= "This is a sample card component built with Bootstrap classes in React."}) => {
  return (
    <div className='container p-5'>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Bienvenidos a Panda CBD Store</h5>
        <p className="card-text">
        {greeting}
        </p>
      </div>
    </div>
    </div>
  )
}
