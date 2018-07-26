import Label from "../../components/Label";
import Button from "../../components/Button";
// import ButtonMock from "../../components/Button.mock";

const PropTypes = {
  string: "string",
  number: "number",
  func: "func"
};

export const items = [
  // { name: "Label", Component: Label, propTypes: { text: PropTypes.string } },
  { name: "Label", Component: Label, propTypes: Label.propTypes },
  {
    name: "Button",
    Component: Button,
    propTypes: { label: PropTypes.string, onClick: PropTypes.func },
    //mock: ButtonMock
  }
];
