import './App.css';
//import Frcst from './04/Frcst';
//import Mydiv from './03/Mydiv'
//import Taccident from './05/Taccident';
//import Gal from './06/Gal';
//import GalSelect from './06/GalSelect';
//import Mycom from './07/Mycom';
//import Myform from './08/Myform';

//import RouteMain from './09/RouteMain';
import { BrowserRouter } from 'react-router-dom';

import Wmain from './10/Wmain';

const App = () => {
  return (
    //<Frcst />
    //<Mydiv />
    //<Taccident />
    //<Gal />
    //<GalSelect />
    // <Mycom />
    //<Myform /> 

    <BrowserRouter>
    {/* <RouteMain /> */}
      <Wmain />
    </BrowserRouter>


  );
}

export default App;
