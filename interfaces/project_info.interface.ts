type UrlType = "publish" | "record" | "review"

export interface ProjectInfo {
    name: string,
    skills: string[],
    imageUrl : string,
    body: string,
}