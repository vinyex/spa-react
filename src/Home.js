import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <img style={{width: '50%', height: '50p%'}} src={require('./img/react-jsx.jpg')} alt="" />
        <p>Selamat kamu berhasil masuk ke halaman Home ReactJS!</p>
      </div>
    );
  }
}
 
export default Home;