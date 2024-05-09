import React from 'react';
const YesNo = new Map([
  [true, 'YES 😱'],
  [false, 'nope'],
]);

const Hazard = ({ yes }) => {
  return <span className="hazard">{YesNo.get(yes)}</span>;
};

export default Hazard;