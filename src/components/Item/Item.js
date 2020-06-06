import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="item__name">{item.name}</div>
      <div className="item__desc">{item.description}</div>
      <div className="item__counts">
        <div className="item__stars">Stars: {item.stars}</div>
        <div className="item__forks">Forks: {item.forks}</div>
      </div>
    </div>
  );
};

export default Item;
