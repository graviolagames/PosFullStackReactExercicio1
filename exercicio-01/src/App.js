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

function TopBar() {
  return (
    <div>
      <ul style={{ display: 'flex',justifyContent: 'center', listStyleType: 'none', padding: 0,border: '1px solid rgba(0, 0, 0,0.25)'}}>
        <li style={{ margin: '0 10px' }}>Section 1</li>
        <li style={{ margin: '0 10px' }}>Section 2</li>
        <li style={{ margin: '0 10px' }}>Section 3</li>
        <li style={{ margin: '0 10px' }}>Section 4</li>
      </ul>
    </div>
  );
};

function SideBar() {
  const sections = [];
  for (var i=0;i< 12;i++){
    {sections[i] = 'Section ' + i};
  }
  const renderListOfSections = (sections)=>{
    return sections.map(section => <p>{section}</p>)
  }
  return (
    <div style={{border: '1px solid rgba(0, 0, 0,0.25)'}}>
        {renderListOfSections(sections)}
    </div>
  );
}


function AppHeader() {
  return (
    <header style={{ display: 'flex', alignItems: 'center',border: '1px solid rgba(0, 0, 0,0.25)'}}>
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
    <SideBar/>    
  );
}

export default App;
