import './App.css';

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

function App() {
  return (
    <HeaderMenu/>    
  );
}

export default App;
