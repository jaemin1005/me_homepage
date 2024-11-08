import {
  SkillChart,
  SkillInfo,
} from "../../../../../interfaces/skill.interface";

const WEB_FRAMEWORK_ROWS = ["러닝 커브", "프로젝트 속도", "유지보수", "성능"];
const WEB_FRAMEWORK_EXPLAIN = [
  `러닝 커브는 프레임워크를 사용한다 했을 때 해당 언어를 어느정도 지식이 있다는 가정하에 순위를 매겼습니다.
  Nest가 1등인 이유는, 새로운 개념보다는 규칙을 배워야하기 때문에 팀 프로젝트를 진행함에 있어서 러닝 커브가 있었습니다.
  NestJs가 새로운 데코레이터등 제공하는 문법을 새로 배우는게 로직에 대해 파악하는게 시간이 걸리기 때문입니다. 
  NextJs는 리액트에 대한 기본적인 지식과 이 프레임워크 만의 라우터 방식을 이해를 해야하기 때문에 학습적인 난이도가 있는 편입니다. 
  만약 리액트를 알고 있으면 손 쉽게 사용을 할 수 있기 때문에 2등으로 선정하였습니다. Actix Web인 경우는 기존에 사용하던 Express의 패턴과 비슷합니다.
  언어가 익숙하다면, 웹 백앤드 구성이 어렵지 않기 때문에 가장 낮게 측정하였습니다.`,
  `
  공동 1순위로 NestJs, NextJs로 선정했습니다. NestJs는 팀 프로젝트로 2번을 경험해 보았는데 정형화된 규칙이 팀
  간의 코드 리뷰, 파악이 쉬웠습니다. 그리고 모듈화된 구조로 컨트롤러, 서비스등 조립만 잘하면 빠르게 백앤드 구성이 가능하기
  때문에 프로젝트의 진행속도가 좋다고 느껴졌습니다. NextJs는 풀 스택 프레임워크로 하나의 웹을 빠르게 만드는게 크게 장점이
  있었습니다. React를 지원하는 폭 넓은 UI 라이브러리가 있기 때문에, 빠르게 페이지를 구성하는데 장점이였습니다. 또한 컴포넌트 구성으로 분리된 구조로 
  팀 작업을 하기 편하다는 장점이 있었습니다. 
  `,
  `
  유지보수 1등은 NestJs, 모듈화된 구조와 의존성 주입을 통해 유지보수가 쉬웠던 경험이 있습니다. 팀원이 기능을 변경해달라고 요청했을 때도
  서비스만 변경하던가, 서비스를 따로 추가해서 컨트롤러에 추가를 하던지 해서, 쉽게 분리가 가능했던 점이 인상이 깊었습니다. 두 번
  째는 NextJs, API라우터를 통해 서버리스처럼 쉽게 백앤드를 구축할 수 있으며, 컴포넌트 구조를 통한 유지보수에 2등으로 선정하였습니다.
  Actix Web은 러스트의 특성으로 인해 꼴등인데, 안전성이 뛰어난 만큼 반비례적으로 유연함이 떨어진다는 단점이 있습니다. 만약 객체 프로퍼티를 하나 추가한다면
  러스트에는 큰 변경점인데, 이 구조체(객체)를 사용하는 모든 곳에서 수정이 필요할 수도 있습니다.
  `,
  `
  성능으로는 Actix web, 현재 EC2 프리티어 인스턴스에, 컨테이너로 3개의 Actix Web이 돌아가는데 유후상태에서는 2mib를 평균적으로 잡아먹고 있습니다.
  또한 메모리 누수에 대한 걱정이 거의 없기 때문에 다른 2개의 프레임워크에 비해 성능이 높다고 생각합니다. 2등은 NextJs로 이미지의 최적화와 서버리스로 실행되는 백앤드 로직들
  SSR, 리액트 상태관리를 통해 최적화가 가능해, 2등으로 선정하였습니다. 3등인 경우 NestJs를 배포하려고 했을 때, 처음들었던 생각은 무겁다는 생각이 들었습니다. 이 NestJ는
  규격화된 구조, 확장성, 안정성 등 장점이 있지만 그에 따라 무거워진 프레임워크, 평균적인 성능은 낼 수 있지만 최적화에 한계가 있는 단점이 존재하여 3등으로 선정했습니다.
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
