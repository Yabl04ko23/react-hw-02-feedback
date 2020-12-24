import React, { Component } from "react";
import styles from "./Notification.module.css";

class Notification extends Component {
  render() {
    return (
      <>
        <p className={styles.notificationMessage}>{this.props.message}</p>
      </>
    );
  }
}

export default Notification;
