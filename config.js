/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "진 혁",
    nameEn: "Groom",
    father: "최 오 천",
    mother: "신 동 미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "한 을",
    nameEn: "Bride",
    father: "김 근 태",
    mother: "박 미 옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-03-06",
    time: "13:30",
    venue: "명동 라루체 웨딩홀",
    hall: "그레이스 홀 5층",
    address: "서울특별시 중구 퇴계로18길 46",
    tel: "02-766-8200",
    mapLinks: {
      kakao: "https://place.map.kakao.com/8586977",
      naver: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%20%EB%9D%BC%EB%A3%A8%EC%B2%B4%20%EC%9B%A8%EB%94%A9/place/13355258?placePath=/home?bk_query=%EB%AA%85%EB%8F%99%20%EB%9D%BC%EB%A3%A8%EC%B2%B4%20%EC%9B%A8%EB%94%A9&entry=pll&from=map&fromNxList=true&fromPanelNum=2&timestamp=202610141227&locale=ko&svcName=map_pcv5&searchText=%EB%AA%85%EB%8F%99%20%EB%9D%BC%EB%A3%A8%EC%B2%B4%20%EC%9B%A8%EB%94%A9&searchType=place&c=15.00,0,0,0,dh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로의 곁에서 같은 내일을 꿈꾸며\n이제 부부라는 이름으로 함께하려 합니다.\n\n저희의 새로운 시작을\n축복으로 함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께라서 더 따뜻할 우리의 날들을 시작합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "최진혁", bank: "우리은행", number: "1002-153-353596" },
      { role: "아버지", name: "최오천", bank: "하나은행", number: "389-810149-17807" },
      { role: "어머니", name: "신동미", bank: "하나은행", number: "289-910324-41507" }
    ],
    bride: [
      { role: "신부", name: "김한을", bank: "카카오뱅크", number: "3333-03-2541913" },
      { role: "아버지", name: "김근태", bank: "카카오뱅크", number: "3333-05-2335284" },
      { role: "어머니", name: "박미옥", bank: "농협은행", number: "702060-51-030115" }
    ]
  },


  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "진혁 ♥ 한을 결혼합니다",
    description: "2027년 3월 6일, 소중한 분들을 초대합니다."
  }
};

const CONFIG = {
  useCurtain: true,

    groom: {
