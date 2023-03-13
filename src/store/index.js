import { createStore } from 'vuex';

export default createStore({
    state: {
        projects: [
            {
              id: 1,
              name: "Studio Sonagi Project",
              person: "풀스택 개발자 1명(본인)",
              purpose:"회사에서 스튜디오가 오픈함에 따라 운영에 필요한 홈페이지 제작",
              slides: [require("@/assets/img/studiomain.png"), require("@/assets/img/studiofilmography.png"), require("@/assets/img/studioportfoliodetail.png"), require("@/assets/img/studiologin.png"), require("@/assets/img/studiofilmoadmingraphy.png"), require("@/assets/img/studioadmindetail.png")],
              siteUrl: "https://www.studiosonagi.com",
              githubUrl: "https://github.com/hyoungbinoh/studiosonagi",
              skill: "JavaScript, React, Three.js, Styled-Components, CSS",
              information: ["Ajax를 활용한 서버와 비동기 통신", "관리자페이지 내 CRUD 기능", "예약 페이지 구현"],
              solution: ["달력에 예약 내역 적용 문제 => Ajax 함수에 달력의 날짜 값을 불러옴", "이미지 값 null일 때 서버 에러 문제 => flask 서버에서 예외처리"],
              improvement: ["수정 페이지에서 수정 후 관리자페이지로 리디렉션 필요"],
              open: false,
              currentSlide: 1
            },
            {
              id: 2,
              name: "Friends Test Project",
              person: "프론트엔드 개발자 1명(본인)",
              purpose:"M2E 프로토타입 홈페이지 제작 전 React 연습을 위한 사이드 프로젝트 진행",
              slides: [require("@/assets/img/friendtestmain.png"), require("@/assets/img/friendtestquiz.png"), require("@/assets/img/friendtestscore.png"), require("@/assets/img/friendtestranking.png")],
              siteUrl: "https://friendstest-f96d2.web.app/",
              githubUrl: "https://github.com/hyoungbinoh/friend-test",
              skill: "JavaScript, React, Redux, Styled-Components, Firebase",
              information: ["Async를 활용한 Firebase와의 통신", "Redux를 활용한 전역 상태 관리"],
              solution: ["리듀서 함수 정의시 에러가 나는 현상 => state와 action의 기본값을 넣어줌"],
              improvement: ["정답 페이지 추가 제작 필요", "useHistory를 useNavigate로 변경 필요"],
              open: false,
              currentSlide: 1
            },
            {
              id: 3,
              name: "M2E Prototype Project",
              person: "웹기획자 1명, 웹디자이너 2명, 3D 디자이너 1명, 프론트엔드 개발자 1명(본인)",
              purpose:"사에서 M2E 서비스가 기획 됨에 따라, 프로토타입의 홈페이지 제작",
              slides: [require("@/assets/img/stepwarmain.png"), require("@/assets/img/stepwarslider.png"), require("@/assets/img/stepwarproperty.png")],
              siteUrl: "http://hyoungbin.shop",
              githubUrl: "https://github.com/hyoungbinoh/M2E-prototype",
              skill: "JavaScript, React, Three.js, Styled-Components, CSS",
              information: ["반응형 웹페이지 구현", "Three.js를 활용한 3D 이미지 컨트롤 기능", "무한 캐러셀 기능 구현"],
              solution: ["무한캐러셀 마지막에서 처음으로 돌아가는 문제 => 처음과 마지막 슬라이드를 복제", "3D 이미지가 마우스 위치를 따라가도록 만드는 문제 => three.js에 별도로 마우스 위치값 부여"],
              improvement: ["상세페이지 제작 필요", "메모리를 많이 차지하여 느려지는 현상 개선 필요"],
              open: false,
              currentSlide: 1
            },
            {
              id: 4,
              name: "Portfolio Project",
              person: "프론트엔드 개발자 1명",
              purpose:"프론트엔드 개발자로서의 자기소개와 기존 포트폴리오 소개를 위해 제작",
              slides: [require("@/assets/img/hyoungbinmain.png"), require("@/assets/img/hyoungbinslider.png"), require("@/assets/img/hyoungbinaccordion.png")],
              siteUrl: "https://hyoungbinoh.github.io",
              githubUrl: "https://github.com/hyoungbinoh/portfolio",
              skill: "JavaScript, Vue.js, Vuex, CSS",
              information: ["Axios를 통한 서버와의 통신", "Vuex를 활용한 전역 상태 관리"],
              solution: ["캐러셀이 다 같이 작동하는 문제 => 초기값을 ref 사용 대신 각각의 객체에 넣어줌"],
              improvement: ["Postman 목서버 대체할 별도의 서버 구축"],
              open: false,
              currentSlide: 1
            },
        ]
    }
});