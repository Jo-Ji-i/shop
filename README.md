# SSI SHOP

React 학습을 위해 제작한 **쇼핑몰 프로젝트**입니다.  
API 연동 방식, Redux를 이용한 상태 관리, 그리고 다양한 UI 구현 능력을 익히는 데 초점을 두었습니다.


<img width="1004" height="532" alt="스크린샷 2025-11-06 오후 9 34 05" src="https://github.com/user-attachments/assets/d0f6f359-4b83-4d48-959b-9c95d1be998b" />


---

## 🚀 프로젝트 소개

**SSI SHOP**은 React 환경에서 구현된 간단한 쇼핑몰입니다.  
상품 리스트와 상세 페이지, 장바구니, 이벤트 창 등 기본적인 전자상거래 구조를 갖추고 있으며,  
Redux Toolkit을 이용한 전역 상태 관리 및 TailwindCSS를 활용한 빠른 UI 구현을 학습하기 위해 만들어졌습니다.

---

## 🧩 주요 기능

| 기능 | 설명 |
|------|------|
| 상품 리스트 | `data/product.js`의 상품 정보를 기반으로 전체 상품을 표시 |
| 상품 상세 | 상품별 상세 정보 표시 |
| 장바구니 | Redux 상태를 기반으로 수량 증가/감소, 합계 계산 등 구현 |
| 이벤트 창 | 단순 팝업 형식의 이벤트 배너 |
| 결제 금액 계산 | 장바구니 내 상품 총액, 배송비 합산 표시 |
| 장바구니 기능 (구현중) | 선택 상품 삭제 / 전체 삭제 / 선택 구매 기능 예정 |

---

## ⚙️ 사용 기술 스택

| 분야 | 기술 |
|------|------|
| Frontend | React, Vite |
| State Management | Redux Toolkit |
| Styling | TailwindCSS, styled-components |
| Routing | React Router |
| Deployment | Vercel |

---


## 📁 프로젝트 구조

```plaintext
src
├─ assets/                # 이미지, 폰트 등 정적 리소스
├─ components/            # 주요 UI 및 페이지 컴포넌트
│  ├─ Cart.jsx            # 장바구니 페이지
│  ├─ Shop.jsx            # 상점 메인 페이지 및 헤더
│  ├─ ProductList.jsx     # 상품 리스트 컴포넌트 (예정)
│  ├─ ProductDetail.jsx   # 상품 상세 컴포넌트 (예정)
│  └─ EventBanner.jsx     # 이벤트 팝업/배너 컴포넌트
│
├─ data/
│  └─ product.js          # 상품 더미 데이터
│
├─ stores/                # Redux Toolkit 상태 관리
│  ├─ cartSlice.js        # 장바구니 관련 reducer 및 action
│  ├─ userSlice.js        # 사용자 상태 (이름, 나이 등)
│  └─ store.js            # Redux store 설정
│
├─ App.jsx                # 라우팅 및 전체 페이지 구조
├─ main.jsx               # React DOM 렌더링 진입점
└─ index.css              # TailwindCSS 및 전역 스타일
```



---

## 💡 학습 포인트

- Redux Toolkit을 이용한 전역 상태 관리
- React Router를 통한 SPA 구조 설계
- TailwindCSS + styled-components를 함께 활용한 UI 스타일링
- 장바구니 상태 변경 (수량 조절, 총합 계산)
- Vite 기반의 빠른 개발 환경 구성 및 Vercel 배포

---

## 🌐 배포 링크

🔗 **Vercel 배포 URL**  
https://shop-ecru-alpha.vercel.app

---

## 🧭 향후 계획

- [ ] 장바구니 기능 고도화 (선택상품 삭제, 전체삭제)
- [ ] localStorage 연동으로 장바구니 데이터 유지
- [ ] 결제 페이지 및 구매 로직 추가
- [ ] 상품 필터링 및 검색 기능 구현

---

## 🧑‍💻 개발자

**지민 조 (Jo Ji Min)**  
> Frontend Developer  
> React · UI/UX · JavaScript 학습 및 프로젝트 중심 개발

---
