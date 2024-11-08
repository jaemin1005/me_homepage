import { ProjectInfo } from "../../../../interfaces/project_info.interface";

export const THEME_MAP: ProjectInfo = {
  name: "THEME MAP",
  skills: [
    "NextJs",
    "Actix Web",
    "Rust",
    "EC2",
    "S3",
    "Amplify",
    "Docker",
    "MongoDB",
  ],
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/THEME-MAP-c6c7065f10c149049aab2f5e061810f7?pvs=74",
  publishUrl: "https://release.d6du8r23kfxlz.amplifyapp.com",
  notedUrl:
    "https://lofty-judo-dd7.notion.site/THEME-MAP-1208db2d50b78077a8f7f74ca649ee16?pvs=74",
  githubUrl: "https://github.com/jaemin1005/theme-map",
  imageUrl: "/projects/theme_map.webp",
  body: `
  이 프로젝트는 사용자들이 자신만의 지도를 생성하고 공유할 수 있는 플랫폼입니다. 사용자들은 지도에 여러 개의 마커를 추가하여 특정 테마에 맞는 지도를 만들 수 있으며, 
  다른 사용자의 지도를 검색하고 가져와 활용할 수도 있습니다. 프론트엔드와 전반적인 렌더링 작업들은 Next.js로 구성되었으며, 서비스들은 Docker와 EC2를 활용해 Actix-web 기반의 인증, 업로드, 지도 관리 3개의 
  백앤드로 운영하고 있습니다`,
};

export const FAST_EXCEl_TO_JSON: ProjectInfo = {
  name: "EXCEL TO JSON",
  skills: ["NextJs", "Web Assembly", "Rust", "Amplify", "Git Action", "npm"],
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/Fast-Excel-To-Json-406459c68cf542408fbff2ca743d2b51?pvs=74",
  publishUrl: "https://fastexceltojson.com/",
  notedUrl:
    "https://lofty-judo-dd7.notion.site/Open_Port_Check-1238db2d50b78015987ec4cb547bcf22",
  githubUrl: "https://github.com/jaemin1005/excel-to-json-browser",
  imageUrl: "/projects/fast_excel_to_json.webp",
  body: `이 프로젝트는 .xlxs 및 .csv 파일을 Json 형식으로 변환해주는 웹 애플리케이션입니다. 
  주요 특징으로는 웹 어셈블리를 활용하여 변환 로직을 구현함으로써, 클라이언트 측에서 파일을 직접 변환할 수 있도록 하였습니다. 
  이를 통해 서버에 파일을 업로드하면서 발생할 수 있는 비용과 보안 문제를 효과적으로 제거하였습니다. 
  또한, 대용량 파일에 대해 멀티스레딩 기술을 적용하여 빠르고 효율적인 변환이 가능하도록 하였습니다`,
};

export const HOME_PAGE: ProjectInfo = {
  name: "HOME PAGE",
  skills: ["NextJs", "Lambda", "Event Bridge", "MongoDB"],
  notedUrl:
    "https://lofty-judo-dd7.notion.site/1308db2d50b780e2b415f34a3e655349",
  githubUrl: "https://github.com/jaemin1005/me_homepage",
  imageUrl: "/projects/me_homepage.webp",
  body: `나 자신을 표현하기 위해 만든 웹페이지입니다.주요 목표는 그래프를 통해 제 활동과 성취를 시각적으로 나타내는 것입니다.
  그래프의 데이터는 AWS Lambda와 AWS Event bridge를 통해 하루마다 이벤트가 트리거됩니다.
  이벤트가 트리거 될 시, Github API를 통해 데이터를 받아오며, MongoDB에 저장됩니다.`,
};

export const OPEN_PORT_CHECK: ProjectInfo = {
  name: "Open Port Check",
  skills: ["Tauri", "Leptos", "Rust", "Git Action"],
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/Open-Port-Check-1278db2d50b7808eb0c1fec4170bdb87?pvs=74",
  publishUrl:
    "https://github.com/jaemin1005/open_port_check/releases/tag/app-v0.1.0",
  notedUrl:
    "https://lofty-judo-dd7.notion.site/Open_Port_Check-1238db2d50b78015987ec4cb547bcf22?pvs=74",
  githubUrl: "https://github.com/jaemin1005/open_port_check",
  imageUrl: "/projects/open_port_check.webp",
  body: `작업을 진행하던 중 가끔 프로세스가 종료되지 않는 문제가 발생해, 매번 터미널을 실행하고 명령어를 입력해야 하는 불편함을 느꼈습니다. 
  이를 해결하기 위해, RUST 크로스클랫폼 개발 프레임워크인 Tauri를 통해 간편하고 빠르게 프로세스를 강제 종료할 수 있는 GUI 앱을 개발하게 되었습니다. 
  이 앱은 사용자 친화적인 인터페이스를 제공하여, 클릭 한번으로 프로세스를 종료할 수 있게 도와줍니다.
  크로스 플랫폼인 만큼 현재 Window와 Mac에서의 테스트를 완료하였습니다.`,
};

