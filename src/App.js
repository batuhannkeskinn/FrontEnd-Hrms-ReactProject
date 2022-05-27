import { Container } from 'semantic-ui-react';
import DashBoard from './layouts/DashBoard';
import Navi from './layouts/Navi';
import './App.css';
import 'semantic-ui-css/semantic.min.css'



function App() {
  return (
    <div className="App">
      
      <Navi/>
      <Container color = "yellow" className="main">
        <DashBoard/>
      </Container>
    </div>
  );
}

export default App;
