import React from 'react';
import SockJsClient from 'react-stomp';

class Temp extends React.Component {
  constructor(props) {
    super(props);
  }

  sendMessage = (msg) => {
    this.clientRef.sendMessage('/topics/all', msg);
  }

  render() {
    return (
      <div>
        <SockJsClient url='https://i8a806.p.ssafy.io/apxi/ws' topics={['/topics/all']}
            onMessage={(msg) => { console.log(msg); }}
            ref={ (client) => { this.clientRef = client }} />
      </div>
    );
  }
}

export default Temp;