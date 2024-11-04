import { MeContainer } from "../me_container.component";

export function SkillsInfo() {
  return (
    <>
      <div className="my-10">
        <MeContainer
          title="LANGUAGE"
          tags={["javascript", "typescript", "rust", "C#"]}
        />
        <MeContainer
          title="FRAMEWORK"
          tags={["Nextjs", "Nestjs", "Actix Web", "Tauri", "Leptos", "Express"]}
        />
        <MeContainer
          title="TOOLS"
          tags={["AWS RDS", "AWS LAMBDA", "AWS DYNAMODB", "AWS EC2", "AWS S3"]}
        />
        <MeContainer tags={["AWS Amplify", "Web Assembly", "Docker", "GIT"]} />
      </div>
    </>
  );
}
