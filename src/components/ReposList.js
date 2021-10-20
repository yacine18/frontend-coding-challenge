import React, { useEffect, useState } from "react";
import { getAllRepos } from "../services/repositories";
import LoadingBox from "./LoadingBox";
import Repository from "./Repository";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      const { data } = await getAllRepos(page);

      setRepos((prev) => [...prev, ...data.items]);
      setLoading(false);
    };

    loadRepos();
  }, [page]);

  // infinite scrolling functionality
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((prev) => prev + 1);
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, [loading, page]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : repos.length > 0 ? (
        repos.map((repository) => (
          <Repository repository={repository} key={repository.id} />
        ))
      ) : (
        <p
          className="center-align"
          style={{ marginTop: "10rem", fontSize: "1.3rem" }}
        >
          No Items Found.
        </p>
      )}
    </div>
  );
};

export default ReposList;
