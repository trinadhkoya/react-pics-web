import React from 'react';
import ReactDOM from 'react-dom'
import App from "./components/App";

class Driver extends React.Component {

   render() {
      return(
          <App/>
      )
   }
}

ReactDOM.render(<Driver/>,document.getElementById('root'))
