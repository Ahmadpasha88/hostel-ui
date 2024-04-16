// import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import { FaRegUserCircle } from "react-icons/fa";
// import { CgMenuGridR } from "react-icons/cg";
// import "./index.css";
// import "@fontsource/libre-baskerville"; // Defaults to weight 400
// import "@fontsource/libre-baskerville/400.css"; // Specify weight
// import "@fontsource/libre-baskerville/400-italic.css"; // Specify weight and style



// const Header = () => {

//   return (
//     <div className="m-0 p-0 text-dark">
//       <Navbar
//         className="m-0 p-0 py-4"
//         expand="lg"
//         // style={{ backgroundColor: "#EFDDD9" }}
//       >
//         <Container className="py-0 my-0 row m-auto header-font-color">
//           <Navbar.Brand className="col-6 pt-0" href="/">
//             <div className="d-flex align-items-center col-2 col-lg-6 header-font-color">
//               <img
//                 src="./1708533081895.jpg"
//                 width="70px"
//                 height="70px"
//                 className="p-0 rounded-circle m-0"
//                 alt="Logo"
//               />
//               <div className="ms-2">
//                 <h4 className="logo mt-4 logoFont">Mana Hostel</h4>
//                 <p className="slogon m-0 logoFont">
//                   Stay Smart. Stay Connected
//                 </p>
//               </div>
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             className="col-2"
//             style={{ color: "white", backgroundColor: "white" }}
//           />

//           <Navbar.Collapse className="col-2" id="basic-navbar-nav">
//             <Nav className="ms-auto logoFont options header-font-color">
//               <Nav.Item>
//                 <Link
//                   to="/login"
//                   className="nav-link text-decoration-none"
//                 >
//                   Login
//                 </Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link
//                   to="/register"
//                   className="nav-link text-decoration-none"
//                 >
//                   Register
//                 </Link>
//               </Nav.Item>
              
//               <Nav.Item>
//                 <Link
//                   to="/contact"
//                   className="nav-link text-decoration-none"
//                 >
//                   Contact Us
//                 </Link>
//               </Nav.Item>
//               {/* <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         <FaRegUserCircle className="fs-3"/>
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown> */}

//               <Nav.Item>
//                 <Link
//                   to="/hostelRegister"
//                   className="nav-link text-decoration-none"
//                 >
//                   Hostel Register
//                 </Link>
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;



import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import "./index.css";
import "@fontsource/libre-baskerville"; // Defaults to weight 400
import "@fontsource/libre-baskerville/400.css"; // Specify weight
import "@fontsource/libre-baskerville/400-italic.css"; // Specify weight and style

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`m-0 p-0  text-dark ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar
        className="m-0 p-0 py-4 bg-white shadow-sm"
        expand="lg"
        // style={{ backgroundColor: "#EFDDD9" }}
      >
        <Container className="py-0 my-0 row m-auto header-font-color nav-bg-mobile">
          <Navbar.Brand className="col-6 pt-0" href="/">
            <div className="d-flex align-items-center col-2 col-lg-6 header-font-color">
              <img
                src="./AppLogo.png"
                width="70px"
                height="70px"
                className="p-0 rounded-circle m-0"
                alt="Logo"
              />
              <div className="ms-2">
                <h4 className="logo mt-4 logoFont">ManaHostel</h4>
                <p className="slogon m-0 logoFont">
                  Stay Smart. Stay Connected
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="col-2"
            style={{ color: "white", backgroundColor: "white" }}
          />

          <Navbar.Collapse className="col-2" id="basic-navbar-nav">
            <Nav className="ms-auto  logoFont options header-font-color my-3">
              <Nav.Item>
                <Link
                  to="/login"
                  className="nav-link text-decoration-none blueText" 
                >
                  Login
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/register"
                  className="nav-link text-decoration-none blueText"
                >
                  Register
                </Link>
              </Nav.Item>
              
              {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaRegUserCircle className="fs-3"/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

              <Nav.Item>
                <Link
                  to="/hostelRegister"
                  className="nav-link text-decoration-none blueText"
                >
                  Hostel Register
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;






