import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = ({ notificationNumber = 1 }) => {
  return (
    <div className="position-relative d-inline-block">
    <i className={`material-icons`} style={{ fontSize: '24px' }}>
    <ShoppingCartIcon />
    </i>
    {notificationNumber > 0 && (
      <div
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {notificationNumber}
      </div>
    )}
  </div>
  )
}
