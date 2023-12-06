import React from 'react'
import logo from '../logo.png'

function Footer() {
  return (
    <footer>
       <div className="logoCopy">
       <img src={logo} alt="" />
        <a href="https://www.linkedin.com/in/anish-chaurasia-985171227/" target='_blank'>@anish</a>
        <p>Copyright &copy; 2023. All Rights Reserved</p>
          
       </div>
        {/* <div class="footer-icon">
        
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
        </div> */}
    </footer>
  )
}

export default Footer