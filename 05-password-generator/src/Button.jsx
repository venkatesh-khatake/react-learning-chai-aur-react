import React from 'react';

const Button = React.memo(({ onClick, label }) => {
  console.log(`🔁 Button Re-rendered: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

export default Button;
