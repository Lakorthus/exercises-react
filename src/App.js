import "./App.css";
import ColorRenderer from "./01-color-render/colorRender";
import DarkMode from "./02-dark-mode/darkmode";
import FormValidator from "./03-form-validator/form";
import DogPics from "./04-dog-picture/dogpic";
import ScoreKeeper from "./05-score-keeping/scorekeeper";
import ToggleWindowEvent from "./06-add-window-event/toggle-window-event";
import ColorPicker from "./07-color-picker/color-picker";
import PixelArt from "./08-pixel-art/pixel-art";
import SimpleCalculator from "./09-simple-calculator/simple-calculator";
import FocusInput from "./10-focus-input/focus-input";
import ShoppingCart from "./11-shooping-cart/shooping-cart";

function App() {
  return (
    <div className="App">
      <ColorRenderer />
      <DarkMode  />
      <FormValidator />
      <DogPics/>
      <ScoreKeeper/>
      <ToggleWindowEvent/>
      <ColorPicker/>
      <PixelArt/>
      <SimpleCalculator/>
      <FocusInput/>
      <ShoppingCart/>
    </div>

  );
}

export default App;
