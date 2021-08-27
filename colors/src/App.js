import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette} from "./colorsHelper";

function App() {
   
  const findPalette = (id) => {
    seedColors.find(palette => {
      return palette.id === id;
    })
  }

  return (
    <Switch>
      <Route exact path="/" render={ () => <h1>PALETTE LIST GOES HERE</h1>}/>
      <Route exact path="/palette/:id" render={() => <h1>INDIVIDUAL GOES HERE</h1>}/>
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
