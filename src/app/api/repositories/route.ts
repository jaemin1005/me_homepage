// app/api/repositories/route.ts
import { NextResponse } from "next/server";
import { octokit } from "../../../../utils/otokit";
import { Repository } from "../../../../interfaces/git_state.interface";

export async function GET() {
    try {
        // 사용자 전체 레포지토리 가져오기
        const repositories = await octokit.paginate(octokit.rest.repos.listForUser, {
            username: process.env.GIT_USER_NAME!,
            per_page: 100,  // 최대값인 100개로 설정
        });

        const allRepoData: Repository[] = [];

        // 레포지토리를 순회하여 원하는 데이터를 가져온다.
        // 이슈, 커밋, 풀리퀘스트
        for (const repo of repositories) {
            const repoName = repo.name;
            const owner = repo.owner.login;

            // const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
            //     owner,
            //     repo: repoName,
            //     state: "all",
            //     per_page: 100,
            // });

            const commits = await octokit.paginate(octokit.rest.repos.listCommits, {
                owner,
                repo: repoName,
                per_page: 100,
            });

            const pullRequests = await octokit.paginate(octokit.rest.pulls.list, {
                owner,
                repo: repoName,
                state: "all",
                per_page: 100,
            });

            // 데이터 파싱
            allRepoData.push({
                id: repo.id,
                name: repoName,
                html_url: repo.html_url,
                created_at: repo.created_at!,
                updated_at: repo.updated_at!,
                issues: [],
                commits: commits.map(commit => ({
                    sha: commit.sha,
                    message: commit.commit.message,
                    html_url: commit.html_url,
                    create_at: commit.commit.author?.date
                })),
                pullRequests: pullRequests.map(pr => ({
                    number: pr.number,
                    title: pr.title,
                    html_url: pr.html_url,
                    create_at: pr.created_at, 
                })),
            });
        }

        // JSON 응답 반환
        return NextResponse.json({ repositories: allRepoData });
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        return NextResponse.json({ message: "서버 오류 발생", error }, { status: 500 });
    }
}
