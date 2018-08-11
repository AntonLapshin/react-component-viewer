import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showError = message => {
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    type: toast.TYPE.ERROR
  });
};

class ErrorMessage extends React.Component {
  showErrorIfExists() {
    this.props.message && showError(this.props.message);
  }

  componentDidMount() {
    this.showErrorIfExists();
  }

  componentDidUpdate() {
    this.showErrorIfExists();
  }

  render() {
    return <ToastContainer />;
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ErrorMessage;
