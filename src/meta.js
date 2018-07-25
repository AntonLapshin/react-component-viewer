import Test from "./components/Test";

const PropTypes = {
  string: "string",
  number: "number"
};

export const items = [
  { name: "Test", Component: Test, propTypes: { name: PropTypes.string } }
];
