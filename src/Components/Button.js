import React from 'react';

export default function Button({ text, color, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color, marginLeft: '0.5em' }}>
      {text}
    </button>
  );
}
