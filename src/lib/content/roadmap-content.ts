import type {
  PageCtaContent,
  PageIntroCardContent,
  PageMetadataContent,
  SectionIntroContent,
} from "@/lib/content/page-content-types";

type RoadmapPriorityContent = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  deliverables: string[];
};

type ValidationPlanContent = {
  id: string;
  title: string;
  metrics: string[];
};

export type RoadmapPageContent = {
  metadata: PageMetadataContent;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PageIntroCardContent[];
  };
  currentDiagnosis: SectionIntroContent & {
    focusCard: {
      label: string;
      title: string;
      description: string;
    };
    previewItems: RoadmapPriorityContent[];
  };
  priorities: SectionIntroContent & {
    items: RoadmapPriorityContent[];
  };
  validation: SectionIntroContent & {
    items: ValidationPlanContent[];
  };
  trustAndPaid: {
    trustCard: {
      label: string;
      title: string;
      items: Array<{
        id: string;
        text: string;
      }>;
    };
    paidCard: {
      label: string;
      title: string;
      description: string;
      items: Array<{
        id: string;
        text: string;
      }>;
    };
  };
  cta: PageCtaContent;
};

const roadmapPriorities: RoadmapPriorityContent[] = [
  {
    id: "first-session-value",
    eyebrow: "우선순위 1",
    title: "첫 세션 종료 화면 고도화",
    summary:
      "지금 가장 먼저 필요한 것은 첫 사용 직후의 가치 체감입니다. 결과 화면이 예쁘기만 해서는 안 되고, 오늘의 정리와 다음 행동을 동시에 줘야 합니다.",
    deliverables: ["오늘의 감정 한줄 요약", "오늘 꼭 해볼 행동 1개", "내일 다시 열 이유 1개"],
  },
  {
    id: "return-loop",
    eyebrow: "우선순위 2",
    title: "재방문 흐름 만들기",
    summary:
      "사용자는 기능 때문에가 아니라 습관과 누적 의미 때문에 남습니다. 다시 열 이유를 화면과 데이터 양쪽에서 설계해야 합니다.",
    deliverables: ["알림과 연속 기록", "지난 기록 다시 보기", "이번 주 감정 변화와 오늘의 회고"],
  },
  {
    id: "contextual-recommendations",
    eyebrow: "우선순위 3",
    title: "추천 품질을 맥락형으로 개선",
    summary:
      "행동 추천이 뻔하면 곧바로 신뢰를 잃습니다. 오늘 기록의 맥락을 반영한 짧고 구체적인 제안이 필요합니다.",
    deliverables: ["기록 맥락 기반 추천 문장", "추천 피드백: 도움 됐어요 / 아쉬워요", "추천 품질 개선에 필요한 반응 수집"],
  },
  {
    id: "trust-and-ownership",
    eyebrow: "우선순위 4",
    title: "신뢰와 데이터 소유권 강화",
    summary:
      "일기 앱은 민감한 데이터 서비스입니다. 기능보다 먼저 안전감과 통제권을 줘야 장기 사용과 과금이 가능합니다.",
    deliverables: ["정책 최종본과 AI 처리 범위 설명", "계정 삭제와 데이터 내보내기", "권한 요청 이유를 앱과 웹 모두에 명시"],
  },
  {
    id: "accumulated-value",
    eyebrow: "우선순위 5",
    title: "누적 가치 화면 설계",
    summary:
      "장기 사용 가치는 오늘 기록이 아니라, 쌓일수록 나를 더 잘 이해해 주는 서비스라는 약속에서 나옵니다.",
    deliverables: ["감정 패턴과 반복 사건 추적", "자주 흔들리는 시간대 분석", "추천 실행 여부를 묶은 개인 변화 화면"],
  },
  {
    id: "paid-after-value",
    eyebrow: "우선순위 6",
    title: "과금은 누적 가치 뒤에 연다",
    summary:
      "초기에는 무료 구간의 유용함이 먼저입니다. 유료는 고급 인사이트, 리포트, 검색, 동기화, 백업처럼 축적 가치 중심으로 여는 편이 맞습니다.",
    deliverables: ["주간·월간 리포트", "고급 검색과 여러 기기 동기화", "백업·내보내기·맞춤 템플릿"],
  },
];

const validationPlans = [
  {
    id: "first-user-validation",
    title: "첫 사용자 검증",
    metrics: ["체크인 완료율", "추천 만족도", "다음 날 다시 열 의향"],
  },
  {
    id: "early-retention",
    title: "초기 유지 검증",
    metrics: ["D1·D3·D7 재방문", "하루 평균 기록 시간", "추천 실행률"],
  },
  {
    id: "qualitative-interviews",
    title: "질적 인터뷰",
    metrics: ["기분이 정리됐는지", "다음 행동이 명확해졌는지", "다시 열 이유가 생겼는지"],
  },
  {
    id: "trust-validation",
    title: "신뢰 검증",
    metrics: ["개인정보 안내 이해도", "삭제/내보내기 기대치", "권한 요청에 대한 불안 지점"],
  },
  {
    id: "paid-validation",
    title: "과금 검증",
    metrics: ["5~7일 사용 후 지불 의향", "무료/유료 경계 인식", "유료 가치로 느끼는 기능"],
  },
];

