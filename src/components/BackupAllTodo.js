import React from "react";

export default class BackupAllTodo extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          this.props.handleBackupAll();
        }}
      >
        Backup All
      </button>
    );
  }
}