export const NO_GUI_CLUB: ProjectInfo = {
  name: "No GUI Club",
  skills: ["Express", "MySQL", "IndexedDB", "Typescript", "Firebase"],
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/No-Gui-Club-571cb1edcbf24cb492fd05f3cbb8f4a9",
  publishUrl: "https://noguiclub.web.app/",
  notedUrl:
    "https://lofty-judo-dd7.notion.site/NoGUIClub-507b51d38a9a4dd4bff2c881e332034d?pvs=74",
  githubUrl: "https://github.com/jaemin1005/NoGUIClub",
  imageUrl: "/projects/ngc.webp",
  body: `이 프로젝트는 CLI 환경을 모티프로 하여 글 읽기와 쓰기 기능을 갖춘 첫 개인 프로젝트입니다. 
  프레임워크 없이 기본적인 DOM 조작과 Express를 활용하여 개발하였으며, Firebase를 통해 정적 페이지를 배포하는 과정을 경험하였습니다. 
  이 과정에서 웹팩과 같은 번들러 도구의 필요성을 깨닫고, 웹 브라우저의 기본적인 배포 환경에 대해 배웠습니다.
  `,
};

export const BOOK_MANAGEMENT: ProjectInfo = {
  name: "도서 관리 앱",
  skills: ["Nextjs", "Nestjs", "Jest", "MongoDB"],
  videoUrl: "https://www.youtube.com/watch?v=JD3SfBaG8A4",
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/4b77db0d748f44b5a4fb62fd126d0b15",
  githubUrl:
    "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-2team",
  imageUrl: "/projects/book.webp",
  body: `이 도서 관리 프로젝트는 사용자와 운영진 모두에게 편의를 제공하는 웹 애플리케이션입니다. 
  사용자는 해시태그와 검색 기능을 통해 관심 있는 도서를 쉽게 찾아보고, 관련 도서를 신속하게 검색할 수 있습니다. 
  운영진은 테이블 기반의 관리 도구를 활용하여 도서 재고와 주문 목록을 효율적으로 관리할 수 있으며, 사용자가 구매 및 주문을 할 때 재고가 자동으로 업데이트되고, 
  주문 처리 내역이 자동으로 기록되는 기능을 통해 운영 효율성을 크게 향상시킵니다.`,
};

export const WHISPER_IN_A_BOTTLE: ProjectInfo = {
  name: "Whisper In A Bottle",
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/Whisper-In-A-Bottle-1358db2d50b7800a8d64f1ed0d0cc375?pvs=74",
  videoUrl: "https://www.youtube.com/watch?v=MuI2K2Iz_t8",
  githubUrl: "https://github.com/naviadev/Whisper_In_A_Bottle",
  skills: ["Nextjs", "Nestjs", "ThreeJs", "Socket.io", "Jest", "AWS RDS"],
  imageUrl: "/projects/wib.webp",
  body: `다른 유저들과 유리병을 통해 소통하는 프로젝트입니다. 사용자는 유리병 편지를 통해, 자신을 모르는 상대에게 감정과 이야기를 함으로 써
  마음의 짐을 덜어내는 것이 주 목적인 프로젝트입니다. 유리병은 실시간으로 주고 받을 수 있게 하기 위해 socket.io를 통해 편지의 송수신을 구현하였습니다. 또한 로직에
  Jest로 로직을 검증하여 신뢰성과 협업 효율성을 높였습니다.`,
};

export const TEAM_GG: ProjectInfo = {
  name: "TEAM GG",
  skills: ["NodeJs", "Javascript", "RESTful API"],
  reviewUrl:
    "https://lofty-judo-dd7.notion.site/TEAM-GG-1358db2d50b78014b01bc6d9f2af57c9?pvs=74",
  githubUrl: "https://github.com/jaemin1005/Team.gg",
  imageUrl: "/projects/teamgg.webp",
  body: `이 프로젝트는 사용자 ID를 검색하여 리그 오브 레전드 플레이어의 티어와 진행 중인 게임, 챔피언 숙련도, 팀원들의 대략적인 정보를 확인할 수 있는 웹 애플리케이션입니다. 
  자바스크립트를 배우면서 처음으로 진행한 이 프로젝트를 통해 HTTP 프로토콜의 기본 원리와 외부 API를 활용하여 데이터를 받아오는 방법을 익혔으며, 
  웹 애플리케이션의 구조와 클라이언트-서버 모델에 대한 이해를 높이는 기회를 가졌습니다.
  `,
};
