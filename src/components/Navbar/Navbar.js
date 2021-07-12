import format from './Navbar.module.css'

const Navbar = () => {
    return (
      <div className = {format.Navbar}>
        <nav>
          <ul>
            <li>
            <a href="/" >Home</a>
            </li>
            <li>
              <a href="/" >About Me</a>
            </li>
            <li>
               <a href="/">Projects</a>
               </li>
               <li>
               <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;