
import './App.css';
import {Navbar} from "./components/Navbar";
import { NavItem } from './components/NavItem';
import { DropdownMenu } from './components/DropdownMenu';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem link="Company"/>
        <NavItem link="Services">
            <DropdownMenu />
        </NavItem>
        <NavItem link="Products"/>
      </Navbar>
    </div>
  );
}

export default App;
