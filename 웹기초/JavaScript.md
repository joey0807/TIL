# 자바 스크립트

## 실행 환경

1. 웹 브라우저에서 실행
   - 웹 브라우저가 자바스크립트의 인터프리터의 역할을 수행
   - 웹 브라우저의 `개발자 도구`를 이용해서 실행
     - `console`을 이용해서 자바스크립트 코드를 실행
   - URL 입력창을 통한 실행
     - `javascript:alert('hello javascript');
     - 알림창에 `hello javascript` 문구가 뜸
     - 실행이 안된다면, 브라우저의 보안 설정 때문일 경우가 큼
   - HTML 코드 내에서 실행
     - `<script></script>` 내에 자바스크립트 코드를 작성
     - HTML 파일이 브라우저에서 로드될 때, 자동으로 실행
2. node.js를 이용한 실행
   - 브라우저 없이도 자바스크립트 코드를 실행
   - node.js가 인터프리터의 역할 수행
   - 자바스크립트를 `백엔드`에서 실행하고자 하는 경우에 주로 많이 사용

## 기초 문법

- `Vanilla Javascript` 라고 표현
  - 순수 자바스크립트
  - 자바스크립트만 사용하는 경우는 드물고 보통은 라이브러리를 사용
    - vue, js, react, jquery, ...

## DOM

- Document Object Model
- 직역하면 `문서 객체 모델`
  - 쉽게는 브라우저에서 보여지는 문서를 하나의 객체로써 다룸
- 요소(element)
  - 태그와 속성, 내용(content)을 하나의 요소라고 표현함
  - 일반적으로는 태고와 요소를 같은 의미로 많이 사용
  - DOM에서는 각각의 요소를 계층적인 구조로 표현

![](https://i2.wp.com/oursmalljoy.com/wp-content/uploads/2020/12/DOM.jpg?resize=1200%2C416&ssl=1)

- document 객체
  - 현재 브라우저에서 보여지는 문서는 하나의 `document` 객체로 표현되어짐
  - 자바스크립트는 `document`를 통해서 웹의 모든 내용을 전부 제어
  - 모든 요소에 대한 정의와 접근 방법들이 전부 명시되어 있음
  - 요소를 추가, 수정, 삭제
  - 요소에 대한 속성도 추가, 수정, 삭제
  - 이벤트에 제한 제어도 가능
    - 마우스 클릭, 키보드 입력, ...

### 요소의 선택

- 자바스크립트 `document` 객체 내의 요소들을 다룰 수 있는 API를 제공
  - `document.getElementByTagName('태그 이름')`
  - `document.getElementById('Id 속성')`
  - `document.getElementByClassName('class 속성')`
  - `document.querySellectAll('CSS 선택자')`

- 요소 선택을 통한 원하는 요소의 접근 예시

```html
document.querySelectorAll('li.nav_item a[data-clk="svc.cafe"]')[0].innerText = '자바스크립트를 통해서 바꿔줄 수 있다';
```

### 계층구조를 이용한 접근

- DOM 구조에서는 각 요소들이 전부 하나의 객체가 됨
  - `document.요소이름`
- DOM에서 각 노드와의 관계
  - parentNode : 현재 노드의 상위 노드(부모 노드)
  - childNodes : 자식 노드들의 배열
  - firstChild : 첫 번째 자식 노드
  - lastChild : 마지막 자식 노드
  - nextSibling : 다음 형재 노드
  - previousSibling : 이전 형제 노드
- 계층구조를 이용한 원하는 요소의 접근 예시

```html
document.body.childNodes[3].childNodes[5].childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
```

## BOM

- Browser Object Model
- `브라우저 객체 모델`
  - 브라우저 또한 객체로서 관리
- `window`객체
  - history : 방문한 페이지에 대한 정보
    - `window.history.back() `: 이전 페이지
    - `window.history.forward()` : 다음 페이지
  - location : 현재 열려있는 페이지에 대한 정보
    - `window.location.href()` : 현재 열려있는 페이지의 URL