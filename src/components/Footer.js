import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
  render() {
    return(
      <footer class="footer-distributed">

  			<div class="footer-left">

  				<h3>Transport N.S.W. Open Data: <span>Realtime Dashboard</span></h3>

  				<p class="footer-links">
  					<a href="#">Home</a>
  			    |
  					<a href="https://github.com/derekw26/tripping">Github-Client</a>
  					|
  					<a href="https://github.com/BernardoMar/sinatraApiKey">Github-Server</a>
  				</p>

  				<p class="footer-company-name">General Assembly © 2021</p>



  			</div>

  			<div class="footer-right">

  				<p>ABOUT OUR PROJECT</p>
          <p>This project was completed as part of General Assembly's Software Engineering Immersive Program as part of Project 2 (SEI48). Further information such as the code and readme files can be obtained via the GitHub links.</p>

  				{/* <form action="#" method="post">

  					<input type="text" name="email" placeholder="Email">
  					<textarea name="message" placeholder="Message"></textarea>
  					<button>Send</button>

  				</form> */}

  			</div>

  		</footer>
    )
  }
}
export default Footer
