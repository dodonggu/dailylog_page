import {
  createHomeArchiveVisual,
  createHomeCheckinVisual,
  createHomeDiaryVisual,
  createHomeHeroVisual,
  createHomeNextLoopVisual,
} from "@/lib/content/marketing-home-visuals";
import type { MarketingHomeContent } from "@/lib/content/page-content-types";

export const homePageContent: MarketingHomeContent = {
  metadata: {
    description:
      "Daily Log 데모 랜딩과 제품 흐름, 설치 가이드, 지원 및 정책 연결을 한곳에서 소개하는 메인 페이지입니다.",
    path: "/",
  },
  hero: {
    eyebrow: "Daily Log",
    title: "하루를 쉽게 정리하고, 다시 열고 싶은 기록으로 남겨드릴게요.",
    description:
      "Daily Log는 AI음성으로 대화를 통해 하루를 정리하고, 감정 분석을 통해 사용자의 감정 흐름을 한눈에 보여주는 모바일 중심 AI 기록 서비스입니다.",
    primaryLabel: "다운로드 보기",
    secondaryLabel: "제품 흐름 보기",
    pills: ["3~5분 체크인", "대화형 기록", "AI 요약", "Android APK 제공"],
    cards: [
      { id: "fast-start", label: "Fast Start", title: "첫 화면에서 바로 설치와 제품 흐름을 읽을 수 있게 구성했습니다." },
      { id: "clear-state", label: "Clear State", title: "배포 상태와 지원 경로를 같은 화면에서 확인할 수 있습니다." },
      { id: "return-loop", label: "Return Loop", title: "예쁜 소개보다 다시 열 이유가 남는 구조를 우선합니다." },
    ],
    visual: createHomeHeroVisual("Daily Log 로그인과 첫 체크인 화면"),
  },
  scenesSection: {
    eyebrow: "Product Story",
    title: "AI와 대화하며 하루를 기록하고,\n데이터 기반 피드백을 제공하는 라이프로그 서비스",
    description: "서비스 주요 기능",
  },
  scenes: [
    {
      id: "scene-checkin",
      eyebrow: "Scene 01",
      title: "음성을 통한 AI 대화 방식",
      description: "시작이 고민인 당신을 위한 AI 질문",
      cards: [
        { id: "short-entry", title: "하나의 질문", description: "화면 중심에 질문을 하나만 두어 시작 포인트를 헷갈리지 않게 만듭니다." },
        { id: "lower-pressure", title: "빠른 응답 버튼", description: "스킵, 답변 시작, 완료 같은 선택지가 아래에 보여 추가 단계 없이 반응할 수 있습니다." },
        { id: "mobile-first", title: "친근한 캐릭터", description: "고양이 캐릭터가 첫 인상을 부드럽게 만들고 기록에 대한 심리적 부담을 낮춥니다." },
        { id: "instant-clarity", title: "부드러운 첫 톤", description: "따뜻한 색감과 넉넉한 여백이 첫 체크인을 대화처럼 느끼게 합니다." },
      ],
      visual: createHomeCheckinVisual("Daily Log AI 대화 시작 화면"),
    },
    {
      id: "scene-dashboard",
      eyebrow: "Scene 02",
      title: "감정분석, 자동 일기 작성",
      description: "자동으로 작성된 일기와 그에 따른 감정 분석까지",
      cards: [
        { id: "calendar-glance", title: "날짜 맥락", description: "기록이 특정 하루에 연결돼 보여 임시 메모보다 하루 단위 일지처럼 읽힙니다." },
        { id: "recap-bubble", title: "읽히는 본문", description: "조금 긴 텍스트 블록을 그대로 보여줘 회고가 실제 일기처럼 남는 느낌을 만듭니다." },
        { id: "restrained-glow", title: "하단 탐색", description: "홈, 추가, 보관 이동축이 함께 보여 작성 이후의 동선도 끊기지 않습니다." },
        { id: "return-value", title: "다시 볼 화면", description: "완료된 기록을 닫아버리는 대신 나중에 다시 열 메인 뷰처럼 정리합니다." },
      ],
      visual: createHomeDiaryVisual("Daily Log 감정 일기 완성과 요약 화면"),
    },
    {
      id: "scene-ai",
      eyebrow: "Scene 03",
      title: "대화기반 일정 자동 저장",
      description: "대화 기반으로 생성된 일정과 캘린더에 자동으로 연동까지",
      cards: [
        { id: "photo-reflection", title: "월 단위 헤더", description: "상단의 날짜 맥락이 기록을 한 번의 입력이 아니라 흐름 속 장면으로 묶어줍니다." },
        { id: "ai-interpretation", title: "저장된 장면", description: "사진과 텍스트가 함께 남아 있어 그날의 분위기를 더 선명하게 되살립니다." },
        { id: "next-step", title: "AI 해석 문장", description: "요약은 원문을 지우지 않고, 감정과 의미를 다시 읽기 쉬운 문장으로 덧붙입니다." },
        { id: "calm-storage", title: "차분한 아카이브", description: "장식보다 정돈을 우선한 화면이라 시간이 지나도 편하게 훑어볼 수 있습니다." },
      ],
      visual: createHomeArchiveVisual("Daily Log 사진 기록과 AI 해석 화면"),
    },
    {
      id: "scene-next-loop",
      eyebrow: "Scene 04",
      title: "개인 취향 기반 내일 추천",
      description: "기록이 끝난 뒤에도, 다음 하루로 이어지게.",
      cards: [
        { id: "small-suggestion", title: "감정 요약", description: "오늘의 대표 감정을 먼저 보여줘 회고의 결론이 빠르게 남습니다." },
        { id: "resume-cue", title: "패턴 차트", description: "간단한 시각 요소가 그날의 상태를 직관적으로 읽게 하되 과하게 복잡하지 않습니다." },
        { id: "gentle-feedback", title: "내일의 제안", description: "감정이 남아 있을 때 바로 이어볼 수 있는 다음 행동 문장을 붙여줍니다." },
        { id: "habit-loop", title: "한 화면 마무리", description: "핵심 결과를 한 장 안에 묶어 흐름의 끝이 깔끔하게 정리됩니다." },
      ],
      visual: createHomeNextLoopVisual("Daily Log 다음 행동 제안과 회고 연결 화면"),
    },
  ],
  values: {
    eyebrow: "Why It Works",
    title: "한 번에 다 설명하지 않아도, 핵심 가치가 빠르게 읽히는 구조입니다.",
    description:
      "홈은 제품의 모든 기능을 나열하지 않습니다. 대신 설치, 반복 사용, 신뢰, 지원 흐름처럼 실제 전환과 재방문에 영향을 주는 요소만 짧게 압축합니다.",
    cards: [
      {
        id: "same-viewport",
        title: "설치와 이해를 같은 시야 안에 둡니다.",
        description:
          "첫 화면에서 바로 다운로드로 밀어붙이기보다, 설치 이유와 제품 흐름이 함께 읽히는 구성을 만들어 전환의 부담을 줄입니다.",
        tone: "accent",
      },
      {
        id: "short-copy-large-device",
        title: "메시지는 짧게, 디바이스는 크게.",
        description: "각 장면이 전달하는 메시지를 하나로 줄이고 대표 스크린을 크게 보여주어 정보가 흩어지지 않게 합니다.",
      },
      {
        id: "selective-emphasis",
        title: "밝은 베이스 위에 선택적 집중만 더합니다.",
        description: "네 장면 모두 같은 밝은 surface 위에 두고, 대비는 디바이스 화면과 여백의 리듬으로 만듭니다.",
      },
      {
        id: "support-and-policy",
        title: "지원과 정책도 제품 흐름의 일부로 둡니다.",
        description: "설치 후 막히는 지점, 정책 확인, 로드맵 확인을 모두 같은 네비게이션 안에 배치해 신뢰를 높입니다.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready To Start",
    title: "랜딩은 짧게 읽히고, 실제 설치와 지원은 더 빠르게 이어지게 했습니다.",
    description:
      "지금은 Android APK를 중심으로 가장 짧은 설치 경로를 제공합니다. 더 자세한 가이드, 지원, 정책 문서는 각각의 페이지에서 같은 디자인 흐름으로 이어집니다.",
    primaryLabel: "다운로드 페이지",
    secondaryLabel: "지원 보기",
    footerLinks: [
      { id: "roadmap", href: "/roadmap", label: "로드맵" },
      { id: "privacy", href: "/privacy", label: "개인정보처리방침" },
      { id: "terms", href: "/terms", label: "이용약관" },
    ],
  },
  downloadSection: {
    eyebrow: "Install Now",
    title: "홈페이지에서 바로 설치 경로를 확인하고 내려받을 수 있습니다.",
    description:
      "현재 공개 버전은 Android APK v1.0.14입니다. 랜딩에서 바로 다운로드로 이어지고 Vercel 배포 환경에서도 GitHub Release 경로를 그대로 이어받도록 준비했습니다.",
    releaseLabel: "Latest Release",
    updatedLabel: "업데이트",
    packageLabel: "패키지",
  },
};
