import format from './Navbar.module.css'

const Navbar = () => {
    return (
      <div className = {format.Navbar}>
        <nav>
          <ul>
            <li>
              <a href="/#about" >About Me</a>
            </li>
            <li>
               <a href="/#projects">Projects</a>
               </li>
               <li>
               <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;