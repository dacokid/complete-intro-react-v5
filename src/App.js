import React from 'react';
import { render } from 'react-dom';
import Pet from './components/Pet';

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
