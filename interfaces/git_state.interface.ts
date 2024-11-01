export interface Repository {
    id: number, //고유 id
    name: string, // 이름
    html_url: string, // 주소
    created_at?: string, // 생성되 날짜
    updated_at?: string, // 업데이트 날짜

    commits: Commit[],
}

export interface Commit{
    sha: string,
    message: string,
    html_url: string,
    create_at?: string,
}
