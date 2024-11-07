"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Repository } from "../interfaces/git_state.interface";

const gitStateContext = createContext<Repository[]>([]);

export const GitStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/repositories");
        const result = await res.json();

        if (res.ok) {
          setData(result.repositories);
        } else {
          console.error("API Error", result);
        }
      } catch (error) {
        console.error("Network Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <gitStateContext.Provider value={data}>{children}</gitStateContext.Provider>
  );
};

// Context를 사용하여 데이터를 가져오는 커스텀 훅
export const useGitState = () => useContext(gitStateContext);
