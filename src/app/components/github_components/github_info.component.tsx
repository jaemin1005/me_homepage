import { Breadcrumbs, Button, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useGitState } from "../../../../context/git_state.context";
import { Commit, Repository } from "../../../../interfaces/git_state.interface";
import { GitHubLabel } from "./github_label.component";
import { useRepoState } from "../../../../context/select_repo.context";

type Select = "Commits" | "Repository";

export function GitHubInfo() {
  const [select, setSelect] = useState<Select>("Repository");
  const [commits, setCommits] = useState<Commit[]>([]);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [page, setPage] = useState(1);

  const gitData = useGitState();
  const { setName } = useRepoState();
  const itemsPerPage = 6;

  // 데이터 시간순서대로 정렬
  useEffect(() => {
    if (gitData !== undefined) {
      const commits = gitData
        .map((value) => value.commits)
        .flat()
        .sort((a, b) => {
          const dateA = new Date(a.create_at || "").getTime();
          const dateB = new Date(b.create_at || "").getTime();
          return dateB - dateA;
        });

      const repositorys = gitData.sort((a, b) => {
        const dateA = new Date(a.updated_at || "").getTime();
        const dateB = new Date(b.updated_at || "").getTime();
        return dateB - dateA;
      });

      setCommits(commits);
      setRepos(repositorys);
    }
  }, [gitData]);

  function handleClick(newSelect: Select) {
    setSelect(newSelect);
    setPage(1);
  }

  const displayedData =
    select === "Commits"
      ? commits.slice((page - 1) * itemsPerPage, page * itemsPerPage)
      : repos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // https://mui.com/material-ui/react-pagination/
  const pageHandleChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className="mt-24 flex flex-col">
      <Breadcrumbs aria-label="breadcrumb">
        <Button
          onClick={() => handleClick("Repository")}
          color={select === "Repository" ? "primary" : "inherit"}
          className="text-sm font-semibold"
        >
          Repository
        </Button>
        <Button
          onClick={() => handleClick("Commits")}
          color={select === "Commits" ? "primary" : "inherit"}
          className="text-sm font-semibold"
        >
          Commits
        </Button>
      </Breadcrumbs>
      <div className="w-full sm:w-max grid gap-x-4 gap-y-4 mt-2 grid-cols-2 grid-flow-row-3">
        {displayedData.map((data, idx) => {
          if (select === "Commits") {
            const typeData = data as Commit;
            return (
              <GitHubLabel
                key={idx}
                title={typeData.message.split("\n")[0]}
                createAt={
                  typeData.create_at
                    ? typeData.create_at.replace("T", " ").replace("Z", "")
                    : ""
                }
                url={typeData.html_url}
              />
            );
          } else {
            const typeData = data as Repository;
            return (
              <GitHubLabel
                key={idx}
                title={typeData.name}
                createAt={
                  typeData.updated_at
                    ? typeData.updated_at.replace("T", " ").replace("Z", "")
                    : ""
                }
                url={typeData.html_url}
                callBack={() => {
                  setName(typeData.name);
                }}
              />
            );
          }
        })}
      </div>
      <Pagination
        count={Math.ceil(
          (select === "Commits" ? commits.length : repos.length) / itemsPerPage
        )}
        page={page}
        onChange={pageHandleChange}
        className="mt-4 text-2xl"
      />
    </div>
  );
}
