import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from '../src';
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  return (
      <div>
        <Grid style={{imageBackgroundColor: 'black'}} apiKey={'1bc66750-e79a-11ec-afff-fd0a2fbd177a'} />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
