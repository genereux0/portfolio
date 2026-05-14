/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight,
  ChevronDown,
  Monitor,
  Layout,
  Smartphone,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  ArrowDown,
  ArrowLeft,
  Pointer,
  ArrowRight,
  Hand,
  Maximize2,
  X,
  MessageCircle
} from "lucide-react";
import { ButterflyCursor } from "./components/ButterflyCursor";
import { AnimatePresence } from "motion/react";

const PROJECTS = [
  {
    id: 1,
    title: "재고 비용 22억 원을 절감한 압연롤 공장 운영 신규 시스템 구축",
    client: "포스코 구매 DX",
    description: "재고 관리 과정을 분석해 데이터를 시각화한 모니터링 시스템으로 업무를 효율화하고, AI 자동 구매로 공장 운영 비용을 절감하는 시스템을 설계했습니다.",
    tags: ["현장 리서치 & 사용자 분석", "기존 운영 데이터 분석 & 인사이트 도출", "솔루션 & 기능 기획", "UX/UI 설계", "디자인 시스템으로 UI 제작"],
    image: "/압연롤썸넬.png",
    icon: <Monitor className="w-5 h-5" />,
    details: {
      role: "UX 리서치 / UX 기획 / UI 설계 총괄",
      contribution: "80%",
      period: "2025.03 ~ 2025.11",
      challenge: "수작업과 '감'에 의존하던 압연롤 관리를 데이터 시각화와 AI 발주 모델로 전환하여 22억 원의 비용을 절감했습니다.",
      fullStory: {
        summary: "기존 수작업과 '감'에 의존하던 아날로그식 압연롤 재고 관리 프로세스를 데이터 시각화 대시보드와 AI 자동 발주 시스템으로 전면 개편했습니다. 리서치부터 설계까지 전 과정을 주도하며 연간 22억 원의 운영 비용을 절감하는 가시적인 성과를 도출했습니다.",
        problem: "현장 관리자의 습관적인 과다 구매 관행으로 인해, 사용하지 않는 압연롤 재고가 쌓여 비용 손실을 초래하고 있었습니다.",
        cause: "전용 업무 시스템 부재로 인한 재고 불안감. 객관적 데이터가 아닌 주관적인 감에 의존한 구매 프로세스가 고착화되어 있었습니다.",
        background: "압연롤은 얇은 철판을 만드는 밀대 모양의 자재로, 사용 할수록 소모되어 주기적인 교체가 필수적인 소모품입니다.",
        analysis: [
          { title: "전용 업무 시스템이 없어, 재고 현황 파악 불가" },
          { title: "재고 부족에 대한 불안으로 과도한 선구매 발생" },
          { title: "관리자는 객관적 데이터 없이 감에 의존해 구매" }
        ],
        insights: [
          { title: "재고 데이터 정리", desc: "압연롤 재고 수백 개를 개별로 데이터 정리" },
          { title: "가용 상태 기록", desc: "가용 상태(사용-고장-수리 등) 기록" },
          { title: "잔여 수명 예측", desc: "사용 후 남은 수명을 계산하고, 이를 응용해 교체일을 미리 예측" },
          { title: "구매 시기 판단", desc: "➌에서 계산한 데이터를 바탕으로 구매 수량과 시기를 판단" }
        ],
        solutions: [
          { 
            insights: [
              { 
                title: "재고 부족 방지 기능 필요", 
                desc: "압연롤의 잔여 수명을 계산하여 곧 다 쓰는 압연롤을 미리 파악하고 대비한다." 
              },
              { 
                title: "데이터 시각화 필요", 
                desc: "주의가 필요한 압연롤(고장 · 수명 임박)을 빠르게 발견해야 한다." 
              }
            ],
            title: "실시간 재고 모니터링 뷰", 
            desc: "핵심 데이터를 시각화하여, 수백 개의 재고 상태를 한눈에 보여줍니다.",
            image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200",
            showMockup: true
          },
          { 
            insights: [
              { 
                title: "계산 업무 자동화", 
                desc: "교체일 · 구매 계획 등 반복적인 계산은 시스템으로 자동화한다." 
              }
            ],
            title: "AI 자동 구매 시스템", 
            desc: "안전 재고 기준과 연계하여 과거 소모 패턴을 학습시켜 최적의 발주 수량과 시기를 예측하게 합니다." 
          }
        ],
        outcomes: [
          { 
            label: "01. Cost Saving", 
            value: "22억 원 절감", 
            desc: "막연한 불안감에 의한 과다 구매를 방지하고, 정확한 필요 수량만큼 구매하여 재고 비용을 절감했습니다. 연간 재고 관리 비용 약 650억 원 중, 매년 22억 원의 비용 절감 효과를 산출했습니다." 
          },
          { 
            label: "02. Automation", 
            value: "업무 자동화", 
            desc: "매일 수작업으로 만들던 재고 관리 엑셀이 시스템화되어 업무 부담이 크게 줄었습니다. 단순 반복적인 구매 계산은 AI가 수행하고, 관리자는 교체/수리/폐기 등 더 중요한 핵심 업무에 집중할 수 있습니다." 
          },
          { 
            label: "03. Satisfaction", 
            value: "관리자 만족도", 
            desc: "실시간으로 재고 상황을 정확히 파악할 수 있어, 공장 내 폐기 및 교체 작업이 훨씬 빠르고 정확해졌습니다. 현장의 목소리를 반영한 UI로 실제 업무 활용도가 매우 높습니다." 
          }
        ],
        designShowcases: [
          {
            title: "재고 핵심 데이터를 시각화한 모니터링 뷰",
            description: "곧 없어지는 압연롤을 빠르게 발견하고 대비 가능",
            assetLabel: "High-Fidelity UI Presentation"
          },
          {
            title: "AI를 활용한 자동 주문 시스템",
            description: "AI로 구매 수량과 시기를 더 빠르고 정확하게 산출합니다. 관리자는 결과 값을 검토하는 역할만 담당하게 되어, 업무 부담이 감소합니다.",
            assetLabel: "Interactive Prototype Preview"
          }
        ]
      }
    }
  },
  {
    id: 2,
    title: "재고 비용 9억 원을 절감한\n재고 구매 신규 시스템 구축",
    client: "포스코 구매 DX",
    description: "공장의 자재 구매 방식을 분석해, 과도한 선구매를 방지하는 구매 시스템을 구축하여 회사의 비용 손실을 줄였습니다.",
    tags: ["현장 리서치 & 사용자 분석", "인사이트 발굴", "솔루션 & 기능 기획", "UX/UI 설계", "디자인 시스템으로 UI 제작"],
    image: "https://images.unsplash.com/photo-1504868584819-f8eecede5ec9?auto=format&fit=crop&q=80&w=1200",
    icon: <Monitor className="w-5 h-5" />,
    details: {
      role: "UX 리서치/UX 기획/디자인 시스템 기반 UI 설계",
      period: "2025.06 ~ 2025.11",
      contribution: "70%",
      challenge: "불투명한 자재 수급 예측으로 인한 과다 선구매 문제를 해결하기 위한 프로세스 설계.",
      results: ["재고 비용 9억 원 절감", "구매 정확도 25% 향상", "사용자 편의 중심 데이터 필터링 도입"],
      fullStory: {
        summary: "재고 수급 예측의 불투명함으로 인한 과다 선구매 문제를 해결하기 위해, 사내외 재고 현황을 통합 시각화하고 최적의 구매 시점을 판단할 수 있는 시스템을 구축했습니다.",
        problem: "재고 부족에 대한 불안감으로 미리 많이 구매하는 관례가 기업의 자금 손실을 발생시키고 있습니다.",
        improvementGoal: "관리자의 불안함을 해소하고 불필요한 선구매를 예방하기",
        insightHeader: "우수 사례 분석",
        insightQuote: "재고 효율이 높은 부서의 구매 프로세스를 분석했습니다.",
        solutionQuote: "선구매를 예방할 수 있는 인사이트를 확보",
        insights: [
          { desc: "구매 요청하기 전,\n근처 공급사에 연락해 재고 수량을 미리 확인한다." },
          { desc: "가까운 공급사에 재고가 충분히 있으면 미리 구매하지 않고 필요할 때 구매한다." }
        ],
        solutions: [
          { 
            insights: [
              { desc: "공장의 창고 수량만이 아니라, 공급사 보유 수량도 알 수 있어야 한다." },
              { desc: "공급사로부터 배송 기간을 예측할 수 있으면 안심하고 미리 구매하지 않는다." }
            ]
          }
        ],
        outcomes: [
          { 
            label: "01. Cost Saving", 
            value: "9억 원 절감", 
            desc: "사내/사외 재고를 위치 기반으로 가시화하여 정보 노출함으로써 불필요한 선구매를 획기적으로 줄여 9억 원의 비용을 절감했습니다." 
          },
          { 
            label: "02. Visualization", 
            value: "정보 투명성 확보", 
            asIs: "재고 확보 가능성을 알 수 없는 상황에서\n재고 대량 선구매 발생",
            solution: "위치 기반으로\n국내/해외 재고 분포 현황 노출",
            toBe: "조달 가능한 수량과 시간을 알 수 있어,\n필요 수량만 제때 구매"
          }
        ],
        solutionItems: [
          {
            description: "창고 수량만 보고 구매하던 방식을 공급사 수량까지 합쳐서 보고 구매하는 구조로 전환\n→ 사내 창고 자재뿐만 아니라, 공급사별 재고 정보까지 한 화면에서 통합 조회",
            noImage: true
          },
          {
            description: "재고를 공급사로부터 얼마나 빨리 가져올 수 있는지가 중요한 판단 요소라는 점에 착안\n→ 공급사별 보유 재고 수량을 지도 위에 시각화",
            noImage: true
          },
          {
            title: "기대 효과",
            description: "관리자는 재고를 미리 구매해 쌓아두지 않아도 배송 기간을 예측해 적기에 필요한 수량만 구매할 수 있게 됩니다.",
            isSummary: true,
            noImage: true
          }
        ],
        designShowcases: [
          {
            title: "통합 재고 지도",
            description: "사내 창고 · 사외 공급사 재고 수량을 위치로 보여주는 통합 재고 지도\n→ 필요한 재고가 어디에 얼마나 있는지 파악 후, 구매 결정",
            assetLabel: "Integrated Inventory Map"
          },
          {
            title: "요약 대시보드",
            description: "홈 화면에서 재고 규모를 즉시 파악할 수 있는 요약 대시보드",
            assetLabel: "Summary Dashboard Overview"
          }
        ]
      }
    }
  },
  {
    id: 3,
    title: "거래 데이터를 활용한\n당근 거래 활성화 기능 설계",
    client: "신규 기능 기획 및 서비스 고도화",
    description: "거래 과정에서 발생하는 유저 행동 데이터를 활용하여 거래 전환율을 높이는 기능을 설계",
    tags: ["사용자 행동 분석 & 페인 포인트 발굴", "저니맵 설계", "데이터 인사이트 도출", "솔루션 & 기능 기획", "UX 설계", "UI 디자인"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    icon: <Smartphone className="w-5 h-5" />,
    details: {
      role: "유저 저니맵 / 거래 데이터 & 인사이트 도출/UX기획/UI디자인",
      period: "2024.12",
      contribution: "100%",
      challenge: "판매글을 올려도 반응이 없어 답답합니다. 결국 기다리다 지쳐, 헐값에 처분했어요. (잦은 거래 지연과 가격 손실로 인해 사용자 만족도 저하와 이탈)",
      fullStory: {
        summary: "거래 과정에서 발생하는 유저 행동 데이터를 활용하여 거래 전환율을 높이는 신규 기능을 기획하고 서비스 고도화를 진행했습니다. 서비스에 축적된 DB를 활용하여 구현 리소스를 최적화하면서도 유저 소구력을 극대화했습니다.",
        problem: "판매글을 올려도 반응이 없어 답답합니다.\n결국 기다리다 지쳐, 헐값에 처분했어요.",
        problemImages: [
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        ],
        problemQuote: "\"잦은 거래 지연과 가격 손실로 인한 이탈\"",
        improvementGoal: "신속한 판매 성공 경험 제공으로 서비스 만족도 향상",
        insightHeader: "거래 여정 분석",
        insightQuote: "판매자 · 구매자의 거래 여정 분석 → 거래 지연 원인 파악",
        insightHeroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        insights: [
          { desc: "구매 결정에 필요한 핵심 정보가 판매글에 반영되지 못한다." },
          { desc: "구매자는 시세 파악이 충분히 되어야 구매를 결심한다." },
          { desc: "지역 내 수요가 없는 매물은 가격을 낮춰도 판매가 어렵다." }
        ],
        solutions: [
          {
            insights: [
              { 
                desc: "구매 결정에 필요한 핵심 정보가 판매글에 반영되지 못한다." 
              }
            ],
            title: "매물별 판매 확률을 높이는 작성 가이드 제공",
            desc: "구매 결정에 핵심적인 정보를 판매자가 입력하도록 유도",
            showMockup: true
          },
          {
            insights: [
              { 
                desc: "구매자는 시세 파악이 충분히 되어야 구매를 결심한다." 
              }
            ],
            title: "안 팔리는 매물의 판매 범위 자동 확장",
            desc: "안 팔리는 매물은 수요가 높은 지역으로 자동 노출",
            showMockup: true
          },
          {
            insights: [
              { 
                desc: "지역 내 수요가 없는 매물은 가격을 낮춰도 판매가 어렵다." 
              }
            ],
            title: "실시간 시세 데이터 제공",
            desc: "시세를 한 눈에 파악하고 빠르게 결정할 수 있도록 정보 전달",
            showMockup: true
          }
        ],
        outcomes: [
          { 
            label: "01. Experience", 
            value: "빠른 의사결정 유도", 
            asIs: "더 싸고 좋은게 나올지도 몰라. 더 기다려보자.",
            solution: "시각화된 시세 데이터와 판매 가이드로 정보 불확실성 제거",
            toBe: "이 가격이면 괜찮은 편이구나. 누가 사가기 전에 빨리 사자." 
          },
          {
            label: "02. Implementation",
            value: "리소스 최적화",
            desc: "신규 데이터 수집이 아닌, 이미 서비스에 축적된 방대한 거래 완료 및 검색 데이터를 재활용하여 구현 난이도를 낮추고 데이터 신뢰도를 확보했습니다."
          }
        ]
      }
    }
  },
  {
    id: 4,
    title: "유저 행동 데이터를 분석하여\n리텐션 2.5배 개선",
    client: "앱스토어 런칭 & 실제 사용자 대상 서비스 창업",
    description: "사용자 데이터 분석을 통해 숨겨진 니즈를 발굴하고 기능 업데이트를 통해 저조한 서비스 리텐션을 2.5배 이상 개선했습니다.",
    tags: ["서비스 구조 & 유저 플로우 설계", "UX/UI 설계", "디자인 시스템으로 UI 제작", "출시 & 서비스 개선", "데이터 인사이트 도출"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    icon: <Smartphone className="w-5 h-5" />,
    details: {
      role: "데이터 분석 / 사용자 니즈 도출 / 기능 설계 / UX · UI 설계",
      period: "2022.07 ~ 2024.12",
      contribution: "70%",
      challenge: "런칭 초기 발생한 유저 이탈 구간을 Amplitude 데이터 분석을 통해 추적 및 개편.",
      results: ["D+7 리텐션 2.5배 상승", "앱스토어 평점 4.8 달성", "디자인 시스템 효율화"],
      fullStory: {
        summary: "사용자 데이터 분석을 통해 숨겨진 니즈를 발굴하고 기능 업데이트를 통해 저조한 서비스 리텐션을 2.5배 이상 개선했습니다.",
        initialModel: {
          title: "서비스 초기 모델",
          description: "초기 기획은 나중에 또 봐야하는 정보성 사진에 #태그를 달아,\n사진을 빠르게 찾아주는 서비스였습니다.",
          image: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=1200"
        },
        problemQuote: "낮은 재사용률\n일회성 이용에 그친 서비스",
        problem: "6개월 서비스 운영 데이터 분석 결과, 핵심 기능의 리텐션이 매우 저조했습니다. 사용자가 재방문하지 않고 이탈하는 구조적 문제를 확인했습니다.",
        problemImage: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=1200",
        improvementGoal: "일회성 유저에서 액티브 유저로 만들기\n단발성 방문을 막고 습관적 재방문을 위해, 사용자가 앱을 다시 찾을 강력한 기능을 설계하는 것을 목표로 설정했습니다.",
        analysisResults: {
          title: "370명 유저가 많이 입력한 태그 분석",
          items: [
            { label: "1위", value: "웨딩드레스" },
            { label: "2위", value: "예식장" }
          ]
        },
        interviews: [
          {
            q: "이 태그를 왜 입력했나요?",
            a: "저에게 최대한 잘 어울리는 드레스를 찾으려고요. 가장 원하는 디자인으로 신중히 고르려고요.",
            interpretation: "신중한 구매를 위한 사용 목적 발견"
          },
          {
            q: "가장 마음에 드는 웨딩드레스를 어떻게 골랐나요?",
            a: "사진을 2장씩 좌우로 스와이프하며 비교해요. 그리고 별로인 사진은 삭제하고 이 과정을 반복해요.",
            interpretation: "2장씩 비교해서 1장씩 삭제하는 작업을 반복"
          }
        ],
        insightQuote: "",
        insightHeader: "인사이트",
        insights: [
          { desc: "사용자는 고가의 구매 결정을 앞두고 가장 합리적인 결정을 위해서 이 앱을 사용한다." },
          { desc: "여러 후보를 빠르게 비교할 수 있어야 한다." },
          { desc: "상대 비교가 쉬워야 한다." }
        ],
        solutions: [
          {
            title: "신규 기능 1: 사진 토너먼트 기능",
            desc: "한 화면에서 즉시 비교할 수 있어, 선택에 걸리는 시간과 피로를 줄임. 게임처럼 즐기며 고를 수 있게 개선"
          },
          {
            title: "신규 기능 2: 5등급 좋아요 버튼",
            desc: "등급순으로 사진 자동 정렬"
          }
        ],
        designShowcases: [
          {
            title: "사진 토너먼트 기능",
            description: "한 화면에서 즉시 비교할 수 있어, 선택에 걸리는 시간과 피로를 줄임\n→ 게임처럼 즐기며 고를 수 있게 개선",
            assetLabel: "PHOTO TOURNAMENT UI"
          },
          {
            title: "5등급 좋아요 버튼",
            description: "등급순으로 사진 자동 정렬\n→ 선호도에 따른 체계적인 라이브러리 관리",
            assetLabel: "5-LEVEL LIKE SYSTEM"
          }
        ],
        outcomes: [
          {
            label: "01. Retention",
            value: "리텐션 2.5배 상승",
            desc: "신기능 배포 후, 6개월 운영 결과 태그 입력 기능의 리텐션 지표가 2.5배 상승했습니다. 사진 비교 기능을 활용하기 위해 태그를 더 적극적으로 입력하는 패턴이 형성되었습니다.",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=800"
          },
          {
            label: "02. Rankings",
            value: "앱스토어 인기 차트 79위",
            desc: "앱스토어 인기 차트 79위 달성을 통해 실제 사용자들의 긍정적인 반응과 서비스의 시장 경쟁력을 확인했습니다.",
            image: "https://images.unsplash.com/photo-1512428559083-a401c338af45?auto=format&fit=crop&q=80&w=800"
          }
        ]
      }
    }
  }
];

const EXPERIENCE = [
  {
    company: "레인메이커 DNC (포스코 디자인 컨설턴트)",
    period: "2025.03~2025.11",
    role: "선임 연구원",
    dept: "포스코 구매 DX팀",
    tasks: [
      "철강 구매 및 물류 프로세스 디지털 전환 (복잡한 엑셀 기반 체계를 시각화)",
      "비용 절감 전략 설계 (압연롤 관리 및 스마트웨어하우스 시스템 총 31억 원 절감)",
      "PDS(Posco Design System) 준수 및 확장",
      "현장 중심 리서치 (제철소 현장 인터뷰 및 사용자 관찰)"
    ]
  },
  {
    company: "동아일보",
    period: "2024.03~2024.09",
    role: "인턴",
    dept: "DX전략본부 인터랙티브스쿼드팀",
    tasks: [
      "디지털 뉴스 콘텐츠 기획/디자인 (몰입감 있는 인터랙티브 뉴스 재구성)",
      "비주얼 그래픽, UI 디자인 총괄"
    ]
  },
  {
    company: "스콰트솔루션 (삼성전자 협력사)",
    period: "2022.07~2023.04",
    role: "리드 디자이너",
    dept: "마케팅팀 디자인부서",
    tasks: [
      "삼성헬스 파트너 서비스 '포켓짐' 총괄 (삼성헬스 최초 파트너 서비스 탑재)",
      "삼성전자 동작 인식 홈 트레이닝 서비스의 PoC 사용자 리서치 및 UX/UI 설계"
    ]
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      // We still update mouse values even if not in hero, 
      // but the normalization is relative to the hero height/width
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      
      // Normalized position (0 to 100)
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, [mouseX, mouseY]);

  // Pre-calculate star properties to avoid randomization issues on re-render
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.8 ? 3 : 2,
      color: Math.random() > 0.7 ? '#E9D5FF' : '#FFFFFF',
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 4,
      driftDuration: 15 + Math.random() * 20,
      opacity: Math.random() * 0.6 + 0.2,
      shadow: Math.random() > 0.9,
      // Unique movement strength for parallax
      strength: 40 + Math.random() * 120
    }));
  }, []);

  return (
    <div className={`min-h-screen selection:bg-purple-500 selection:text-white bg-[#050505] text-white transition-all duration-500 ${selectedProject ? 'overflow-hidden h-screen' : 'pb-20'}`}>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => {
              setSelectedProject(null);
              // Small delay to ensure the project detail is removed before scrolling
              setTimeout(() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }} 
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed top-8 left-0 w-full z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 flex gap-8 items-center">
          {["ABOUT", "WORK", "CONTACT"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono font-medium tracking-[0.2em] text-white hover:text-white/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <header 
        ref={heroRef}
        className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#020617] flex flex-col justify-center px-6 md:px-24"
      >
        {/* Organic Background Elements / Aurora Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Deep Navy Base Globs for depth */}
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#0f172a] rounded-full blur-[140px] opacity-60 animate-drift" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#083344] rounded-full blur-[120px] opacity-40 animate-drift" style={{ animationDelay: "-8s" }} />
          
          {/* Aurora Streaks - Vertical, blurred, waving */}
          <div className="absolute top-[-20%] left-[5%] w-[35vw] h-[140%] bg-gradient-to-b from-transparent via-[#D8B4FE]/70 to-transparent blur-[100px] animate-aurora" style={{ animationDelay: "-2s", animationDuration: "12s" }} />
          <div className="absolute top-[-10%] left-[25%] w-[30vw] h-[120%] bg-gradient-to-b from-transparent via-[#C084FC]/60 to-transparent blur-[80px] animate-aurora" style={{ animationDelay: "-12s", animationDuration: "8s" }} />
          <div className="absolute top-[-30%] right-[15%] w-[40vw] h-[150%] bg-gradient-to-b from-transparent via-[#E9D5FF]/65 to-transparent blur-[110px] animate-aurora" style={{ animationDelay: "-7s", animationDuration: "14s" }} />
          <div className="absolute top-[-15%] right-[-5%] w-[25vw] h-[130%] bg-gradient-to-b from-transparent via-[#A855F7]/50 to-transparent blur-[70px] animate-aurora" style={{ animationDelay: "-18s", animationDuration: "9s" }} />
          
          {/* Core Bright Highlights */}
          <div className="absolute top-[10%] left-[40%] w-[20vw] h-[80%] bg-gradient-to-b from-transparent via-white/30 to-transparent blur-[60px] animate-aurora" style={{ animationDelay: "-5s", animationDuration: "11s" }} />
          <div className="absolute top-[20%] right-[30%] w-[15vw] h-[90%] bg-gradient-to-b from-transparent via-[#DDD6FE]/40 to-transparent blur-[50px] animate-aurora" style={{ animationDelay: "-9s", animationDuration: "13s" }} />

          {/* Additional Floating Mist */}
          <div className="absolute bottom-[10%] left-[15%] w-[50%] h-[40%] bg-[#818CF8]/10 rounded-full blur-[160px] animate-float" style={{ animationDelay: "-5s" }} />
          
          {/* Twinkling & Moving Stars (Fireflies) with Mouse Follow */}
          {stars.map((star) => (
            <StarComponent 
              key={star.id} 
              star={star} 
              mouseX={smoothMouseX} 
              mouseY={smoothMouseY} 
            />
          ))}
        </div>

        <div className="absolute top-10 left-6 md:left-24 z-20">
          <motion.div 
            style={{ y: heroTextY, opacity: heroTextOpacity }}
          >
            <span className="text-white/70 font-mono text-[12px] tracking-[0.2em] font-bold uppercase">
              프로덕트 디자이너, 황어진입니다
            </span>
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="flex flex-col">



              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="max-w-3xl"
              >
                <p className="text-white/80 text-xl md:text-2xl font-sans leading-relaxed">
                  <span className="text-white font-medium">31억 원의 비용 절감을 이끌어낸 실무 경험을 바탕으로</span><br />
                  기업의 비즈니스 성과를 만드는 디자인을 합니다.
                </p>
              </motion.div>
            </div>

            {/* Right Side Decorative Info */}
            <div className="hidden md:flex flex-col items-end pt-12">
              <div className="text-white mb-16">
                <span className="text-6xl text-white/90">✱</span>
              </div>
              <div className="flex flex-col items-end gap-1 text-right text-white/60 font-mono text-[10px] tracking-[0.2em] leading-loose">
                <span>Product Designer</span>
                <span>B2B</span>
                <span>End-to-End</span>
              </div>
              
              <div className="mt-auto pt-32">
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white/50"
                >
                  <ChevronDown className="w-5 h-5" />
                  <ChevronDown className="w-5 h-5 -mt-3.5" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Intro Section */}
      <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#0a0a0f]">
        <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-16 md:gap-24">
          <div className="space-y-4">
            <h2 className="text-[24px] font-display font-medium leading-relaxed text-white">
              <span className="text-sm block mb-4 text-purple-400 font-sans uppercase tracking-[0.3em]">UX 기획부터 UI 디자인까지</span>
              실무 프로젝트를 통해<br />
              End-to-End 디자인 역량을<br />
              키워왔습니다.
            </h2>
          </div>
          
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4 p-8 rounded-3xl dark-card-border">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300/60 block">Previous Experience</span>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                • <strong className="text-purple-300">포스코 구매 DX</strong> | Product Designer<br />
                • <strong className="text-purple-300">동아일보 DX팀</strong> | UX/UI Designer<br />
                • <strong className="text-purple-300">삼성헬스 파트너</strong> | UX/UI Designer
              </p>
            </div>
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                대기업 B2B 대규모 프로젝트, 스타트업의 B2C 서비스까지 주도적으로 디자인을 설계하고 운영해왔습니다.
              </p>
              <p>
                삼성헬스 최초 파트너 서비스 탑재 및 31억 원의 재고 비용 절감 성과로 증명된 디자인 능력은 물론, 
                수많은 데이터를 시각적으로 정리하는 강점으로 비즈니스 효율을 극대화하는 최적의 솔루션을 제안합니다.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 md:px-12 bg-[#050505]">
        <div className="mb-20">
          <h2 className="text-[48px] font-display font-medium tracking-tighter text-white">Selected Work</h2>
        </div>

        <div className="space-y-6 md:space-y-12">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.005,
                boxShadow: "0 40px 80px -20px rgba(168, 85, 247, 0.2)"
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.23, 1, 0.32, 1],
              }}
              className="dark-card-border purple-glow rounded-[40px] overflow-hidden flex flex-col md:flex-row cursor-pointer"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 p-4 md:p-6 opacity-90">
                <div className="w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden group bg-purple-950/20">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400/70">{project.client}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight mb-4 text-white whitespace-pre-line">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-light mb-8 max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 text-[9px] uppercase tracking-widest font-bold rounded-full text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0f]">
        <div className="mb-20">
          <h2 className="text-[48px] font-display font-medium tracking-tight text-white">
            총 경력 l <span className="font-bold text-purple-400">2년 1개월</span>
          </h2>
        </div>

        <div className="border-t border-white/5">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr] gap-8 py-12 border-b border-white/5 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500/60 block mb-2">{exp.period}</span>
                <h4 className="text-xl font-display font-medium mb-1 text-white">{exp.company}</h4>
                <p className="text-sm text-white/40">{exp.dept}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded mt-3 inline-block">
                  {exp.role}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="flex gap-4 group/item">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-purple-500/40 group-hover/item:bg-purple-400 transition-colors" />
                    <p className="text-sm text-white/60 leading-relaxed font-light">{task}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="px-6 md:px-12 pt-32 pb-12 bg-[#050505]">
        <div className="bg-[#0f0f1a] text-white rounded-[48px] p-12 md:p-24 overflow-hidden relative border border-white/5">
          <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8 text-white">
              Contact
            </h2>
            
            <div className="space-y-6 mb-16 mt-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 flex items-center justify-center text-purple-400 bg-purple-500/5">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl md:text-2xl font-medium text-white/90">e0zzzzing@naver.com</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 flex items-center justify-center text-purple-400 bg-purple-500/5">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl md:text-2xl font-medium text-white/90">010 - 8672 - 0440</span>
              </div>
            </div>
            
            
          </div>
          
          {/* Subtle Background Decoration */}
          <div className="absolute top-0 right-0 w-1/3 aspect-square bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-60" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600/5 rounded-full blur-[120px] -z-10" />
        </div>
        
        <div className="mt-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
          <span>&copy; 2026 HWANG EOJIN PORTFOLIO</span>
        </div>
      </footer>

      {/* Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed bottom-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
      />
      <ButterflyCursor />
    </div>
  );
}

function ProjectDetail({ project, onClose }: { project: any, onClose: () => void }) {
  const [activeShowcase, setActiveShowcase] = useState<any>(null);
  const detail = project.details;
  const story = detail.fullStory;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto text-slate-900 selection:bg-purple-100"
    >
      {/* Navigation */}
      <div className="sticky top-0 z-[110] bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-slate-400 hover:text-purple-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Back to Projects</span>
          </button>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Case Study</span>
            <div className="w-px h-4 bg-slate-200" />
            <span className="text-xs font-bold text-slate-900">{project.client}</span>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32"
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-1 gap-12 mb-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                {project.id === 1 || project.id === 2 ? "포스코 구매 DX 실무 프로젝트" : 
                 project.id === 4 ? "앱스토어 런칭 & 실제 사용자 대상 서비스 창업" : "UX/UI Case Study"}
              </span>
              <h1 className="text-[48px] font-display font-bold leading-tight tracking-tight text-slate-900 whitespace-pre-line">
                {project.id === 1 ? (
                  <>
                    <span className="block mb-3">재고 비용 <span className="text-purple-600">22억 원</span>을 절감한</span>
                    <span className="block">압연롤 공장 운영 시스템 구축</span>
                  </>
                ) : project.title}
              </h1>
            </div>

            <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
               <p className="text-[18px] text-slate-600 font-light leading-[1.6] max-w-2xl">
                  {story?.summary || project.description}
               </p>

               <div className="grid grid-cols-1 gap-y-12 pt-2 border-l border-slate-100 pl-12">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 block mb-3">담당 업무</span>
                    <span className="text-slate-900 text-[14px] leading-tight block">{detail.role}</span>
                  </div>
                  <div className="flex gap-20">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 block mb-3">기간</span>
                      <span className="text-slate-900 text-[14px]">{detail.period}</span>
                    </div>
                    {detail.contribution && (
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 block mb-3">기여도</span>
                        <span className="text-slate-900 text-[14px]">{detail.contribution}</span>
                      </div>
                    )}
                  </div>
               </div>
            </div>
          </div>

          {/* Image removed as per user request */}
        </div>

        {/* Content Storytelling */}
        <div className="space-y-40">
           {/* Section: Overview (Roll info / Initial Model) */}
           {project.id === 1 && (
             <div className="max-w-5xl mx-auto">
                <div className="space-y-10">
                    <p className="text-2xl font-display text-slate-900 font-bold">압연롤이란?</p>
                    <div className="flex md:flex-row flex-col gap-16 items-center">
                       <p className="text-[20px] text-slate-600 font-light leading-relaxed flex-1">
                        얇은 철판을 생산하는 밀대 모양의 자재로, 사용할수록 소모되어 주기적인 교체가 필수적인 핵심 소모품입니다.
                       </p>
                        <div className="w-full md:w-[500px] h-72 md:h-80 rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                           <img 
                             src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200" 
                             alt="Industrial Metal Production" 
                             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                             referrerPolicy="no-referrer"
                           />
                        </div>
                    </div>
                </div>
             </div>
           )}

           {project.id === 4 && story.initialModel && (
             <div className="max-w-5xl mx-auto mb-40">
                <div className="space-y-12 text-center">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">{story.initialModel.title}</h2>
                    <div className="flex flex-col gap-12 items-center">
                       <p className="text-[24px] text-slate-800 font-bold leading-relaxed max-w-3xl whitespace-pre-line">
                        {story.initialModel.description}
                       </p>
                        <div className="w-full aspect-[16/9] rounded-[48px] overflow-hidden border border-slate-100 bg-slate-50 shrink-0 relative group">
                           <img 
                             src={story.initialModel.image} 
                             alt="Service Initial Model" 
                             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
             </div>
           )}

            {/* Section: Challenge & Problem */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-20">
               <div className="sticky top-40 h-fit space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">문제 정의</h2>
                  <div className={`text-2xl font-display text-slate-400 ${project.id === 4 ? 'not-italic' : 'italic'}`}>
                    {project.id === 4 ? (
                      <div className="space-y-1">
                        <p className="font-bold text-slate-500">{story.problemQuote.split('\n')[0]}</p>
                        <p className="text-slate-400 text-xl font-medium tracking-tight">{story.problemQuote.split('\n')[1]}</p>
                      </div>
                    ) : (
                      <p>
                        {story?.problemQuote || (project.id === 1 ? "\"압연롤 재고 과잉 구매로 인한 운영 비용 손실\"" : "\"불투명한 수급 예측으로 인한 비용 발생\"")}
                      </p>
                    )}
                  </div>
               </div>
               <div className="space-y-16">
                  <div className="space-y-8">
                     <p className={`font-display leading-snug text-slate-800 ${project.id === 4 ? 'text-[16px]' : 'text-3xl'}`}>
                        {story?.problem || detail.challenge}
                     </p>

                     {project.id === 4 && story.problemImage && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-slate-100 bg-slate-50 relative group"
                        >
                          <img 
                            src={story.problemImage} 
                            alt="Data analysis visualization" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                     )}
                     
                     {story?.problemImages && (
                       <div className="relative group/slider">
                         <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar -mx-4 px-4 scroll-smooth">
                           {story.problemImages.map((img: string, idx: number) => (
                             <motion.div 
                               key={idx}
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               viewport={{ once: true }}
                               transition={{ delay: idx * 0.1 }}
                               className="flex-none w-full md:w-[85%] snap-center"
                             >
                               <div className="rounded-[40px] overflow-hidden aspect-video bg-slate-100 border border-slate-200/50 relative">
                                 <img 
                                   src={img} 
                                   alt={`Problem analysis detail ${idx + 1}`}
                                   className="w-full h-full object-cover"
                                   referrerPolicy="no-referrer"
                                 />
                                 <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white/70 text-[10px] font-mono tracking-widest uppercase">
                                   Slide {idx + 1} / {story.problemImages.length}
                                 </div>
                               </div>
                             </motion.div>
                           ))}
                         </div>
                         
                         {story.problemImages.length > 1 && (
                           <div className="flex gap-2 justify-center mt-2">
                             {story.problemImages.map((_: any, i: number) => (
                               <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                             ))}
                           </div>
                         )}
                         
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none pr-8 hidden md:block">
                            <motion.div 
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-slate-100 flex flex-col items-center justify-center text-purple-600"
                            >
                               <ArrowRight className="w-3 h-3 mb-0.5 opacity-70" />
                               <Pointer className="w-5 h-5 -rotate-12" />
                            </motion.div>
                         </div>
                       </div>
                     )}
                  </div>

                  {story?.analysis && (
                     <div className="space-y-10">
                        {story.improvementDesc && (
                          <p className="text-xl font-display text-slate-500">{story.improvementDesc}</p>
                        )}
                        <div className="grid md:grid-cols-3 gap-6">
                           {story.analysis.map((item: any, i: number) => (
                             <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm space-y-4">
                                <div className="text-4xl font-display text-slate-100">0{i+1}</div>
                                <h4 className="font-bold text-slate-800">{item.title}</h4>
                             </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {story?.improvementGoal && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-10 rounded-[48px] bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm relative overflow-hidden"
                    >
                      <div className="relative z-10">
                         <div className="space-y-6 max-w-2xl">
                            <div className="flex items-center gap-2">
                               <div className="p-1.5 bg-purple-600 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                               </div>
                               <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 font-sans">개선 목표 (Improvement Goal)</span>
                            </div>
                            
                             <div className="text-slate-800 leading-tight">
                                {project.id === 1 ? (
                                  <p className="text-[28px] font-bold whitespace-pre-line">
                                    관리자가 <span className="text-purple-600">재고 상황을 실시간 인지</span>하고,<br/>
                                    현황에 따른 <span className="underline underline-offset-8 decoration-purple-200 decoration-4">필요한 양만 구매</span>하도록 개선
                                  </p>
                                ) : project.id === 4 ? (
                                  <div className="space-y-4">
                                    <p className="text-[28px] font-bold leading-tight">{story.improvementGoal.split('\n')[0]}</p>
                                    <p className="text-[16px] font-normal text-slate-500 leading-relaxed">{story.improvementGoal.split('\n')[1]}</p>
                                  </div>
                                ) : (
                                  <p className="text-[28px] font-bold whitespace-pre-line">{story.improvementGoal}</p>
                                )}
                             </div>
                         </div>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
                    </motion.div>
                  )}
               </div>
            </div>

            {/* Section: Tag Analysis & Interview (Project 4 Custom) */}
            {project.id === 4 && story.analysisResults && (
              <div className="space-y-40 mb-40 pt-24 border-t border-slate-100">
                <div className="grid md:grid-cols-[1fr_2fr] gap-20">
                  <div className="sticky top-40 h-fit space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">데이터 분석</h2>
                    <p className="text-[23px] font-display text-slate-400 leading-snug">
                      370명 유저가 많이 입력한 태그가 무엇인지 분석했습니다.
                    </p>
                  </div>
                  <div className="space-y-16">
                    <div className="grid grid-cols-2 gap-6">
                      {story.analysisResults.items.map((item: any, i: number) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 }}
                          className="p-12 rounded-[48px] bg-slate-900 shadow-2xl border border-white/10 text-center group transition-all hover:-translate-y-2 hover:shadow-purple-500/10"
                        >
                          <span className="text-[11px] font-bold text-purple-400 uppercase tracking-[0.3em] block mb-4">{item.label}</span>
                          <span className="text-[28px] font-display font-bold text-white block group-hover:text-purple-300 transition-colors">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-12 pt-16">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-display font-bold text-slate-900">사용자의 진짜 목소리를 듣다</h3>
                        <p className="text-slate-500">데이터 너머의 사용자 니즈를 파악하기 위해 심층 인터뷰를 진행했습니다.</p>
                      </div>
                      <div className="space-y-8">
                        {story.interviews?.map((interview: any, i: number) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-12 rounded-[56px] bg-white border border-slate-100 space-y-8 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
                          >
                            <div className="relative z-10 space-y-8">
                              <div className="space-y-6">
                                <p className="text-purple-600 font-bold text-2xl flex items-start gap-4">
                                  <span className="shrink-0 opacity-40">Q.</span>
                                  <span className="leading-tight">{interview.q}</span>
                                </p>
                                <p className="text-slate-800 font-medium text-xl flex items-start gap-4 pl-10">
                                  <span className="shrink-0 text-slate-200">A.</span>
                                  <span className="leading-relaxed italic">"{interview.a}"</span>
                                </p>
                              </div>
                              <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center gap-4">
                                <p className="text-slate-900 font-bold text-xl leading-tight">{interview.interpretation}</p>
                              </div>
                            </div>
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                              <MessageCircle className="w-48 h-48" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

           {/* Section: Insight */}
           <div className="grid md:grid-cols-[1fr_2fr] gap-20">
              <div className="sticky top-40 h-fit space-y-4">
                 <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">
                    {story?.insightHeader || (project.id === 4 ? "인사이트" : (project.id === 1 ? "기존 업무 분석" : "02. Insight"))}
                 </h2>
                 <p className="text-2xl font-display text-slate-400 leading-snug">
                    {story?.insightQuote || (project.id === 1 ? "“재고 파악에 중요한 데이터는 무엇일까?”" : (project.id === 4 ? "" : "\"Turning data into operation\""))}
                 </p>
              </div>
              <div className="space-y-12">
                 {project.id === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[40px] overflow-hidden border border-slate-100"
                    >
                       <img 
                         src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                         alt="Legacy Excel Analysis" 
                         className="w-full h-auto"
                       />
                    </motion.div>
                 )}
                 <div className="grid md:grid-cols-1 gap-4">
                    {story?.insightHeroImage && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onClick={() => setActiveShowcase({
                          title: story.insightQuote || "거래 여정 분석 데이터",
                          description: "사용자 행동 패턴과 환경 분석을 통한 핵심 인사이트 도출",
                          assetLabel: "JOURNEY ANALYSIS CHART",
                          imageUrl: story.insightHeroImage
                        })}
                        className="rounded-[40px] overflow-hidden border border-slate-100 mb-4 cursor-zoom-in relative group/hero"
                      >
                         <img 
                           src={story.insightHeroImage} 
                           alt="Insight Hero" 
                           className="w-full h-auto transition-transform duration-700 group-hover/hero:scale-105"
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute bottom-6 right-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/50 text-slate-800 font-medium text-sm transition-all duration-300 group-hover/hero:bg-white group-hover/hero:translate-y-[-4px]">
                            <span>View</span>
                            <Maximize2 className="w-4 h-4 text-purple-600" />
                         </div>
                      </motion.div>
                    )}
                    {story?.insights?.map((insight: any, i: number) => (
                      <div key={i} className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                         <div className="flex gap-8 items-start">
                          <div className="text-5xl font-display text-slate-200 group-hover:text-purple-100 transition-colors">0{i+1}</div>
                          <div className="space-y-2">
                             {insight.title && <h4 className="text-xl font-bold text-slate-800">{insight.title}</h4>}
                             <p className="text-slate-500 leading-relaxed whitespace-pre-line">{insight.desc}</p>
                          </div>
                       </div>
                    </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Section: Solutions Showcase */}
           {project.id !== 4 && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-20">
              <div className="sticky top-40 h-fit space-y-4">
                 <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">해결 방안 도출</h2>
                 {story?.solutionQuote && (
                    <p className={`text-2xl font-display text-slate-400 leading-snug ${project.id === 4 ? 'not-italic' : ''}`}>
                       {story.solutionQuote}
                    </p>
                 )}
              </div>
              <div className="space-y-32">
                 {story?.solutions && story.solutions.map((sol: any, i: number) => (
                   <div key={i} className="space-y-16">
                      <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                          {sol.insights?.map((insight: any, idx: number) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-10 rounded-[48px] bg-slate-50 border border-slate-100 relative group shadow-sm hover:bg-white hover:shadow-xl transition-all duration-500"
                            >
                              <div className="flex gap-8 items-start">
                                <div className="text-5xl font-display text-slate-200 group-hover:text-purple-100 transition-colors">0{story.solutions.slice(0, i).reduce((acc: number, s: any) => acc + (s.insights?.length || 0), 0) + idx + 1}</div>
                                <div className="space-y-4 pt-2">
                                  {insight.title && <h4 className="text-xl font-bold text-slate-800">{insight.title}</h4>}
                                  <p className="text-slate-600 leading-relaxed max-w-xl whitespace-pre-line">{insight.desc}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {sol.title && (
                          <div className="flex justify-center -my-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-50 flex items-center justify-center">
                              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                <ArrowDown className="w-5 h-5 text-purple-500" />
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {sol.title && (
                          <div className="space-y-6">
                            <motion.div 
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="p-10 rounded-[48px] bg-purple-50 border border-purple-100 relative group"
                            >
                              <div className="space-y-4">
                                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                  <span className="bg-purple-600 w-1.5 h-6 rounded-full" />
                                  {sol.title}
                                </h4>
                                <p className="text-slate-600 font-light leading-relaxed max-w-xl">{sol.desc}</p>
                              </div>
                            </motion.div>
                            
                            {sol.image && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[40px] overflow-hidden border border-slate-100"
                              >
                                <img 
                                  src={sol.image} 
                                  alt={sol.title} 
                                  className="w-full h-auto object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </motion.div>
                            )}
                          </div>
                        )}

                        {/* Mockup removed */}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           )}

            {/* Section: Q&A */}
            {project.id === 3 && (
              <div className="mb-40 pt-24 border-t border-slate-100">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-5xl mx-auto space-y-16"
                >
                    <div className="space-y-8">
                      <h3 className="text-[36px] font-display font-medium text-slate-900 leading-[1.1] tracking-tight">
                          <span className="text-purple-600">Q.</span> 구현 리소스가 크지 않나요?
                      </h3>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[72px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                      <div className="relative bg-slate-900 rounded-[64px] p-12 md:p-20 overflow-hidden shadow-2xl border border-white/10 uppercase">
                          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MessageCircle className="w-64 h-64 text-white rotate-12" />
                          </div>
                          <div className="relative space-y-10">
                            <div className="flex gap-4 items-center">
                                <span className="px-5 py-2 bg-slate-800 text-slate-400 text-xs font-black rounded-full tracking-[0.3em]">ANSWER</span>
                            </div>
                            <p className="text-[28px] text-white font-bold leading-[1.3] max-w-4xl lowercase first-letter:uppercase">
                                서비스에 이미 축적된 <span className="text-purple-400">데이터를 활용해서</span> 구현 난이도를 낮췄습니다!
                            </p>
                          </div>
                      </div>
                    </div>

                    <div className="space-y-8 pt-12">
                      {[
                        {
                          q: "과거 빠르게 거래된 판매글의 공통 정보를 분석",
                          a: "매물별 판매 확률을 높이는 작성 가이드 제공. 구매 결정에 핵심적인 정보를 판매자가 입력하도록 유도"
                        },
                        {
                          q: "동네별 검색량과 거래 완료 데이터로 수요 밀집 지역 파악",
                          a: "안 팔리는 매물의 판매 범위 자동 확장. 안 팔리는 매물은 수요가 높은 지역으로 자동 노출"
                        },
                        {
                          q: "실거래가 · 현재 호가 · 변동 가격 데이터를 시각화",
                          a: "실시간 시세 데이터 제공. 시세를 한 눈에 파악하고 빠르게 결정"
                        }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex flex-col md:flex-row gap-6 md:items-center p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm"
                        >
                          <div className="md:w-1/3 text-xl md:text-2xl font-bold text-purple-600 leading-tight">
                            {item.q}
                          </div>
                          <div className="shrink-0 text-2xl text-purple-400 hidden md:block">→</div>
                          <div className="md:w-2/3 text-lg md:text-xl font-medium text-slate-600 leading-relaxed">
                            {item.a}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                </motion.div>
              </div>
            )}

            {/* Section: Design Showcase (Project 3 Custom) */}
            {project.id === 3 && (
              <div className="space-y-16 mb-40 pt-24 border-t border-slate-100">
                <div className="max-w-5xl mx-auto w-full">
                  <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">디자인</h2>
                </div>
                <div className="space-y-32">
                  {[
                    {
                      title: "솔루션1",
                      description: "빠르게 팔린 판매글 데이터를 활용 → 매물별 판매 확률을 높이는 작성 가이드 제공",
                      imagesCount: 2
                    },
                    {
                      title: "솔루션2",
                      description: "동네별 검색량 · 거래 완료 데이터로 → 안 팔리는 매물은 수요가 높은 지역에 노출"
                    },
                    {
                      title: "솔루션3",
                      description: "실거래가 · 현재 호가 · 변동 가격 데이터를 시각화하여 → 시세를 한 눈에 보여줌으로써 구매 결심을 빨리 할 수 있도록"
                    }
                  ].map((showcase, index) => (
                    <div key={index} className="max-w-5xl mx-auto w-full space-y-12">
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <span className="px-3 py-1 bg-purple-100 text-purple-600 text-[10px] font-black rounded-full tracking-widest uppercase">Solution 0{index + 1}</span>
                        </div>
                        <div className="text-slate-900 font-bold leading-tight max-w-4xl text-3xl md:text-4xl whitespace-pre-line tracking-tight">
                          {showcase.description.split('→').map((part, i) => (
                             i === 0 ? 
                             <p key={i} className="mb-6 opacity-60 text-2xl md:text-3xl font-medium">{part}</p> : 
                             <p key={i} className="text-purple-600 font-bold flex items-start gap-4">
                               <ArrowRight className="shrink-0 w-8 h-8 md:w-10 md:h-10 mt-1" />
                               {part}
                             </p>
                          ))}
                        </div>
                      </div>
                      
                      <div className={showcase.imagesCount === 2 ? "flex flex-col gap-12 md:gap-24" : ""}>
                        {[...Array(showcase.imagesCount || 1)].map((_, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: imgIndex * 0.2 }}
                            className="rounded-[64px] overflow-hidden bg-slate-50 border border-slate-100 relative group cursor-zoom-in w-screen relative left-1/2 -translate-x-1/2 md:w-full md:left-0 md:translate-x-0 aspect-video"
                            onClick={() => setActiveShowcase(showcase)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50" />
                            <div className="absolute bottom-8 right-8 z-10">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                 <Maximize2 className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-purple-600 transition-colors" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {story?.solutionItems && (
              <div className="grid md:grid-cols-[1fr_2fr] gap-20 mb-32 pt-20 border-t border-slate-100">
                 <div className="sticky top-40 h-fit space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">솔루션</h2>
                 </div>
                 <div className="space-y-40">
                    {story.solutionItems.map((showcase: any, index: number) => (
                      <div key={index} className={`space-y-10 ${showcase.isSummary ? 'bg-purple-50 p-16 rounded-[48px] border border-purple-100 shadow-sm mt-20' : ''}`}>
                         <div className="space-y-6">
                            {showcase.title && (
                              <h2 className={`${showcase.isSummary ? 'text-xl font-bold text-purple-600 uppercase tracking-widest flex items-center gap-3' : 'text-[32px] font-display font-bold text-slate-900'} leading-tight`}>
                                 {showcase.isSummary && <CheckCircle2 className="w-6 h-6" />}
                                 {showcase.title}
                              </h2>
                            )}
                            <div className={`${showcase.isSummary ? 'text-2xl font-bold text-slate-800' : 'text-slate-800 font-bold'} leading-relaxed max-w-4xl text-lg whitespace-pre-line`}>
                               {showcase.description.split('\n').map((line: string, i: number) => {
                                 const isArrow = line.startsWith('→');
                                 return (
                                   <p key={i} className={isArrow ? 'text-purple-600 font-extrabold mt-4 px-6 py-4 bg-white/50 rounded-2xl border border-purple-100 flex items-start gap-4' : ''}>
                                      {isArrow ? (
                                        <>
                                          <span className="shrink-0 text-xl">→</span>
                                          <span>{line.substring(1).trim()}</span>
                                        </>
                                      ) : line}
                                   </p>
                                 );
                               })}
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

           {/* Section: Design Showcase */}
           {story?.designShowcases && (
             <div className={[1, 2, 4].includes(project.id) ? "space-y-16 mb-40 pt-24 border-t border-slate-100" : "grid md:grid-cols-[1fr_2fr] gap-20"}>
                <div className={[1, 2, 4].includes(project.id) ? "max-w-7xl mx-auto w-full px-6 md:px-0" : "sticky top-40 h-fit space-y-4"}>
                   <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">디자인</h2>
                </div>
                <div className={[1, 2, 4].includes(project.id) ? "space-y-32" : "space-y-40"}>
                   {story.designShowcases.map((showcase: any, index: number) => (
                     <div key={index} className={`space-y-10 ${showcase.isSummary ? 'bg-purple-50 p-16 rounded-[48px] border border-purple-100 shadow-sm mt-20' : ''} ${[1, 2, 4].includes(project.id) ? 'max-w-7xl mx-auto w-full px-6 md:px-0' : ''}`}>
                        <div className="space-y-6">
                           {showcase.title && (
                             <h2 className={`${showcase.isSummary ? 'text-xl font-bold text-purple-600 uppercase tracking-widest flex items-center gap-3' : 'text-[32px] font-display font-bold text-slate-900'} leading-tight`}>
                                {showcase.isSummary && <CheckCircle2 className="w-6 h-6" />}
                                {showcase.title}
                             </h2>
                           )}
                           <div className={`${showcase.isSummary ? 'text-2xl font-bold text-slate-800' : 'text-slate-800 font-bold'} leading-relaxed max-w-4xl text-lg whitespace-pre-line`}>
                              {showcase.description.split('\n').map((line: string, i: number) => {
                                const isArrow = line.startsWith('→');
                                return (
                                  <p key={i} className={isArrow ? 'text-purple-600 font-extrabold mt-4 px-6 py-4 bg-white/50 rounded-2xl border border-purple-100 flex items-start gap-4' : ''}>
                                     {isArrow ? (
                                       <>
                                         <span className="shrink-0 text-xl">→</span>
                                         <span>{line.substring(1).trim()}</span>
                                       </>
                                     ) : line}
                                  </p>
                                );
                              })}
                           </div>
                        </div>
                        
                        {!showcase.noImage && (
                           <motion.div 
                             initial={{ opacity: 0, y: 40 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             onClick={() => setActiveShowcase(showcase)}
                             className={`rounded-[64px] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center relative group cursor-zoom-in ${[1, 2, 4].includes(project.id) ? `w-screen relative left-1/2 -translate-x-1/2 rounded-none md:rounded-[80px] md:w-full md:left-0 md:translate-x-0 aspect-video ${project.id === 4 ? '' : 'md:aspect-[21/9]'}` : 'aspect-[16/10] md:aspect-[16/8]'}`}
                           >
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50" />
                          <div className="relative z-10 flex flex-col items-center gap-8">
                             <div className="p-8 rounded-[40px] bg-white/50 backdrop-blur-xl border border-white/20">
                                <Monitor className="w-24 h-24 text-slate-300 group-hover:scale-110 transition-transform duration-700" />
                             </div>
                             <div className="flex flex-col items-center gap-2 text-center">
                                <span className="text-[10px] font-mono text-slate-400 tracking-[0.6em] uppercase">{showcase.assetLabel}</span>
                                <div className="w-8 h-px bg-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                             </div>
                          </div>
                          
                          <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-slate-300/30 rounded-tr-3xl" />
                          <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-slate-300/30 rounded-bl-3xl" />

                          <div className="absolute bottom-8 right-8 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-slate-400 group-hover:bg-white group-hover:text-purple-600 group-hover:scale-110 transition-all flex items-center gap-3">
                             <span className="text-xs font-bold tracking-widest uppercase">View</span>
                             <Maximize2 className="w-5 h-5" />
                          </div>
                        </motion.div>
                     )}
                  </div>
                ))}

                   {project.id === 1 && (
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="p-16 rounded-[64px] bg-slate-900 text-white space-y-8 relative overflow-hidden shadow-2xl"
                     >
                        <div className="relative z-10 space-y-6">
                           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">System Core</span>
                           <h4 className="text-4xl font-display">POSCO Design System (PDS)</h4>
                           <p className="text-slate-400 font-light leading-relaxed max-w-2xl text-lg">
                              {project.id === 1 ? "압연롤 관리 시스템은 디자인 시스템을 활용해서 만들었습니다." : "자재 구매 최적화 시스템 역시 포스코 전사 디자인 시스템(PDS)을 기반으로 일관된 UX를 제공합니다."}
                           </p>
                        </div>
                        
                        <div 
                           onClick={() => setActiveShowcase({
                              title: "POSCO Design System (PDS)",
                              description: "철강 산업 특화 UI 컴포넌트와 가이드를 포함한 포스코 전사 디자인 시스템입니다. 일관된 사용자 경험과 업무 효율성을 위해 이를 엄격히 준수하여 설계되었습니다.",
                              assetLabel: "PDS Core Components"
                           })}
                           className="absolute bottom-6 right-6 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-purple-600 hover:scale-110 transition-all shadow-xl flex items-center gap-3 cursor-pointer group/btn z-20"
                        >
                           <span className="text-xs font-bold tracking-widest uppercase">View</span>
                           <Maximize2 className="w-5 h-5" />
                        </div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                     </motion.div>
                   )}
                </div>
             </div>
           )}

           {/* Section: Impact / Outcome */}
           {project.id !== 3 && (
             <div className="grid md:grid-cols-[1fr_2fr] gap-20">
                <div className="sticky top-40 h-fit space-y-4">
                   <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600">성과 정리</h2>
                    <p className="text-[21px] font-display font-bold text-slate-800 leading-snug not-italic">
                      {project.id === 1 ? (
                        <>데이터 기반의 재고 관리로<br />22억 원 비용 절감 & 업무 효율화</>
                      ) : project.id === 4 ? null : (
                        <>사내/사외 통합 가시성 확보로<br />9억 원의 재고 비용 절감</>
                      )}
                    </p>
                </div>
                <div className="space-y-8">
                   {story?.outcomes?.map((outcome: any, i: number) => (
                      <div key={i} className="p-10 md:p-12 rounded-[48px] bg-slate-50/50 border border-slate-100 flex flex-col lg:flex-row gap-10 items-start group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                        <div className="space-y-4 min-w-[220px]">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400">{outcome.label}</span>
                          <div className="text-3xl font-display font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                            {outcome.value}
                          </div>
                        </div>
                        <div className="flex-1 mt-1 w-full space-y-6">
                          {outcome.desc ? (
                            <>
                              <p className="text-lg text-slate-600 leading-relaxed font-light">
                                {outcome.desc}
                              </p>
                              {outcome.image && (
                                <div className="mt-4 rounded-3xl overflow-hidden border border-slate-100 aspect-[3/2]">
                                  <img 
                                    src={outcome.image} 
                                    alt={outcome.value} 
                                    className="w-full h-full object-cover" 
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex flex-col gap-8 w-full">
                              <div className="flex flex-col items-center gap-4">
                                <div className="w-full space-y-3 p-8 rounded-3xl bg-slate-100/50 border border-slate-200/50">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">As-Is</span>
                                  <p className="text-base text-slate-500 font-medium leading-relaxed whitespace-pre-line">{outcome.asIs}</p>
                                </div>
                                
                                <div className="text-slate-300">
                                  <ChevronDown className="w-6 h-6" />
                                </div>
  
                                <div className="w-full space-y-3 p-8 rounded-3xl bg-purple-600 text-white shadow-lg shadow-purple-200">
                                  <span className="text-[10px] font-bold text-purple-200 uppercase tracking-widest block">Solution</span>
                                  <p className="text-base font-bold leading-relaxed whitespace-pre-line">{outcome.solution}</p>
                                </div>
  
                                <div className="text-slate-300">
                                  <ChevronDown className="w-6 h-6" />
                                </div>
  
                                <div className="w-full space-y-3 p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">To-Be</span>
                                  <p className="text-base font-bold leading-relaxed whitespace-pre-line">{outcome.toBe}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
             </div>
           )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-60 pt-20 border-t border-slate-100 flex flex-col items-center space-y-12">
           <div className="text-center space-y-4">
              <p className="text-slate-400 text-sm font-light italic">
                 보안 상의 이유로 프로젝트의 세부 UI와 기획 문서는 공개가 제한될 수 있습니다.<br />
                 더 자세한 협업 내용은 메일로 문의 부탁드립니다.
              </p>
           </div>
           
           <button 
              onClick={onClose}
              className="px-16 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-purple-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-purple-200 active:scale-95"
           >
              프로젝트 목록으로 돌아가기
           </button>
        </div>
      </motion.div>

      {/* Zoomed Image Overlay */}
      <AnimatePresence>
        {activeShowcase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveShowcase(null)}
            className="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center p-8 md:p-20 cursor-zoom-out"
          >
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="w-full max-w-6xl aspect-[16/10] bg-white rounded-[40px] md:rounded-[64px] overflow-hidden relative border border-white/20"
               onClick={(e) => e.stopPropagation()}
             >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
                <div className="relative h-full flex flex-col items-center justify-center gap-12">
                   {activeShowcase.imageUrl ? (
                     <div className="w-full h-full p-12 flex items-center justify-center">
                       <img 
                         src={activeShowcase.imageUrl} 
                         className="max-w-full max-h-full object-contain rounded-3xl"
                         alt={activeShowcase.title}
                         referrerPolicy="no-referrer"
                       />
                     </div>
                   ) : (
                     <div className="p-12 md:p-20 rounded-[48px] md:rounded-[64px] bg-white/50 backdrop-blur-md border border-white/40">
                        <Monitor className="w-32 h-32 md:w-64 md:h-64 text-slate-100" />
                     </div>
                   )}
                   <div className="flex flex-col items-center gap-4 text-center px-8">
                      <h3 className="text-2xl font-display font-medium text-slate-900 tracking-tight">{activeShowcase.title}</h3>
                      <p className="text-slate-500 font-light max-w-2xl">
                         {activeShowcase.description}<br />
                         <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-4 block">Confidential Concept Layout • PDS Compliance</span>
                      </p>
                   </div>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setActiveShowcase(null)}
                  className="absolute top-10 right-10 p-4 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-all group"
                >
                   <X className="w-6 h-6" />
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const StarComponent: React.FC<{ star: any, mouseX: MotionValue<number>, mouseY: MotionValue<number> }> = ({ star, mouseX, mouseY }) => {
  // Parallax + Local attraction effect
  const xTranslate = useTransform([mouseX, mouseY], ([mX, mY]) => {
    const dx = (mX as number) - star.x;
    const dy = (mY as number) - star.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Increased detection radius for better feel (around 40% of screen)
    const radius = 40; 
    
    if (dist < radius && dist > 0.1) {
      // Move up to 100px based on proximity and strength
      const power = (1 - dist / radius) * (star.strength || 40); 
      return (dx / dist) * power;
    }
    return 0;
  });

  const yTranslate = useTransform([mouseX, mouseY], ([mX, mY]) => {
    const dx = (mX as number) - star.x;
    const dy = (mY as number) - star.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 40;
    
    if (dist < radius && dist > 0.1) {
      const power = (1 - dist / radius) * (star.strength || 40);
      return (dy / dist) * power;
    }
    return 0;
  });

  // Scale effect when mouse is near
  const scale = useTransform([mouseX, mouseY], ([mX, mY]) => {
    const dx = (mX as number) - star.x;
    const dy = (mY as number) - star.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 15;
    
    if (dist < radius) {
      return 1 + (1 - dist / radius) * 1.5;
    }
    return 1;
  });

  return (
    <div 
      className="absolute animate-twinkle animate-firefly"
      style={{
        top: `${star.y}%`,
        left: `${star.x}%`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s, ${star.driftDuration}s`,
        zIndex: 20
      }}
    >
      <motion.div 
        style={{
          width: star.size,
          height: star.size,
          backgroundColor: star.color,
          borderRadius: '50%',
          opacity: star.opacity,
          boxShadow: star.shadow ? '0 0 12px rgba(255, 255, 255, 0.9)' : 'none',
          x: xTranslate,
          y: yTranslate,
          scale: scale
        }}
      />
    </div>
  );
}
