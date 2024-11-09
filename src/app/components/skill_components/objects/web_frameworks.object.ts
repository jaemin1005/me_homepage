import {
  SkillChart,
  SkillInfo,
} from "../../../../../interfaces/skill.interface";

const WEB_FRAMEWORK_ROWS = ["러닝 커브", "프로젝트 속도", "유지보수", "성능"];
const WEB_FRAMEWORK_EXPLAIN = [
  `러닝 커브는 각 프레임워크를 사용할 때 해당 언어에 대한 기본 지식이 있다고 가정하여 평가했습니다. 
  Nest는 새로운 개념보다는 규칙을 배우는 데 중점을 두기 때문에 러닝 커브가 높다고 평가했습니다. NestJS만의 데코레이터, 구조 등 새로운 문법을 이해하는 데 시간이 걸려 
  팀 프로젝트에서 어려움이 있었습니다. Next.js는 리액트에 대한 기본 지식과 이 프레임워크의 라우팅 방식을 이해해야 하므로 학습 난이도가 중간 정도로 평가됩니다. 
  하지만 리액트를 알고 있다면 쉽게 사용할 수 있습니다. Actix Web은 기존의 Express 패턴과 유사하여, 언어에 익숙하다면 웹 백엔드 구성이 어렵지 않으므로 러닝 커브가 낮다고 판단했습니다.`,
  `
  NestJS와 Next.js는 공동으로 높은 평가를 받았습니다. NestJS는 팀 프로젝트에서 두 번 경험해 보았는데, 정형화된 규칙 덕분에 팀 간 코드 리뷰와 이해가 쉬웠습니다. 
  모듈화된 구조로 컨트롤러와 서비스 등을 조립하기만 하면 빠르게 백엔드 구성이 가능해 프로젝트 진행 속도가 좋았습니다. Next.js는 풀 스택 프레임워크로 빠르게 웹을 만드는 데 큰 장점이 있었습니다. 
  React를 지원하는 폭넓은 UI 라이브러리가 있어 페이지 구성이 용이하고, 컴포넌트 기반의 구조 덕분에 팀 작업이 편리하다는 장점이 있었습니다.
  `,
  `
  유지보수 측면에서 NestJS는 높은 평가를 받았습니다. 모듈화된 구조와 의존성 주입 덕분에 유지보수가 용이한 경험이 있었습니다. 
  팀원이 기능 변경을 요청했을 때, 서비스를 수정하거나 추가하는 방식으로 쉽게 분리할 수 있어 인상적이었습니다.
  Next.js도 긍정적인 평가를 받았습니다. API 라우터를 통해 서버리스처럼 쉽게 백엔드를 구축할 수 있으며, 컴포넌트 구조 덕분에 유지보수가 수월합니다.
  반면, Actix Web은 낮은 평가를 받았습니다. 러스트의 특성으로 인해 안전성은 뛰어나지만, 유연성이 떨어지는 단점이 있습니다. 
  객체 프로퍼티를 추가할 경우, 큰 변경이 발생해 이 구조체를 사용하는 모든 곳에서 수정을 요구할 수 있습니다.
  `,
  `
  성능 평가에서 Actix Web은 높은 성능을 보입니다. 현재 EC2 프리티어 인스턴스에서 컨테이너로 3개의 Actix Web이 운영되고 있으며, 유휴 상태에서 평균 2MiB의 메모리를 사용하고 있습니다. 
  메모리 누수에 대한 걱정이 거의 없어 다른 두 프레임워크에 비해 성능이 높다고 생각합니다. 
  Next.js는 이미지 최적화와 서버리스로 실행되는 백엔드 로직와 이미지 최적화, 리액트 상태관리를 통해 좋은 성능을 발휘합니다.
  반면, NestJS는 배포 시 무겁다는 인상이 강했습니다. 규격화된 구조와 확장성, 안정성 등의 장점이 있지만, 
  이러한 특성으로 인해 평균적인 성능을 보여주며 더 나은 성능으로 발전하는 데 한계가 있다 생각하여 상대적으로 낮은 평가를 받았습니다.
  `,
];

const NEXT_JS = new SkillInfo("NextJs");
const NEXT_JS_VALUES = [50, 100, 75, 75];

const NEST_JS = new SkillInfo("NestJs");
const NEST_JS_VALUES = [100, 100, 100, 50];

const ACTIX_WEB = new SkillInfo("Actix Web");
const ACTIX_WEB_VALUES = [75, 50, 50, 100];

WEB_FRAMEWORK_ROWS.forEach((value, idx) => {
  NEXT_JS.pushValue(value, NEXT_JS_VALUES[idx]);
  NEST_JS.pushValue(value, NEST_JS_VALUES[idx]);
  ACTIX_WEB.pushValue(value, ACTIX_WEB_VALUES[idx]);
});

export const webFramwork = new SkillChart(
  "Web Framework",
  WEB_FRAMEWORK_ROWS,
  [NEXT_JS, NEST_JS, ACTIX_WEB],
  WEB_FRAMEWORK_EXPLAIN
);
