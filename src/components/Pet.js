import React from 'react';
// throw new Error("lol")
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
