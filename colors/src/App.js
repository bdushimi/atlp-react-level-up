import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from "./colorsHelper";
import PaletteList from './PaletteList';

function App() {
   
  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    })
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} />
      
      <Route
        exact path="/palette/:id"
        render={(routeProps) =>
          <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        }
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
