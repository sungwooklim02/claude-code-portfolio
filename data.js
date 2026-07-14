window.PORTFOLIO = {
 "brand": "STRATA",
 "eyebrow": "PRODUCT PORTFOLIO",
 "headline": "실서비스 3종을 설계·구현·운영한 기록",
 "lead": "실시간 협업 그룹웨어, 폐쇄망 S1000D 번역 AI, 기술문서 RAG 대시보드 — 세 개의 프로덕션 시스템을 아키텍처부터 배포·계측까지 만들었습니다. 모든 화면을 라이트/다크로 결정론적 캡처했고, 그룹웨어는 360px 모바일까지 반응형으로 재설계했습니다.",
 "hero_metrics": [
  {
   "value": "3",
   "label": "프로덕션 제품"
  },
  {
   "value": "92% → 96%",
   "label": "RAG 정확도 · 채점 강화에도 상승"
  },
  {
   "value": "-58%",
   "label": "기술문서 번역 처리 속도"
  },
  {
   "value": "6.7×",
   "label": "인증 요구 대비 연속 가동시간"
  },
  {
   "value": "208K",
   "label": "핵심 소스 LOC · 단독 개발"
  }
 ],
 "repos": [
  {
   "name": "groupware",
   "url": "https://github.com/sungwooklim02/groupware"
  },
  {
   "name": "translate",
   "url": "https://github.com/sungwooklim02/strata-lingua"
  },
  {
   "name": "docs-rag",
   "url": "https://github.com/sungwooklim02/strata-index"
  }
 ],
 "total_shots": 218,
 "all_shots": [
  "docs-rag/ai/ai-data",
  "docs-rag/ai/image-reference",
  "docs-rag/ai/learning",
  "docs-rag/convert/convert",
  "docs-rag/eval/ai-cost",
  "docs-rag/eval/doc-accuracy",
  "docs-rag/eval/uptime",
  "docs-rag/main/dashboard",
  "docs-rag/main/glossary",
  "docs-rag/main/inventory",
  "docs-rag/main/ram",
  "docs-rag/main/similarity",
  "docs-rag/qa/qa",
  "groupware/accounting/accounts",
  "groupware/accounting/cards",
  "groupware/accounting/overview",
  "groupware/accounting/payroll",
  "groupware/accounting/reports",
  "groupware/calendar/company",
  "groupware/calendar/group",
  "groupware/calendar/month",
  "groupware/calendar/personal",
  "groupware/calendar/project",
  "groupware/chat/messaging",
  "groupware/chat/rooms",
  "groupware/commute/attendance",
  "groupware/commute/attendance-overtime",
  "groupware/commute/attendance-work-days",
  "groupware/commute/attendance-work-hours",
  "groupware/commute/business-trip",
  "groupware/commute/overtime",
  "groupware/commute/profile",
  "groupware/commute/vacation",
  "groupware/dashboard/main",
  "groupware/figma/canvas-iconset",
  "groupware/figma/canvas-onboarding",
  "groupware/figma/canvas-wireframe",
  "groupware/figma/files",
  "groupware/knowledge/file-manager",
  "groupware/members/list",
  "groupware/members/organization",
  "groupware/members/roles",
  "groupware/members/tree",
  "groupware/members/usage-stats",
  "groupware/members/vacations",
  "groupware/misc/dev-board",
  "groupware/misc/documents",
  "groupware/misc/logic",
  "groupware/misc/meeting-preparations",
  "groupware/misc/notifications",
  "groupware/misc/planning-documents",
  "groupware/mobile/responsive-360",
  "groupware/modals/department-management",
  "groupware/modals/event-add",
  "groupware/modals/event-detail",
  "groupware/modals/file-upload",
  "groupware/modals/meeting-minutes-new",
  "groupware/modals/member-create",
  "groupware/modals/member-manage",
  "groupware/modals/payroll-register",
  "groupware/modals/project-add",
  "groupware/modals/report-create",
  "groupware/modals/task-create",
  "groupware/modals/task-detail",
  "groupware/observability/error-tracker",
  "groupware/observability/logs",
  "groupware/projects/detail-dashboard",
  "groupware/projects/detail-files",
  "groupware/projects/detail-minutes",
  "groupware/projects/detail-schedule",
  "groupware/projects/detail-storyboard",
  "groupware/projects/detail-summary",
  "groupware/projects/detail-table-sheet",
  "groupware/projects/list",
  "groupware/reports/bidding",
  "groupware/reports/by-person",
  "groupware/reports/by-project",
  "groupware/reports/daily",
  "groupware/reports/meeting-minutes",
  "groupware/reports/monthly",
  "groupware/reports/project",
  "groupware/reports/status",
  "groupware/reports/weekly",
  "groupware/reports/work-journal",
  "groupware/ue-error/reference",
  "groupware/vault/main",
  "groupware/vault/software-accounts",
  "groupware/work-management/board",
  "groupware/work-management/done",
  "groupware/work-management/in-progress",
  "groupware/work-management/knowledge",
  "groupware/work-management/missed",
  "groupware/work-management/received",
  "groupware/work-management/requested",
  "groupware/work-management/review",
  "groupware/work-management/today",
  "groupware/work-reference/list",
  "translate/dashboard/main",
  "translate/glossary/list",
  "translate/glossary/pending",
  "translate/job/detail",
  "translate/project/detail",
  "translate/quality/main",
  "translate/queue/main",
  "translate/report/main",
  "translate/review/detail",
  "translate/scheduler/main",
  "translate/system/audit",
  "translate/system/users"
 ],
 "apps": [
  {
   "app": "groupware",
   "product_name": "Strata Work",
   "live_url": "https://strata-groupware-demo-production.up.railway.app",
   "tagline": "실시간 협업을 하나로 통합한 풀스택 사내 그룹웨어 — 채팅·CRDT 스프레드시트·프로젝트·근태·회계까지",
   "domain": "채팅, 캘린더/전자결재, 프로젝트·업무 관리, 근태·회계·급여, 문서·협업 스프레드시트, 조직도까지 16개 핵심 도메인을 단일 플랫폼으로 묶은 풀스택 사내 협업 그룹웨어.",
   "architecture_summary": "프론트엔드는 Component → Hook → Service(axios, baseURL=/api) 단일 창구로 흐르고, nginx가 /api/* 를 FastAPI 백엔드로 프록시한다. 백엔드는 PostgreSQL(+pgvector)과 Valkey(Redis 호환)를 데이터·캐시 계층으로 두고, 실시간 계층은 WebSocket을 '유일한 알림 소스'로 삼아(폴링 없음, 재연결 + catch-up invalidate) 채팅·알림을 밀어내며, 협업 스프레드시트는 Yjs/pycrdt CRDT로 동시 편집 충돌을 무손실 병합한다. gunicorn + UvicornWorker 2워커가 --max-requests 재활용과 워커 메모리 가드로 장시간 실시간 부하를 견디도록 구성했다.",
   "tech_stack": [
    "React 18",
    "TypeScript",
    "Vite",
    "TanStack Query",
    "Zustand",
    "Tailwind CSS",
    "FastAPI (Python 3.11)",
    "SQLAlchemy + Alembic",
    "PostgreSQL (+pgvector)",
    "Valkey (Redis 호환)",
    "WebSocket",
    "Yjs / pycrdt (CRDT)",
    "Univer (스프레드시트)",
    "fabric.js (캔버스)",
    "Electron (오버레이 셸)",
    "Docker / nginx",
    "JWT + RBAC"
   ],
   "headline_metrics": [
    {
     "label": "코드 규모 (단독 개발)",
     "value": "208,368 LOC",
     "context": "FE 146,616줄(947 TS/TSX) + BE 61,752줄(400 py). 약 2개월·310커밋 단독 설계·구현·배포"
    },
    {
     "label": "백엔드 API 표면",
     "value": "609 엔드포인트",
     "context": "193개 라우터 파일 · 113개 DB 테이블(16 핵심 도메인) · 20개 프론트 도메인"
    },
    {
     "label": "프로젝트 히스토리 저장",
     "value": "8.6GB → 0.9GB",
     "context": "업데이트 로그 바이트 압축 + last-viewer prune으로 약 90% 감소"
    },
    {
     "label": "쿼리 오버페치 제거",
     "value": "수 GB → byte-identical",
     "context": "joinedload → selectinload 54파일 전환, 응답 동작은 완전히 동일"
    },
    {
     "label": "E2E · 문서",
     "value": "261 spec / 62 docs",
     "context": "도메인 골든패스 회귀 테스트와 아키텍처·도메인 규칙 문서화"
    }
   ],
   "challenges": [
    {
     "title": "실시간 부하에서 백엔드 워커가 OOM으로 사망 — dead-client 팬아웃 근본 해결",
     "problem": "실시간 협업/알림 부하가 쌓이면 백엔드 워커(gunicorn + UvicornWorker)가 메모리 초과로 죽고 앱 전체가 먹통이 되는 프로덕션 사건이 반복됐다. '메모리를 더 주자'는 대증요법으로는 재발했다. 근본 원인은 pycrdt가 WebSocket 클라이언트로 send에 실패해도 그 클라이언트를 room.clients에서 제거하지 않아, 죽은 커넥션이 누적되고 매 CRDT/채팅 브로드캐스트가 점점 커지는 죽은 대상 목록으로 팬아웃되면서 메모리와 작업량이 폭발한 것이었다.",
     "solution": "증상이 아니라 팬아웃 자체를 원인으로 특정한 뒤, 클라이언트별 bounded-queue drain + send 실패 시 자기 자신을 방에서 즉시 제거하도록 바꾸고, 워커 메모리 가드와 --max-requests 10000 재활용을 함께 배선해 누수를 구조적으로 차단했다. 합성 벤치가 아니라 실제 운영 사건으로 검증됐다.",
     "metric": "OOM 워커 사망 → 근본 원인 제거, 장시간 실시간 부하에서 무중단 운영"
    },
    {
     "title": "joinedload 오버페치의 systemic 제거 — 수 GB 쿼리를 byte-identical 하게",
     "problem": "SQLAlchemy joinedload(X.project)가 부모 행마다 sheet_data 블롭을 함께 끌어와, 단일 쿼리 결과가 수 GB로 부풀며 메모리 압박·502·OOM을 유발했다. 특정 화면 하나의 버그가 아니라 코드베이스 전반에 퍼진 systemic 패턴이었다.",
     "solution": "블롭을 부모 행마다 중복 로드하는 joinedload를 자식을 별도 쿼리로 가져오는 selectinload로 전환하되, 응답 형태·의미가 완전히 동일하도록 24개 호출 지점(54파일)을 전수 스윕했다. 소비처 화면이 바뀌지 않는 'byte-identical' 전환을 기준으로 삼았다.",
     "metric": "부모 행당 블롭 중복(수 GB) → 제거, 54파일 전환·동작 동일"
    },
    {
     "title": "협업 스프레드시트 히스토리가 8.6GB까지 팽창 — CRDT 업데이트 로그 압축",
     "problem": "Yjs CRDT는 동시 편집을 무손실로 병합하는 대신 업데이트 로그가 계속 쌓이는 근본적 트레이드오프가 있다. 프로젝트 히스토리/버전 저장이 8.6GB까지 커져 저장·복원 비용이 문제였다.",
     "solution": "count 기반 압축이 무력하다는 것을 먼저 측정으로 확인한 뒤(full-doc이 한 바이트만 바뀌어도 새 스냅샷), 바이트 단위 full-doc 압축 + 마지막 열람자 이후 미사용 업데이트 prune으로 로그를 접었다. 트레이드오프를 숨기지 않고 '측정 → 압축'으로 관리했다.",
     "metric": "히스토리 저장 8.6GB → 0.9GB (약 90% 감소)"
    },
    {
     "title": "다중 사용자 동시 편집의 무손실 병합 — CRDT + WS 단일 신뢰 모델",
     "problem": "여러 사용자가 같은 시트의 행/열을 동시에 편집하면 last-write-wins 방식에서는 편집이 조용히 소실됐고, 알림을 폴링으로 맞추면 요청 낭비와 지연이 생겼다. 실시간 정합성이 협업 앱의 핵심 리스크였다.",
     "solution": "스프레드시트는 Univer 그리드 + Yjs/pycrdt CRDT로 행/열 구조 편집 충돌을 무손실 병합하고 오프라인 편집 병합·커서 프레즌스를 제공했다. 알림은 WebSocket을 유일한 소스로(폴링 금지) 재연결 + catch-up invalidate로 푸시 신뢰성을 확보하고, unread는 서버 권위 모델로 통일했다.",
     "metric": "동시 행/열 편집 소실 → CRDT 무손실 병합, 폴링 제거"
    },
    {
     "title": "데스크톱 전용 20만 LOC를 360px 모바일까지 — 감사 → 표준 20조항 → 자동 검증 스윕",
     "problem": "468파일 프론트가 데스크톱 전용으로 설계돼, 모바일에선 공백 없는 한글이 한 글자씩 세로로 무너지고(keep-all 부재), 다열 칸반·페인 분할 모달·고정폭 팝오버가 뷰포트를 뚫었다. 화면별 땜질로는 이 규모에서 회귀를 막을 수 없었다.",
     "solution": "병렬 감사로 발견 303건을 인벤토리화하고 20개 표준 조항(타이포·레이아웃·터치·모달·보드 패턴)으로 종합한 뒤, 16개 워크패키지를 파일 소유 상호 배타로 병렬 구현하고 웨이브마다 적대 리뷰를 돌렸다. 데스크톱은 무프리픽스(모바일 기본)+sm:/md: 복원 패턴으로 픽셀 보존하고, 가로 오버플로와 한글 세로 크러시를 자동 판정하는 전 라우트 스윕 하네스로 회귀를 게이트화했다.",
     "metric": "프로덕션 라이브 770판정 — 가로 오버플로 0 · 한글 세로 크러시 0 (360/390/768×라이트다크 + 320 게이트 + 1280 무회귀)"
    }
   ],
   "why_not": [
    {
     "alternative": "협업 편집에 OT(Operational Transform)",
     "reason": "OT는 중앙 변환 서버가 모든 연산을 순서화·재작성해야 하고, 특히 행/열 삽입·삭제 같은 구조적 연산에서 정확히 구현하기가 어렵다. Yjs/pycrdt CRDT를 택해 중앙 권위 서버 없이도 충돌 없는 병합과 오프라인 편집 병합을 얻는 대신, 업데이트 로그가 커지는 저장 비용을 감수하고 이를 바이트 압축으로 상환했다(→ 8.6GB→0.9GB)."
    },
    {
     "alternative": "알림 정합성을 폴링(주기적 refetch)으로",
     "reason": "폴링은 매 주기마다 요청을 낭비하고 이벤트 반영이 지연된다. WebSocket을 유일한 알림 소스로 삼고 재연결·catch-up invalidate로 누락을 메우는 편이, 즉시성과 서버 권위 unread를 동시에 준다. 대가는 재연결/catch-up 로직의 복잡도이며, 이를 표준 패턴으로 문서화해 상쇄했다."
    }
   ],
   "limitations": [
    "CRDT 업데이트 로그가 무한히 커지는 것은 압축으로 '관리'할 뿐 '제거'되지 않는 근본 트레이드오프다. 바이트 압축 + last-viewer prune은 예약/기회적으로 도는 프로세스라 공짜가 아니며, 압축 주기 밖에서는 로그가 다시 누적된다.",
    "채팅 메시지 텍스트가 DB 저장·2개의 WS 페이로드·4개의 FE 렌더 경로 등 7곳에서 독립 생성된다. 한 곳만 고치면 텍스트가 조용히 어긋나므로, 추상화로 감추는 대신 '7곳을 모두 함께 수정해야 한다'는 유지보수 위험으로 명시 문서화했다."
   ],
   "hero_shots": [
    "dashboard/main",
    "projects/detail-table-sheet",
    "projects/detail-schedule",
    "figma/canvas-wireframe",
    "mobile/responsive-360",
    "members/organization",
    "accounting/overview",
    "work-management/board",
    "calendar/month",
    "reports/daily",
    "observability/error-tracker",
    "misc/dev-board",
    "vault/software-accounts",
    "members/roles",
    "ue-error/reference",
    "chat/messaging"
   ],
   "one_liner_impact": "약 2개월·310커밋 단독으로 20만 LOC·609 엔드포인트·113 테이블 규모의 실시간 협업 그룹웨어를 설계·구현·배포하고, OOM 팬아웃을 근본 해결해 장시간 실시간 부하에서도 무중단으로 운영했다."
  },
  {
   "app": "translate",
   "product_name": "Strata Lingua",
   "tagline": "폐쇄망(에어갭) 방산 기술문서를 위한 영↔한 전문 번역 AI — 용어 일관성과 표·도면 레이아웃까지 지키는 온프레미스 파이프라인.",
   "domain": "S1000D 데이터 모듈 기반의 정비·절차 기술문서를 인터넷 없는 폐쇄망 환경에서 영↔한으로 번역하고, 용어 일관성·표 레이아웃·품질 검수까지 한 워크스페이스에서 관리하는 방산 전문 문서 번역 플랫폼.",
   "tech_stack": [
    "Next.js 16",
    "React 19",
    "Tailwind CSS 4",
    "Express.js (Node)",
    "SQLite (WAL)",
    "Python ai_worker",
    "Ollama (로컬 LLM 서빙, qwen 72B / Q3 양자화)",
    "nomic-embed-text 임베딩",
    "RAG (FAISS · ChromaDB)",
    "pdf2docx · PyMuPDF · python-docx",
    "Docling · PaddleOCR / PP-StructureV3",
    "LibreOffice (DOCX→PDF)",
    "Docker (사용자별 격리 인스턴스)"
   ],
   "architecture_summary": "Next.js 16/React 19 프론트가 Express API로 요청하면, 업로드된 PDF는 스캔형/문서형을 자동 감지한 뒤 hybrid 파이프라인(pdf2docx로 PDF→DOCX 1:1 변환 → 문단·표셀·제목 단위로 로컬 LLM 치환 → 원문 DOCX·번역 DOCX·ZIP 산출물 사전 빌드)의 3단계로 흐른다. 모든 LLM 호출은 백엔드 큐를 거쳐 단일 GPU(Ollama qwen 계열)에서 머신당 활성 1건으로 직렬화되고, 용어 일관성은 문서 단위 캐시 + RAG 임베딩(FAISS/ChromaDB)으로, 문서·번역·용어·이력 상태는 SQLite(WAL)에 저장된다. 외부 CDN·클라우드 API 의존이 0이라 전 구성요소가 폐쇄망 로컬에서 동작한다.",
   "headline_metrics": [
    {
     "label": "번역 처리 속도",
     "value": "-58%",
     "context": "6페이지 기술문서 골든셋 기준 35분 → 13분 22초(2040s→803s). 양자화 재선택(Q4→Q3)으로 72B 모델을 48GB GPU에 100% 적재 + 표 셀 배치 호출(90→9회). 9샘플 품질 프로브 9/9 동일 이상."
    },
    {
     "label": "용어 일관성 품질 점수",
     "value": "70.5 → 86.5",
     "context": "골든셋 6페이지 axis4 자동 채점. 정규식 규칙 누적 대신 문서 단위 용어 캐시(DelTA)+제약 기반 사후교정(TAR) 도입. 동일 문단은 byte-identical로 재사용."
    },
    {
     "label": "동시성 결함 제거",
     "value": "CRITICAL 3 · HIGH 14 → 0",
     "context": "3개 감사 에이전트 병렬 진단 후 전건 수정. SQLite WAL로 동시 쓰기 SQLITE_BUSY ~99% 차단, 7개 불변식 회귀 테스트 상시화."
    },
    {
     "label": "전문 용어 지식베이스",
     "value": "6,300+ 용어",
     "context": "군종·도메인 브랜치별로 격리된 사전 + 임베딩. 번역 시 RAG 문맥 검색으로 주입, 전문가 큐레이션 검증 2,739건."
    },
    {
     "label": "대용량 문서 처리",
     "value": "289p / 94분 / 무손실",
     "context": "3,771블록(제목 523·문단 2,494·표셀 754) 완주, docling 폴백 0회. 완성 산출물이 Python finalizer SIGABRT로 폐기되던 회귀를 os._exit로 우회."
    }
   ],
   "challenges": [
    {
     "title": "양자화를 낮췄더니 속도와 정확도가 동시에 올랐다 (Q4→Q3)",
     "problem": "6페이지 PDF 한 건에 35분이 걸렸다. 프로파일링해 보니 병목은 네트워크·파싱이 아니라 LLM 토큰 생성 자체였고, Q4_K_M(47GB) 모델이 48GB GPU에 다 올라가지 못해 22%가 CPU로 오프로드되며 생성 속도가 초당 2.3토큰까지 떨어져 있었다.",
     "solution": "직관과 반대로 양자화를 Q4→Q3(37GB)로 '낮춰' 모델을 GPU에 100% 적재했다(초당 5.75~6.17토큰, 2.4배). 표 셀은 개별 호출(90회)을 번호 리스트 배치(9회)로 묶되, 응답 라인 수가 어긋난 청크만 1:1 경로로 폴백해 안전망을 뒀다. 9샘플 품질 프로브에서 9/9 동일 이상이었고, 오히려 전문 약어(BIT·IBIT·LRU 등) 보존이 더 충실해졌다.",
     "metric": "35분 → 13분 22초 (-58%), 토큰 생성 2.4배, 품질 회귀 0건"
    },
    {
     "title": "용어가 페이지마다 흔들리는 문제 — 정규식 땜질 대신 논문 기반 결정적 메커니즘으로",
     "problem": "같은 영문 용어가 페이지·표마다 다른 한국어로 번역되고(임무/미션), 약어가 격하되고(IBIT→BIT), 문단 어미가 뒤섞였다. LLM은 확률적이라 온도 0.1에서도 재처리마다 새 변형이 생겨, 후처리 정규식 규칙을 계속 늘리는 whack-a-mole에 빠지고 있었다.",
     "solution": "연구계 정설(DelTA 문서 단위 번역 에이전트, Translate-and-Revise, WMT25)을 단일 GPU·문단 단위라는 우리 셋업에 맞춰 도입했다. 문서 단위 용어 캐시가 첫 등장 번역을 이후 등장에 결정적으로 주입하고, 제약 위반(약어 누락·어미 불일치)이 검출되면 최대 3회 사후교정한다. 여기에 문단 TM 캐시를 더해 동일 문단은 아예 LLM 재호출 없이 byte-identical로 재사용했다.",
     "metric": "품질점수 70.5 → 86.5, 동일 문단 '준비/준비하기' 변형 100% 제거, 처리시간 오히려 -25%(244→183s)"
    },
    {
     "title": "인터넷도 무중단 재시작도 없는 납품 PC 한 대에서 안 깨지게",
     "problem": "폐쇄망 납품 PC 한 대에 다중 사용자·다중 문서·부가 AI 작업(용어 마이닝·품질 평가·임베딩)이 동시에 몰릴 수 있는데, 공유 자원인 단일 GPU와 SQLite가 경합하면 SQLITE_BUSY·좀비 잡·큐 영구 정지로 시스템이 무너진다.",
     "solution": "3개 감사 에이전트를 병렬로 돌려 동시성 결함(CRITICAL 3·HIGH 14)을 선제 진단하고 전건 수정했다. SQLite WAL+PRAGMA로 동시 쓰기 충돌을 ~99% 차단하고, GPU 작업은 머신당 활성 1건으로 직렬화(경합 0), 스케줄러·PDF 파싱은 원자적 락으로 정확히 1건만 획득하게 했다. 부팅 시 미완료 문서를 자동 재개하고, HF 오프라인 토글을 컨테이너·호스트 셸·systemd 3중으로 봉인했다.",
     "metric": "CRITICAL 3·HIGH 14 → 0, 스케줄러 동시 5요청 중 정확히 1건만 성공, 7개 불변식 회귀 테스트 PASS"
    },
    {
     "title": "표·도면이 살아있는 산출물 — 스캔·무선(borderless) 표 PDF까지",
     "problem": "legacy 파서는 표·도면이 많은 페이지에서 레이아웃이 뭉개졌고, pdf2docx는 테두리 없는 표를 행마다 쪼개거나(31개 단일행 tbl) 문단 한 줄로 평탄화했다. 대용량(289p) 문서는 처리를 다 끝낸 직후 C 확장 refcount 버그로 SIGABRT가 나 완성된 산출물이 통째로 폐기됐다.",
     "solution": "PDF→DOCX 1:1 변환 위에 XML 노드 단위로 in-place 치환하는 hybrid 파이프라인을 만들고, pdf2docx가 쪼갠 표는 grid 시그니처(±허용오차)로 재병합, 평탄화된 표는 PyMuPDF bbox 클러스터링으로 행·열을 복원했다. 완성 산출물 폐기는 SUMMARY 출력 후 Python finalizer를 os._exit로 우회해 막았다.",
     "metric": "289p 3,771블록 94분 완주·폴백 0회, borderless 표 31개→3개 정합 병합"
    }
   ],
   "why_not": [
    {
     "alternative": "하드 제약 디코딩(FSA로 용어를 강제 삽입해 결정성 확보)",
     "reason": "WMT25 결과 한국어처럼 어미 활용·다어절 표현이 많은 언어에서 유창성이 붕괴(fluency degeneration)한다. 결정성을 얻는 대가로 자연스러움을 잃어 기각하고, 문서 캐시(결정성)+사후교정(유창성 검증)으로 두 목표를 분리 확보했다."
    },
    {
     "alternative": "더 작은 32B 모델로 추가 2배 가속",
     "reason": "번역 품질을 건 도박이라 9샘플 프로브 같은 검증 없이는 채택 불가로 보류했다. Q3 양자화만으로 이미 품질 손실 없이 2.4배를 확보했기 때문에 리스크 대비 우선순위에서 밀렸다."
    },
    {
     "alternative": "클라우드 번역 API / 온라인 LLM 호출",
     "reason": "군납·폐쇄망 요건상 외부 인터넷이 불가하다. 전 구성요소를 로컬 GPU·로컬 캐시로 봉인해야 했고, 이 제약이 온프레미스 직렬 파이프라인이라는 아키텍처 선택 전체를 규정했다."
    }
   ],
   "limitations": [
    "테두리 없는 좁은 2~3열 표 중 페이지 경계에 걸쳐 데이터가 흩어진 일부 케이스(캡션 뒤에 페이지 브레이크가 끼어 여러 문단으로 분산)는 오탐 방지를 위해 재구성을 보수적으로 건너뛴다. 또한 pdf2docx 변환 단계에서 아예 누락된 행은 DOCX 후처리로 복원할 수 없어 별도 트랙으로 남겨 두었다.",
    "오프라인 동작은 캐시(HF 4.4GB·PaddleX 1.9GB·로컬 LLM)가 모두 채워진 상태에서 코드·배포 전수 조사로는 검증됐으나, 실제 인터넷 차단 상태의 최종 실드릴은 아직 미수행(권고 단계)이다. 뒤늦게 발견된 호스트측 OCR 서비스의 오프라인 토글 누락은 컨테이너·셸·systemd 3중으로 봉인해 하드닝했다."
   ],
   "hero_shots": [
    "job/detail",
    "dashboard/main",
    "project/detail",
    "glossary/list",
    "quality/main",
    "report/main",
    "queue/main",
    "glossary/pending",
    "scheduler/main",
    "system/audit",
    "system/users"
   ],
   "one_liner_impact": "인터넷 없는 납품 PC 한 대에서, 표·도면·전문 약어가 살아있는 S1000D 기술문서를 6페이지 13분에 영↔한 번역하고 용어 일관성까지 결정적으로 보장한다."
  },
  {
   "app": "docs-rag",
   "product_name": "Strata Index",
   "tagline": "폐쇄망 온프렘에서 클라우드 없이 S1000D 기술문서를 검색·답변하는 오프라인 RAG 대시보드",
   "domain": "항공우주·방위산업의 국제 기술교범 표준(S1000D)으로 작성된 정비 문서를 벡터 검색으로 찾고 로컬 LLM이 한국어 정비 답변을 생성하는, 인트라넷 전용 RAG 지식·품질검증·운영 모니터링 대시보드.",
   "architecture_summary": "브라우저 → FastAPI(Uvicorn) 단일 서버로, 외부망이 없는 인트라넷 전용 온프렘 환경이다. 채팅 요청은 에이전트 파이프라인을 탄다 — SearchAgent가 pgvector로 top-k 벡터 검색(유사도가 낮으면 키워드로 폴백)한 뒤, build_prompt로 로컬 Ollama LLaMA에 넘겨 SSE로 답변을 스트리밍하고, QualityAgent가 응답-문서 유사도를 검증한 다음 qa_history에 저장한다. PostgreSQL+pgvector가 문서 임베딩(multilingual-e5-base)을, Ollama가 답변 생성을, faster-whisper large-v3가 음성 STT를, ResNet50이 이미지 유사도를 담당하며, 빌드 도구 없는 vanilla JS(ES Modules)+Chart.js 프론트를 FastAPI가 정적으로 서빙한다.",
   "tech_stack": [
    "Vanilla JS (ES Modules, 빌드 도구 없음)",
    "Chart.js",
    "FastAPI + Uvicorn",
    "PostgreSQL + pgvector",
    "Ollama (LLaMA 3, 온프렘 GPU)",
    "multilingual-e5-base (임베딩·의도 분류)",
    "faster-whisper large-v3 (음성 STT, CUDA float16)",
    "ResNet50 (이미지 유사도, Cosine)",
    "SSE (토큰 스트리밍)",
    "Nginx + systemd (온프렘 배포, CI/CD 없음)"
   ],
   "headline_metrics": [
    {
     "label": "RAG 답변 정확도",
     "value": "96.0%",
     "context": "50문항 기준 48/50 (v9 92.0% → v10 96.0%). 채점 키워드 임계값을 40%→60%로 강화했는데도 상승"
    },
    {
     "label": "QoS Class A 달성률",
     "value": "100%",
     "context": "3초 이내 응답 비율 (v9 98.0% → v10 100.0%)"
    },
    {
     "label": "평균 벡터 검색 응답",
     "value": "15.2 ms",
     "context": "21.1ms → 15.2ms (−5.9ms), pgvector top-k 검색"
    },
    {
     "label": "연속 무중단 운영",
     "value": "161.9시간",
     "context": "약 6.7일 = 인증 요구치(24h)의 6.7배. 4대 서비스 1분 주기 자동 헬스체크, 통합 가동률 99.88%"
    },
    {
     "label": "데이터 정합성 전수 검증",
     "value": "805건",
     "context": "qa_history 열람이력 전수 자동 검증(검증 항목 2,415개 + 재현 검증 10건), 목표 ≥98%"
    }
   ],
   "challenges": [
    {
     "title": "채점 기준을 강화했더니 정확도가 올랐다",
     "problem": "초기 정확도 채점은 키워드 매칭 임계값 40%로 느슨해, 답변이 검색 문서를 실제로 반영했는지 엄밀히 가리지 못했다. 지표를 방어적으로 유지하면 인증 신뢰도가 흔들린다.",
     "solution": "채점 임계값을 60%로 올려 난이도를 높이는 동시에, 검색 단계에서 DMC 제품군·문서 의도(정비/설명) 기반 재정렬을 강화해 올바른 문서가 상위로 올라오게 했다. 더 엄격한 채점에도 정확도가 오히려 상승했다.",
     "metric": "정확도 92.0%(46/50) → 96.0%(48/50) · 키워드 임계값 40% → 60% · QoS Class A 98% → 100%"
    },
    {
     "title": "즉시성과 답변 품질을 2단계 응답으로 분리",
     "problem": "답변 품질을 높이자 LLM 생성 시간이 890ms→1,521ms로 늘어, 단발 응답으로는 체감 지연이 커졌다(품질↔속도 트레이드오프).",
     "solution": "채팅을 2단계로 나눴다 — 1단계 /chat/instant가 벡터 검색 미리보기를 300ms 내 즉시 표시하고, 2단계 /chat/stream이 SSE로 LLM 토큰을 스트리밍한다. 동시에 벡터 검색 자체를 최적화해 검색 지연은 오히려 줄여, 늘어난 생성 시간을 체감상 상쇄했다.",
     "metric": "벡터 검색 21.1ms → 15.2ms(−5.9ms) · 즉시 미리보기 <300ms · LLM 890ms → 1,521ms(의도된 품질 트레이드오프)"
    },
    {
     "title": "하드코딩 별칭 없이 검색 오정렬 제거",
     "problem": "순수 벡터 검색은 넓은 의미 유사도 탓에 엉뚱한 문서를 섞었다(범위 넓은 단어, 한↔영 교차 질의). 초기엔 질의어·의도어를 런타임 JSON 규칙 파일에 하드코딩했으나, 새 문서군마다 사람이 규칙을 수동 확장해야 했다.",
     "solution": "런타임 JSON 규칙 파일을 제거하고, 문서 성격을 search_metadata.document_type·XML 구조·DMC 코드에서 판단하도록 재설계했다. 새 DMC 제품군 문서가 들어오면 파이썬 코드 수정 없이 자동 인식·재정렬되어, 규칙 유지보수 없이 확장된다.",
     "metric": "하드코딩 별칭 0 · 새 제품군 문서 자동 적용 · 검색(Context) 정확도 100% 유지"
    },
    {
     "title": "폐쇄망에서 스스로 입증하는 무중단 운영",
     "problem": "인트라넷 전용·외부망 차단 환경이라, 4대 핵심 서비스(FastAPI·Ollama·PostgreSQL·Nginx)의 가용성을 외부 모니터링 SaaS 없이 시스템이 자체적으로 증명해야 했다.",
     "solution": "MonitorAgent가 1분 주기로 4대 서비스를 자동 헬스체크하고 점검 이력을 DB에 남겨 대시보드에 그대로 노출한다. 인증 요구치(24시간)를 크게 상회하는 연속 운영을 실증 데이터로 증빙했다.",
     "metric": "연속 무중단 161.9시간(약 6.7일) = 인증 요구 24h의 6.7배 · 통합 가동률 99.88%(2,600/2,603회 정상)"
    }
   ],
   "why_not": [
    {
     "alternative": "클라우드 LLM API (GPT/Claude 등)",
     "reason": "인트라넷 전용 폐쇄망이라 외부 API 호출 자체가 불가능하다. 온프렘 GPU 위에서 로컬 Ollama LLaMA로 추론을 전량 자체 처리했고, 'AI 비용 분석' 탭은 오히려 동일 질의량 기준 클라우드 API 예상 비용을 대조해 온프렘의 비용 이점을 가시화한다."
    },
    {
     "alternative": "LLM-as-judge (RAG-Triad Faithfulness 자동 채점)",
     "reason": "폐쇄망 로컬 LLaMA를 환각 검증 judge로 시험했으나 NLI 능력 부족으로 점수가 0.5에 뭉쳐(표본 21문항 중 13개) 신뢰할 수 없었다. 결정형이고 재현 가능한 규칙 기반 groundedness를 공식 신호로 유지하고, LLM judge는 보조 지표로 강등했다."
    }
   ],
   "limitations": [
    "잔여 오답 2건은 검색 실패가 아니라 채점 미달이다 — 두 건 모두 벡터 검색은 올바른 DMC를 반환(dmc_correct=True)했고, LLM 답변의 도메인 용어 포함률이 강화된 60% 임계값에 못 미쳐 오답 처리됐다. 지표를 방어하지 않고 지표의 한계를 그대로 설명한다.",
    "정확도는 랜덤 50문항 표본 평가라 전/후 1:1 비교가 아니며, 한↔영 교차 임베딩 품질과 오타·오음역 별칭은 아직 자동 정규화되지 않는다(데이터 정정·재임베딩 필요).",
    "RAG-Triad(v3) 채점은 로컬 judge 신뢰 불가로 공식 인증 게이트로 승격하지 못했고, 현재 공식 숫자는 결정형 v2 게이트(97.83%)를 유지한다."
   ],
   "hero_shots": [
    "main/dashboard",
    "eval/doc-accuracy",
    "qa/qa",
    "convert/convert",
    "ai/ai-data",
    "eval/uptime",
    "eval/ai-cost",
    "main/glossary",
    "main/inventory",
    "main/ram",
    "ai/learning"
   ],
   "one_liner_impact": "외부망도 클라우드도 없는 폐쇄망 온프렘에서 S1000D 정비 문서를 96% 정확도로 검색·답변하고, 채점을 강화하면서도 정확도를 끌어올리며 6.7일 무중단으로 인증 요구치를 6.7배 상회한 오프라인 RAG 대시보드."
  }
 ]
}
