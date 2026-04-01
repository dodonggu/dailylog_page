import type {
  PageCtaContent,
  PageMetadataContent,
  QuestionAnswerContent,
  SectionIntroContent,
  TitledItemContent,
} from "@/lib/content/page-content-types";

export type DownloadPageContent = {
  metadata: PageMetadataContent;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    releaseCard: {
      label: string;
      packageSizeLabel: string;
      updatedLabel: string;
    };
    currentPackageCard: {
      label: string;
      directBadge: string;
      fallbackBadge: string;
      deliveryPathLabel: string;
      currentFileSizeLabel: string;
      verifiedAtLabel: string;
      directSourceLabel: string;
      fallbackSourceLabel: string;
    };
  };
  beforeInstall: SectionIntroContent & {
    items: TitledItemContent[];
  };
  installSteps: SectionIntroContent & {
    items: TitledItemContent[];
  };
  troubleshooting: SectionIntroContent & {
    items: TitledItemContent[];
  };
  quickAnswers: {
    label: string;
    items: QuestionAnswerContent[];
  };
  cta: PageCtaContent;
};

export const downloadPageContent: DownloadPageContent = {
  metadata: {
    title: "다운로드",
    description:
      "Android APK 다운로드, QR 연결, 지원 OS, 설치 가이드를 한 번에 확인할 수 있는 Daily Log 다운로드 페이지입니다.",
    path: "/download",
  },
  intro: {
    eyebrow: "Download",
    title: "설치 흐름과 현재 배포 상태를 같은 시야 안에 모았습니다.",
    description:
      "이 페이지는 모바일에서는 설치 액션을 먼저 보여주고, 데스크톱에서는 QR handoff와 배포 상태를 함께 보여줍니다. 아직 준비되지 않은 채널은 상태만 분명하게 안내합니다.",
    primaryLabel: "Android APK 받기",
    secondaryLabel: "설치 순서 보기",
    releaseCard: {
      label: "Release",
      packageSizeLabel: "패키지 크기",
      updatedLabel: "업데이트",
    },
    currentPackageCard: {
      label: "Current package",
      directBadge: "Direct",
      fallbackBadge: "Fallback",
      deliveryPathLabel: "전달 경로",
      currentFileSizeLabel: "현재 파일 크기",
      verifiedAtLabel: "확인 시점",
      directSourceLabel: "서버에서 직접 제공 중",
      fallbackSourceLabel: "GitHub Releases 대체 경로 사용",
    },
  },
  beforeInstall: {
    eyebrow: "Before Install",
    title: "설치 전에 꼭 알아야 할 정보만 먼저 정리했습니다.",
    description:
      "설치를 방해하는 실제 요인만 먼저 보여주고, 나머지 설명은 뒤로 미뤘습니다. 읽는 순서가 자연스럽게 이어지도록 구성했습니다.",
    items: [
      {
        id: "android-first",
        title: "Android 우선 배포",
        description:
          "현재 공개 체험은 Android APK 중심으로 제공됩니다. 사용자는 가장 짧은 경로로 실제 제품 흐름을 경험할 수 있습니다.",
      },
      {
        id: "desktop-qr",
        title: "데스크톱에서는 QR로 연결",
        description:
          "데스크톱 방문자는 QR 코드를 통해 모바일 설치 흐름으로 바로 이동할 수 있습니다. 설명과 설치 경로를 한 화면에 함께 제공합니다.",
      },
      {
        id: "iphone-status",
        title: "iPhone은 준비 상태를 명확히 안내",
        description:
          "아직 준비되지 않은 플랫폼은 빈 링크 대신 출시 예정 상태로 안내해 혼란을 줄이고, 신뢰를 해치지 않도록 구성합니다.",
      },
    ],
  },
  installSteps: {
    eyebrow: "Install Steps",
    title: "설치 경로는 길지 않게, 어떤 기기에서 와도 같아야 합니다.",
    description:
      "PC와 모바일 어디서 들어오더라도 같은 목표를 향해 움직이도록 단계를 짧게 유지했습니다.",
    items: [
      {
        id: "open-download-page",
        title: "1. 다운로드 페이지 열기",
        description: "Android 기기에서 직접 열거나, 데스크톱에서 QR 코드를 스캔해 모바일로 이동합니다.",
      },
      {
        id: "download-apk",
        title: "2. APK 내려받기",
        description: "Android APK 다운로드 버튼을 눌러 현재 배포 중인 APK 파일을 내려받습니다.",
      },
      {
        id: "allow-install",
        title: "3. 설치 권한 허용",
        description:
          "처음 설치하는 경우 브라우저 또는 파일 앱의 알 수 없는 앱 설치 권한을 허용해야 할 수 있습니다.",
      },
      {
        id: "launch-and-checkin",
        title: "4. 앱 실행 후 체크인 시작",
        description: "앱을 열고 초기 안내를 마치면 곧바로 Daily Log의 체크인 흐름을 체험할 수 있습니다.",
      },
    ],
  },
  troubleshooting: {
    eyebrow: "Troubleshooting",
    title: "설치가 막히면 가장 먼저 확인할 항목부터 보여드립니다.",
    description:
      "데모 배포 단계에서 자주 발생하는 이슈를 중심으로 스스로 확인 가능한 항목을 먼저 정리했습니다.",
    items: [
      {
        id: "file-not-downloading",
        title: "파일이 내려받아지지 않아요",
        description:
          "네트워크 상태와 저장 공간을 먼저 확인해 주세요. 모바일 브라우저의 다운로드 권한이 막혀 있지 않은지도 함께 확인하는 것이 좋습니다.",
      },
      {
        id: "install-button-inactive",
        title: "설치 버튼이 비활성처럼 보여요",
        description:
          "iPhone이나 준비되지 않은 배포 채널에서는 실제 설치 대신 상태 안내만 노출됩니다. Android 기기에서 다시 접속하면 설치 흐름을 바로 확인할 수 있습니다.",
      },
      {
        id: "app-not-launching",
        title: "설치 후 실행이 되지 않아요",
        description:
          "지원 OS 버전을 확인하고, 기존 데모 빌드가 설치되어 있다면 삭제 후 다시 시도해 주세요. 문제가 계속되면 지원 페이지의 문의 항목을 함께 보내주세요.",
      },
    ],
  },
  quickAnswers: {
    label: "Quick Answers",
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
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "설치 이후에도 지원과 정책 흐름은 같은 구조로 이어집니다.",
    description:
      "다운로드만 제공하는 페이지가 아니라, 막히는 순간 바로 지원과 정책 페이지로 넘어갈 수 있는 허브로 설계했습니다.",
    primaryHref: "/support",
    primaryLabel: "지원 보기",
    secondaryHref: "/privacy",
    secondaryLabel: "정책 보기",
  },
};
