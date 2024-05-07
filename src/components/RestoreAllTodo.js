import React from "react";

export default class RestoreAllTodo extends React.Component {
  render() {
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          this.props.handleRestoreAll();
        }}
      >
        Restore All
      </button>
    );
  }
}