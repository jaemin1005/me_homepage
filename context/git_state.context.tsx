"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Repository } from "../interfaces/git_state.interface";

const gitStateContext = createContext<Repository[]>([]);

const getS3Data = async () => {
  try {
    const res = await fetch("api/s3");

    if (!res.ok) {
      const errorResult = await res.json();
      console.error("API S3 Error:", errorResult);
      throw new Error(
        `API responded with status: ${res.status} ${res.statusText}`
      );
    }

    const result = await res.json();
    return result.repositories as Repository[];
  } catch {
    throw new Error("API S3 Error");
  }
};

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
          console.error("API Repositories Error", result);
          const s3Data = await getS3Data();
          setData(s3Data);
        }
      } catch (error) {
        console.error("Network Error:", error);
        const s3Data = await getS3Data();
        setData(s3Data);
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
