import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
    auth: process.env.GIT_ACCESS_TOKEN,
});