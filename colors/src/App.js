import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette} from "./colorsHelper";

function App() {
  console.log(generatePalette(seedColors[2]))
  return (
    <div>
      <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
