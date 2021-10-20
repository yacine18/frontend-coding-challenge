import React from "react";

const Repository = ({ repository }) => {
  
  // get the number of starts
  const stars =
    repository.stargazers_count > 999
      ? (repository.stargazers_count / 1000).toFixed(1) + "k"
      : repository.stargazers_count;

  // get the number of issues
  const issues =
    repository.open_issues_count > 999
      ? (repository.open_issues_count / 1000).toFixed(1) + "k"
      : repository.open_issues_count;

  const dateSubmited =
    Date.parse(new Date()) - Date.parse(repository.created_at);
  const NDays = Math.floor(dateSubmited / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div
        className="row"
        style={{ marginTop: "3.5rem", marginLeft: "2.5rem", margin: "1.5rem" }}
      >
        <div className="col s12 m6" style={{ width: "10rem" }}>
          <div className="darken-1">
            <div className="white-text">
              <img
                src={repository.owner.avatar_url}
                width="125"
                alt={repository.owner.login}
              />
            </div>
          </div>
        </div>
        <div style={{ marginRight: "6rem" }}>
          <div style={{ fontSize: "1.4rem", marginRight: "1rem" }}>
            <h5>{repository.name}</h5>
          </div>
          <div>
            <p>
              {repository.description
                ? repository.description
                : "No description"}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              className="center-align"
              style={{ border: "outset", padding: "0.5rem", width: "6.5rem" }}
            >
              Starts: {stars}
            </p>
            <p
              className="center-align"
              style={{
                border: "outset",
                padding: "0.5rem",
                width: "6.5rem",
                marginLeft: "0.5rem",
              }}
            >
              Issues: {issues}
            </p>
            <p style={{ justifyContent: "space-between", padding: "0.5rem" }}>
              Submitted {NDays} days ago by {repository.owner.login}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
