import React from 'react';

const Card = (props) => {
    return (
      <div className="card mb-3 bg-info bg-gradient">
        <div className="card-body">
          <h5 className="card-title">{props.user.name}</h5>
          <h6 className="card-title ">{props.user.email}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{props.user.company.name}</h6>
          <p className="card-text">{props.user.website}</p>
        </div>
      </div>
    )
  }

export default Card;