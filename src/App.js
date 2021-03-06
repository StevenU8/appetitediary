import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

import Routes from "./Routes"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Recipes from "./Pages/Recipes";
import Post from "./Pages/Post";

import SocialMedia from "./Components/SocialMedia";
import Gadgets from './Pages/Gadgets';

export default function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col></Col>
          <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1>appetitediary</h1>
          </Col>
          <Col className="justify-content-end" style={{display:"flex", alignItems:"center"}}>
            <SocialMedia/>
          </Col>
        </Row>

        <Row>
          <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={`${Routes.Home}`}>Home</Nav.Link>
                  <Nav.Link href={`${Routes.Recipes}`}>Recipes</Nav.Link>
                  <Nav.Link href={`${Routes.Gadgets}`}>Gadgets</Nav.Link>
                  <Nav.Link href={`${Routes.About}`}>About Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <Switch>
        <Route path={Routes.About} component={About}/>
        <Route path={Routes.Recipes} component={Recipes}/>
        <Route path={Routes.Post} component={Post}/>
        <Route path={Routes.Gadgets} component={Gadgets}/>
        <Route path={Routes.Home} component={Home}/>
      </Switch>
    </Router>
  );
}