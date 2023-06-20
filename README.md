# SCS's Portfolio

<div align="center">

</div>

## 프로젝트 정보

> **1인 개발** <br/> **개발기간: 2023.06.07 ~ 2023.06.20**

## 배포 주소

> **프론트 서버** : <a href="https://portfolio-next-red-three.vercel.app/" target="_blank"> Portfolio </a>

## 개발자 소개

|                                                              성창수                                                              |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/110822847/229564340-070947f1-3f34-4cf4-b25f-ffe2d274be50.jpg" width="160px"> |
|                                              [@changsu](https://github.com/scs0209)                                              |
|                                                       순천향대 화학과 졸업                                                       |

## 프로젝트 소개

나의 대한 소개를 하는 개인 포트폴리오 웹사이트

## 프로젝트 목적
이전에 바닐라 자바스크립트를 사용하여 만든 포트폴리오는 클론 코딩이였기 때문에, 이번에 직접 웹사이트를 만들면서 Next.js를 배우는 목적으로 제작하였다.

## Stack🤡

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## 데모 영상 📺
![포트폴리오 데모](https://github.com/scs0209/portfolio-next/assets/110822847/368c8216-3c4d-4035-967b-80bb6ac20bce)

---

## 주요 기능 📦

### ⭐️ 반응형 디자인

- 모바일도 고려한 반응형 디자인으로 제작하였다.

### ⭐️ 라우트

- 해당 페이지에 맞는 라우트를 해주었다.

### ⭐️ 메일 기능

- 포트폴리오에 대한 피드백을 할 수 있는 메일 기능을 넣었다.

---

## 아키텍쳐

### 디렉터리 구조

```bash
portfolio-next/
├── config/      
│   └── index.ts
├── public/
├── src/
│    ├── components/
│    |     ├── common/ # 헤더, 푸터 등 재사용되는 컴포넌트들
|    |     |    └──...
│    |     ├── .../ # 그 외 컴포넌트들
│    ├── hooks/  # 커스텀 훅들
|    |    └── ...
│    ├── pages/  # 라우트 및 페이지 관련 컴포넌트
│    ├── styles/ # 테일윈드 css
│    ├── types/ # 서버로부터 받아오는 데이터 타입 정의 파일
│     └── index.tsx
│   ├── package.json
│   └── ...
```
