import { MeContainer } from "./me_container.component";

export function Me() {
  return (
    <div className="w-screen min-h-screen px-20 py-[135px] flex flex-col justify-between">
      <h1
        className="font-inter font-bold text-8xl leading-[116px] tracking-[0.1em] 
           bg-gradient-to-r from-[#8F9795] to-[#5EA196] text-transparent 
           bg-clip-text shadow-md"
      >
        PORTFOLIO
      </h1>
      <div>
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
          tags={[
            "AWS RDS",
            "AWS LAMBDA",
            "AWS DYNAMODB",
            "AWS EC2",
            "AWS S3",
          ]}
        />
        <MeContainer tags={["AWS Amplify","Web Assembly", "Docker", "GIT"]}/>
      </div>
    </div>
  );
}
