import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BettrGrid, BettrList } from '../src';
import '../styles.css';

const App = () => {
  return (
    <div style={{padding: '20px'}}>
      <BettrGrid
        style={{ imageBackgroundColor: 'black' }}
        apiKey={'1bc66750-e79a-11ec-afff-fd0a2fbd177a'}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
