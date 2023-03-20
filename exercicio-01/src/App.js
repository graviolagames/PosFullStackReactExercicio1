import './App.css';
import logo from './logo.png';


function HeaderMenu() {
  return (
    <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
      <li style={{ margin: '0 10px' }}>Topic 1</li>
      <li style={{ margin: '0 10px' }}>Topic 2</li>
      <li style={{ margin: '0 10px' }}>Topic 3</li>
      <li style={{ margin: '0 10px' }}>Topic 4</li>
    </ul>
  );
};

function AppHeader() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={logo} alt="Logo" style={{ height: 100 }} />
      </div>
      <div>
        <div style={{ flex: 1 }}>
          <HeaderMenu />
        </div>
        <div style={{ flex: 2 }}>
          <form style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Search" style={{ flex: 1, marginRight: 10 }} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}


function App() {
  return (
    <AppHeader/>    
  );
}

export default App;
