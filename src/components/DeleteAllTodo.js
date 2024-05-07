import React from "react";

export default class DeleteAllTodo extends React.Component {
  render() {
    return (
      <button
        className="btn btn-danger"
        onClick={() => {
          this.props.handleDeleteAll();
        }}
      >
        Delete All
      </button>
    );
  }
}