export const roadmapPageContent: RoadmapPageContent = {
  metadata: {
    title: "제품 로드맵",
    description:
      "Daily Log가 반복 사용되는 서비스가 되기 위해 다음 단계에서 집중할 제품 우선순위와 검증 기준을 정리한 페이지입니다.",
    path: "/roadmap",
  },
  intro: {
    eyebrow: "Roadmap",
    title: "예쁜 체험에서 끝나지 않고, 다시 열게 만드는 제품으로 가는 다음 단계입니다.",
    description:
      "로드맵 페이지는 웹사이트 수식보다 제품의 반복 사용성과 누적 가치를 먼저 설명합니다. 무엇을 만들지보다 왜 그 순서인지가 먼저 읽히도록 정리했습니다.",
    cards: [
      {
        id: "current-view",
        label: "Current View",
        title: "먼저 써볼 가치,\n다음은 다시 열 가치.",
        description: "지금 단계의 기준은 다운로드 수보다 첫 체험 만족과 반복 사용을 더 강하게 만드는 일입니다.",
      },
      {
        id: "focus",
        label: "Focus",
        title: "AI 회고 경험의 반복 사용 가치를 먼저 높입니다.",
        description: "웹은 설치와 신뢰 허브 역할을 하고, 실제 제품 경험 검증은 모바일 앱 안에서 이뤄집니다.",
        tone: "dark",
      },
    ],
  },
  currentDiagnosis: {
    eyebrow: "Current Diagnosis",
    title: "현재 진단은 꽤 분명합니다.",
    description:
      "대화형 기록과 감정 해석은 충분히 매력적입니다. 이제는 예쁜 첫 경험보다 반복 사용과 누적 가치가 더 강하게 남아야 합니다.",
    focusCard: {
      label: "What changes next",
      title: "일기 앱을 넘어서\n반복 사용되는 회고 도구로 갑니다.",
      description: "다음 단계의 성공 기준은 다시 열기, 추천 실행, 누적 기록 가치입니다.",
    },
    previewItems: roadmapPriorities.slice(0, 3),
  },
  priorities: {
    eyebrow: "Priorities",
    title: "다음 배치에서 해결할 순서를 제품 언어로 정리했습니다.",
    description: "모든 것을 동시에 늘리기보다 반복 사용과 신뢰를 강하게 만드는 순서로 우선순위를 배치했습니다.",
    items: roadmapPriorities,
  },
  validation: {
    eyebrow: "Validation",
    title: "좋아 보이는 기능보다 먼저 검증할 지표입니다.",
    description:
      "다음 단계는 감이 아니라 지표와 인터뷰로 판단해야 합니다. 사용자가 실제로 더 명확해졌는지, 다시 열 이유가 생기는지가 중요합니다.",
    items: validationPlans,
  },
  trustAndPaid: {
    trustCard: {
      label: "Trust & Ownership",
      title: "민감한 기록 서비스는 기능보다 먼저 신뢰를 만들어야 합니다.",
      items: [
        { id: "final-policy", text: "정책 최종본 공개" },
        { id: "account-deletion", text: "계정 삭제 요청 흐름 제공" },
        { id: "data-export", text: "데이터 내보내기 준비" },
        { id: "ai-scope", text: "AI 처리 범위와 저장 범위 설명" },
        { id: "permission-rationale", text: "권한 요청 이유를 앱과 웹 모두에 명시" },
      ],
    },
    paidCard: {
      label: "Paid Direction",
      title: "과금은 누적 가치가 분명해진 뒤에 여는 편이 맞습니다.",
      description:
        "무료 구간의 유용함이 충분히 증명된 뒤에, 더 깊은 인사이트와 관리 경험 영역에서 유료 방향을 여는 것이 자연스럽습니다.",
      items: [
        { id: "insights", text: "고급 인사이트와 변화 리포트" },
        { id: "weekly-reports", text: "주간·월간 회고 리포트" },
        { id: "advanced-search", text: "고급 검색과 회고 필터" },
        { id: "multi-device-sync", text: "여러 기기 동기화" },
        { id: "backup-export", text: "백업과 데이터 내보내기" },
        { id: "templates", text: "맞춤 템플릿과 개인화 설정" },
      ],
    },
  },
  cta: {
    eyebrow: "Next Step",
    title: "웹은 신뢰 허브로 남기고, 제품의 강도는 모바일 안에서 높이겠습니다.",
    description:
      "더 화려하게 만드는 것보다 첫 회고 가치, 반복 사용, 추천 품질, 데이터 통제권을 실제 제품 안에서 강화하는 일이 우선입니다.",
    primaryHref: "/download",
    primaryLabel: "APK 다운로드",
    secondaryHref: "/support",
    secondaryLabel: "지원 보기",
  },
};
