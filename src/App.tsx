import React from 'react';

export const appRootId = 'App-root';

function App(): JSX.Element {
  return (
    <div data-testid={appRootId}>
      Hello world!
    </div>
  );
}

export default App;
