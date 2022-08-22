import { useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { GameContext } from "./../utilities/gameContext";
import { AuthContext } from "./../utilities/AuthProvider";

function Navbars() {
  const myRef = useRef(null);
  const { currentUser, logOut } = useContext(AuthContext);
  const { gameCart } = useContext(GameContext);

  function loGout() {
    logOut();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="flex items-center p-10">
        <Navbar.Brand className="text-3xl font-bold" href="#home ">
          Games
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-5">
            <Link
              ref={myRef}
              className="bg-slate-600 px-5 py-2 rounded-xl text-xl text-white font-bold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="bg-slate-600 px-5 py-2 rounded-xl text-xl text-white font-bold"
              to="/newgame"
            >
              Add new game
            </Link>
            {currentUser != null ? (
              <Link
                onClick={loGout}
                className="bg-slate-600 px-5 flex items-center py-2 rounded-xl text-xl uppercase text-white font-bold"
                to="/login"
              >
                Log Out
                <MdLogout className="ml-1 h-7 w-7" />
              </Link>
            ) : (
              <Link
                className="bg-slate-600 px-5 py-2 rounded-xl text-xl text-white font-bold uppercase"
                to="/login"
              >
                Log in
              </Link>
            )}
            <Link to={"/cart"}>
              <div className="relative">
                <AiOutlineShoppingCart className="h-10 w-10 text-slate-700 cursor-pointer duration-200 active:scale-95" />
                <span
                  style={{ display: gameCart.length > 0 ? "block" : "none" }}
                  class="inline-flex items-center absolute top-[-5px] right-2 left-6 justify-center px-3 pr-4 py-1  text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
                >
                  {gameCart.length}
                </span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
