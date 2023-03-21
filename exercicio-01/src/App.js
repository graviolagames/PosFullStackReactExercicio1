import './App.css';
import logo from './logo.png';
import thumbPlaceholder from './thumbPlaceholder.jpg';

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
  for (var i=1;i<= 12;i++){
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

function AppBody(){
  const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at sapien ut neque rhoncus lobortis. Fusce vel libero in quam tempor dignissim. Nulla facilisi. Duis sit amet sollicitudin elit. Aliquam eget dolor in sem tristique tristique. Sed congue justo a turpis laoreet malesuada. Nam eget enim ac odio mollis ultrices. Mauris interdum ultrices felis a consequat. Donec cursus massa a est pulvinar, ut tincidunt quam accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at sapien ut neque rhoncus lobortis. Fusce vel libero in quam tempor dignissim. Nulla facilisi. Duis sit amet sollicitudin elit. Aliquam eget dolor in sem tristique tristique. Sed congue justo a turpis laoreet malesuada. Nam eget enim ac odio mollis ultrices. Mauris interdum ultrices felis a consequat. Donec cursus massa a est pulvinar, ut tincidunt quam accumsan. Morbi maximus molestie sapien vel efficitur. Quisque molestie, urna vel mollis bibendum, nulla est sodales sem, eu hendrerit ex dolor ut quam. Integer rutrum quam a elementum aliquet. Suspendisse tincidunt eros id quam ultricies bibendum.";
  return(
    <div style={{flexDirection: 'column', alignItems: 'center',border: '1px solid rgba(0, 0, 0,0.25)', flex: 1}}>
      <div>
        <TopBar/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{ flex: 11, flexDirection: 'column' }}>
          <Panel imageSrc = {thumbPlaceholder} description = {LoremIpsum}/>
          <Panel imageSrc = {thumbPlaceholder} description = {LoremIpsum}/>  
        </div>
        <div style={{ flex: 1}}>
          <SideBar/>
        </div>
      </div>
    </div>

  );
}

function Panel({imageSrc,description}) {
  return(
      <div style={{ display: 'flex', alignItems: 'center',border: '1px solid rgba(0, 0, 0,0.25)'}}>
        <div style={{ alignItems: 'center',border: '1px solid rgba(0, 0, 0,0.25)'}}>
          <img src={imageSrc} alt =  'thumb' style={{ width: '20em',height:'auto' }} />
        </div>
        <div>
          {description}
        </div>
          
      </div>
  );
}

function App() {
  return (
    <div>
      <AppHeader/>
      <AppBody/>
    </div>
  );
}

export default App;
