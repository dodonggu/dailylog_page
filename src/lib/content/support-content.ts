import type {
  PageCtaContent,
  PageIntroCardContent,
  PageMetadataContent,
  QuestionAnswerContent,
  SectionIntroContent,
} from "@/lib/content/page-content-types";

type SupportTrackContent = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type SupportPageContent = {
  metadata: PageMetadataContent;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    cards: PageIntroCardContent[];
  };
  tracks: SectionIntroContent & {
    items: SupportTrackContent[];
  };
  bestContext: {
    label: string;
    items: Array<{
      id: string;
      text: string;
    }>;
  };
  faq: {
    label: string;
    items: QuestionAnswerContent[];
  };
  cta: PageCtaContent;
};

export const supportPageContent: SupportPageContent = {
  metadata: {
    title: "지원",
    description:
      "설치 문제, 계정 문의, 개인정보 요청, 데모 운영 안내를 확인할 수 있는 Daily Log 지원 페이지입니다.",
    path: "/support",
  },
  intro: {
    eyebrow: "Support",
    title: "설치부터 계정, 정책 문의까지 한 흐름으로 이어지는 지원 허브입니다.",
    description:
      "지원 페이지는 랜딩의 연장선처럼 읽히도록 구성했습니다. 사용자가 가장 자주 찾는 흐름만 먼저 보여주고, 복잡한 설명은 필요한 곳에만 넣었습니다.",
    primaryLabel: "메일로 문의하기",
    cards: [
      {
        id: "contact-card",
        label: "Contact",
        title: "지원 채널",
        description: "문의 메일과 응답 시간을 가장 먼저 확인할 수 있도록 배치했습니다.",
      },
      {
        id: "before-you-send",
        label: "Before you send",
        title: "문제 상황을 짧게 정리해 보내주면 해결이 훨씬 빨라집니다.",
        description:
          "사용 기기, Android 버전, 문제 화면 캡처, 재현 순서를 함께 보내주면 첫 응답의 정확도가 더 높아집니다.",
        tone: "dark",
      },
    ],
  },
  tracks: {
    eyebrow: "Support Tracks",
    title: "필요한 지원 흐름을 유형별로 나눠 바로 찾을 수 있게 했습니다.",
    description:
      "설치, 계정, 개인정보 요청을 한 화면에 섞지 않고, 지금 필요한 안내만 빠르게 찾을 수 있도록 카드 형태로 분리했습니다.",
    items: [
      {
        id: "installation",
        title: "설치 문제",
        description: "다운로드, APK 권한, 실행 오류처럼 설치 단계에서 자주 발생하는 이슈를 빠르게 안내합니다.",
        bullets: [
          "Android 10 이상인지 확인",
          "브라우저 또는 파일 앱의 설치 권한 허용",
          "기기 저장 공간과 네트워크 상태 점검",
        ],
      },
      {
        id: "account",
        title: "계정 및 로그인",
        description: "데모 계정 생성, 로그인 실패, 계정 삭제 요청처럼 계정 관련 문의를 정리해 안내합니다.",
        bullets: [
          "가입한 이메일과 로그인 정보 확인",
          "중복 가입 또는 오타 여부 확인",
          "계정 삭제 요청 시 본인 확인 정보 함께 전달",
        ],
      },
      {
        id: "privacy",
        title: "개인정보와 권한",
        description: "알림, 마이크, 개인정보 동의처럼 민감한 항목은 별도 흐름으로 안내하고, 정책 문서와 연결합니다.",
        bullets: [
          "권한 요청의 목적과 사용 시점 안내",
          "정책 문서와 데모 상태를 함께 고지",
          "데이터 삭제 및 문의 채널 명시",
        ],
      },
    ],
  },
  bestContext: {
    label: "Best context to include",
    items: [
      { id: "device-and-android", text: "사용 기기명과 Android 버전" },
      { id: "reproduction-steps", text: "문제가 발생한 시점과 재현 순서" },
      { id: "screenshots", text: "설치 화면 또는 오류 메시지 캡처" },
      { id: "ownership-details", text: "개인정보/계정 요청 시 본인 확인 기본 정보" },
    ],
  },
  faq: {
    label: "FAQ",
    items: [
      {
        id: "web-availability",
        question: "웹에서 Daily Log를 바로 사용할 수 있나요?",
        answer:
          "현재 웹은 서비스 소개, 설치 유도, 지원과 정책 안내를 담당합니다. 실제 체크인과 기록, 분석 경험은 모바일 앱에서 제공됩니다.",
      },
      {
        id: "available-platform",
        question: "지금 바로 설치 가능한 플랫폼은 무엇인가요?",
        answer:
          "현재는 Android용 공개 APK가 준비되어 있습니다. iPhone용 TestFlight 또는 App Store 배포는 준비가 끝나는 대로 연결할 예정입니다.",
      },
      {
        id: "core-experience",
        question: "Daily Log에서 가장 중요한 경험은 무엇인가요?",
        answer:
          "짧은 대화형 체크인으로 하루를 정리하고, 감정을 읽고, 다음 행동까지 이어주는 흐름이 핵심입니다. 단순 기록보다 변화로 이어지는 경험에 초점을 맞추고 있습니다.",
      },
      {
        id: "privacy-and-permissions",
        question: "개인정보와 권한은 어떻게 다루나요?",
        answer:
          "데모 단계에서도 개인정보처리방침과 이용약관을 별도 페이지로 제공하고, 권한 요청은 체크인 경험과 분리된 안내 흐름으로 설명합니다.",
      },
      {
        id: "apk-warning",
        question: "APK 설치 중 경고가 보이면 어떻게 해야 하나요?",
        answer:
          "Android에서는 외부 APK 설치 시 보안 안내가 표시될 수 있습니다. 다운로드 페이지의 설치 가이드를 따라 브라우저 또는 파일 앱의 설치 권한을 허용해 주세요.",
      },
      {
        id: "account-deletion",
        question: "문의나 계정 삭제 요청은 어디로 보내면 되나요?",
        answer:
          "지원 페이지의 안내에 따라 문의 메일로 접수할 수 있습니다. 설치 환경, 기기 정보, 문제 재현 상황을 함께 보내주면 더 빠르게 확인할 수 있습니다.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "설치가 막히든 계정 요청이 생기든 같은 지원 흐름 안에서 해결되게 했습니다.",
    description:
      "지원이 제품과 분리된 별도 채널이 아니라, 설치와 신뢰 경험을 잇는 연장선이어야 한다고 보고 구성했습니다.",
    primaryHref: "/download",
    primaryLabel: "다운로드로 돌아가기",
    secondaryHref: "/privacy",
    secondaryLabel: "개인정보 문서 보기",
  },
};
