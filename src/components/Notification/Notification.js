import React, { Component } from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    Notification.propTypes = {
      message: PropTypes.string,
    };

    const {message} = this.props
    return (
      <>
        <p className={styles.notificationMessage}>{message}</p>
      </>
    );
  }
}

export default Notification;
