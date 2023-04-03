import React from 'react'
import xmark from '../../../assets/icons/x.svg'
import logo from '../../../assets/images/Logo.svg'

export default function ModalTeam({
  shown,
  close,
  name,
  image,
  position,
  contentModal1,
  contentModal2,
  contentModal3,
  contentModal4,
}) {
  return shown ? (
    <div
      className="modal"
      onClick={() => {
        close()
      }}
    >
      <div
        className={
          shown ? 'modal-content-team open' : 'modal-content-team close'
        }
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="x-icon" onClick={close}>
          <img src={xmark} alt="x-icon" />
        </div>
        <div className="modal-team">
          <div className="modal-team-content">
            <h6>{position}</h6>
            <h2>{name}</h2>
            {contentModal1 && <p>{contentModal1}</p>}
            {contentModal2 && <p>{contentModal2}</p>}
            {contentModal3 && <p>{contentModal3}</p>}
            {contentModal4 && <p>{contentModal4}</p>}
          </div>
          <div className="modal-team-image">
            <img src={image} alt="item" />
          </div>
        </div>
      </div>
    </div>
  ) : null
}
