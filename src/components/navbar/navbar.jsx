// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Images/logo.png";
// import NavBarButton from "./navBarButton";

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light shadow-sm rounded-top fixed-top">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/">
//               <img
//                 style={{ width: 60, height: 40 }}
//                 className="img-fluid logo"
//                 src={logo}
//                 alt="logo"
//               />
//             </Link>
//           </li>
//           <li>
//             <Link to="/">
//               <NavBarButton buttonName="Home" />
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/games">
//               <NavBarButton buttonName="Games" />
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/products">
//               <NavBarButton buttonName="Products" />
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/posts/2024/2">
//               <NavBarButton buttonName="Posts" />
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/admin">
//               <NavBarButton buttonName="Admin" />
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <form className="d-flex col-4">
//         <input
//           className="form-control me-2 inp"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <Link to="/">
//           <NavBarButton buttonName="Search" />
//         </Link>
//       </form>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavBarButton from "./navBarButton";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Images/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <NavBarButton buttonName="Home" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/games"
                onClick={() => updateExpanded(false)}
              >
                <NavBarButton buttonName="Games" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/products"
                onClick={() => updateExpanded(false)}
              >
                <NavBarButton buttonName="Products" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/posts"
                onClick={() => updateExpanded(false)}
              >
                <NavBarButton buttonName="Posts" />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin"
                onClick={() => updateExpanded(false)}
              >
                <NavBarButton buttonName="Admin" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/chandanlog/router-app-master"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
