import type {
  PageCtaContent,
  PageIntroCardContent,
  PageMetadataContent,
  TextSection,
} from "@/lib/content/page-content-types";

type LegalDocumentPageContent = {
  metadata: PageMetadataContent;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PageIntroCardContent[];
  };
  draftNotice: string;
  sections: TextSection[];
  cta: PageCtaContent;
  footerNote?: {
    id: string;
    text: string;
  };
};

export type LegalPageContent = {
  privacy: LegalDocumentPageContent;
  terms: LegalDocumentPageContent;
};

const privacySections: TextSection[] = [
  {
    id: "document-overview",
    title: "1. 문서 안내",
    paragraphs: [
      "이 문서는 Daily Log 데모 랜딩과 데모 앱 이용을 위한 개인정보처리방침 초안입니다.",
      "정식 공개 전에는 실제 운영 환경, 수집 항목, 보관 기간, 외부 서비스 연동 여부에 맞춰 최종 문안으로 교체되어야 합니다.",
    ],
  },
  {
    id: "collectable-information",
    title: "2. 수집할 수 있는 정보",
    paragraphs: [
      "Daily Log는 계정 생성과 서비스 이용 과정에서 기본 계정 정보, 권한 동의 상태, 기록 생성 과정에서 발생하는 메타데이터를 처리할 수 있습니다.",
    ],
    bullets: [
      "이메일, 닉네임 등 계정 식별 정보",
      "알림, 마이크, 개인정보 동의 여부",
      "체크인 입력 내용, 요약 결과, 감정 분석 결과",
      "기기 정보, 앱 버전, 오류 대응을 위한 기술 정보",
    ],
  },
  {
    id: "usage-purpose",
    title: "3. 이용 목적",
    paragraphs: [
      "수집된 정보는 계정 관리, 체크인 및 일기 생성, 감정 분석, 행동 추천, 캘린더 회고, 고객 지원과 서비스 품질 개선을 위해 사용됩니다.",
    ],
  },
  {
    id: "retention-and-protection",
    title: "4. 보관과 보호",
    paragraphs: [
      "데모 단계에서는 최소한의 운영 정보만 유지하는 방향을 기본 원칙으로 삼고 있습니다.",
      "보관 기간, 접근 권한, 외부 위탁 여부는 정식 운영 정책이 확정되면 문서에 명시되어야 합니다.",
    ],
  },
  {
    id: "user-rights",
    title: "5. 이용자의 권리",
    paragraphs: [
      "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있으며, 계정 삭제 요청도 지원 채널을 통해 접수할 수 있습니다.",
    ],
  },
  {
    id: "privacy-contact",
    title: "6. 문의",
    paragraphs: ["개인정보처리방침에 대한 문의와 삭제 요청은 지원 채널을 통해 접수할 수 있습니다."],
  },
];

const termsSections: TextSection[] = [
  {
    id: "terms-overview",
    title: "1. 문서 안내",
    paragraphs: [
      "이 문서는 Daily Log 데모 랜딩과 데모 앱 제공을 위한 이용약관 초안입니다.",
      "정식 운영 전에는 실제 서비스 범위, 계정 정책, 책임 제한, 유료 기능 여부에 맞춘 최종 약관으로 교체되어야 합니다.",
    ],
  },
  {
    id: "service-nature",
    title: "2. 서비스의 성격",
    paragraphs: [
      "Daily Log는 대화형 체크인, 감정 분석, 행동 추천, 회고 경험을 중심으로 하는 모바일 우선 서비스입니다.",
      "현재 공개된 버전은 데모 성격을 가지며 일부 기능이나 화면, 배포 방식은 변경될 수 있습니다.",
    ],
  },
  {
    id: "accounts-and-security",
    title: "3. 계정과 보안",
    paragraphs: ["이용자는 정확한 계정 정보를 제공해야 하며, 계정 보안 관리 책임은 이용자에게 있습니다."],
    bullets: ["허위 정보 등록 금지", "타인의 계정 또는 정보 무단 사용 금지", "서비스 운영을 방해하는 행위 금지"],
  },
  {
    id: "usage-restrictions",
    title: "4. 이용 제한",
    paragraphs: [
      "비정상적인 사용, 서비스 안정성을 해치는 행위, 다른 이용자에게 피해를 주는 행위가 확인될 경우 서비스 이용이 제한될 수 있습니다.",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. 지식재산권",
    paragraphs: [
      "서비스 화면, 문구, 디자인, 스크린샷, 코드, 기타 결과물에 대한 권리는 Daily Log 또는 정당한 권리자에게 귀속됩니다.",
    ],
  },
  {
    id: "changes-and-termination",
    title: "6. 변경과 종료",
    paragraphs: [
      "데모 버전은 사전 고지 없이 변경되거나 중단될 수 있습니다.",
      "정식 운영 전에는 기능, 지원 정책, 배포 채널, 책임 범위가 재정의될 수 있습니다.",
    ],
  },
  {
    id: "terms-contact",
    title: "7. 문의",
    paragraphs: ["이용약관에 대한 문의는 지원 채널을 통해 접수할 수 있습니다."],
  },
];

export const legalPageContent: LegalPageContent = {
  privacy: {
    metadata: {
      title: "개인정보처리방침",
      description: "Daily Log 데모 버전의 개인정보처리방침 초안을 확인할 수 있는 페이지입니다.",
      path: "/privacy",
    },
    intro: {
      eyebrow: "Privacy",
      title: "Daily Log 개인정보처리방침 초안",
      description:
        "문서 페이지는 설치와 지원 흐름과 분리되지 않도록 같은 디자인 시스템 안에 두었습니다. 현재 문서는 데모 공개용 초안이며, 실제 운영 정책에 맞춘 최종 검토가 필요합니다.",
      cards: [
        {
          id: "document-status",
          label: "Document Status",
          title: "데모 초안",
          description: "기준일과 문의 채널을 첫 카드에서 바로 확인할 수 있게 구성했습니다.",
        },
        {
          id: "finalization-note",
          label: "Before Launch",
          title: "정식 공개 전 실제 운영 기준으로 문안을 최종화해야 합니다.",
          description: "보관 기간, 외부 연동, 삭제 절차, 국외 이전 여부를 실제 운영안에 맞춰 반영해야 합니다.",
        },
      ],
    },
    draftNotice:
      "이 문서는 법률 검토 완료본이 아닙니다. 실제 운영 전에는 보관 기간, 위탁 처리, 삭제 절차, 아동 보호 항목 등을 서비스 정책에 맞게 보완해야 합니다.",
    sections: privacySections,
    cta: {
      eyebrow: "Policy Navigation",
      title: "법적 문서도 설치와 신뢰 흐름의 일부로 읽히게 유지합니다.",
      description: "개인정보처리방침을 확인한 뒤 이용약관이나 지원 페이지로 자연스럽게 이어질 수 있도록 구조를 맞췄습니다.",
      primaryHref: "/terms",
      primaryLabel: "이용약관 보기",
      secondaryHref: "/support",
      secondaryLabel: "지원 보기",
    },
  },
  terms: {
    metadata: {
      title: "이용약관",
      description: "Daily Log 데모 버전의 이용약관 초안을 확인할 수 있는 페이지입니다.",
      path: "/terms",
    },
    intro: {
      eyebrow: "Terms",
      title: "Daily Log 이용약관 초안",
      description:
        "이 문서는 데모 릴리스와 랜딩 공개를 위해 정리한 초안입니다. 실제 운영 범위, 책임 제한, 계정 정책이 확정되면 최종 약관으로 교체되어야 합니다.",
      cards: [
        {
          id: "document-status",
          label: "Document Status",
          title: "데모 기준 초안",
          description: "정식 공개 전 최종 약관으로 교체가 필요합니다.",
        },
        {
          id: "finalization-note",
          label: "Before Launch",
          title: "실제 운영 기준에 맞춘 재검토가 필요합니다.",
          description: "서비스 범위, 책임 제한, 정책 변경 고지 방식, 이용 제한 조건은 실제 운영안에 맞춰 다시 검토해야 합니다.",
        },
      ],
    },
    draftNotice:
      "현재 문서는 구조를 먼저 정리한 초안입니다. 실제 서비스의 정의, 이용 제한, 책임 범위, 공지 절차는 운영 형태에 맞춰 재검토가 필요합니다.",
    sections: termsSections,
    cta: {
      eyebrow: "Policy Navigation",
      title: "약관 페이지에서도 지원과 개인정보 문서로 자연스럽게 이어지게 했습니다.",
      description: "문서 확인이 끝난 뒤에도 설치/지원 흐름을 잃지 않도록 공통 CTA와 링크 구조를 맞췄습니다.",
      primaryHref: "/privacy",
      primaryLabel: "개인정보처리방침 보기",
      secondaryHref: "/support",
      secondaryLabel: "지원 보기",
    },
    footerNote: {
      id: "contact-email",
      text: "문의 메일은 support@dailylog.app 입니다.",
    },
  },
};
