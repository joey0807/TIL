# HTML

- Hyper-Text Markup Language
  - 문서의 구조를 표현
  - 제어문이 없음(분기, 반복)
  - `자바스크립트`가 HTML의 부족한 부분을 대신하고 있음

## HTML의 기본 구조

```html
<!DOCTYPE html> <!-- HTML5 표준을 따르는 문서라는 표시 -->
<html>          <!-- HTML 문서의 시작 -->

    <!-- 
        화면에 보이지 않는 내용들 
        HTML 문서의 정보에 대한 내용들이 주로 들어감.
    -->
    <head>

    </head>

    <!-- 
        화면(웹 브라우저)에 보여지는 모든 내용들
    -->
    <body>
        <h1> 이렇게 해도 잘 되긴 할텐데 ... </h1>
    </body>

</html>
```

## TAG

- `<` `>` 를 이용해서 표현
- 내용(contents)에 대한 타입을 나타내는 용도
- 기본적으로는 한 쌍으로 사용
- 태그의 구조

```html
<opening tag> 내용 </closing tag>
<tagName /> self closing
```

- 기본적으로 태그들은 계층적인 구조를 같이 표현
  - 최상위 태그는 항상 `HTML`
  - `head`와 `body`는 HTML의 하위 태그
  - 일반적으로 계층 표현을 `들여쓰기`를 이용해서 표현

## 속성(Attribute)

1. 일반 속성
   - 태그별로 사용할 수 있는 속성들이 정해져 있음
   - 지원하는 속성을 이용해서 태그에 대한 세부적인 설정 가능

2. 글로벌 속성
   - 모든 태그에서 공통적으로 사용할 수 있는 속성
   - class, id, ...
   - 이벤트 속성
   - 스타일 속성

## 기본태그

- 문서의 구조를 표현
  - 워드나 한글을 이용해서 작성할 수 있는 내용들
  - 제목, 본문, 표, 그림, 목차, ...
  - 웹이 발전하면서, 원래 용도보다는 응용된 형태로 더 많이 사용

### Heading

- 제목을 표현하는 태그
- 6단계로 구분
  - `<h1> ~ <h6>`
- 사용법

```html
<h1> 가장 큰 제목 </h1>
<h3> 중간 제목 </h3>
<h5> 소제목 </h5>
```

### Paragraph

- 문단, 본문, 단락 등을 표현하는 용도
- 일반적으로는 문자를 표현할 때 주로 사용
- 사용법

```html
<p> 일반적으로 텍스트를 표현하는 용도로 사용이 됩니다 </p>
```

- Line Break
  - html은 엔터도 태그로 표현
  - `<br>` 
  - 내용이 없기 때문에 따로 태그를 닫지 않아도 됨

- Non-breaking Space
  - `&nbsp;`, `&ensp;`, `&emsp;`
  - 공백 대신에 사용하는 공백문자
  - 문자열 이스케이프 정도로 해석
    - `\n`과 비슷

### 리스트

- 목차, 목록 등을 표현할 때 사용할 수 있는 태그
- 정렬된 리스트 : Ordered List => `<ol>`
- 비정렬 리스트 : Unordered List => `<ul`
- 사용법

``` html
<ol> 순서있는 리스트 
    <li> 첫번째</li>
    <li> 두번째</li>
    <li> 세번째</li>
</ol>

<ul> 순서없는 리스트 
    <li> 첫번째</li>
    <li> 두번째</li>
    <li> 세번째</li>
</ul>
```

- `ol`과 `ul`의 차이점 : 리스트 아이템을 나열할 때 아이템의 순서를 숫자로 표현하는 것과 안하는 것의 차이 정도

### 이미지

- `<img>`는 내용이 없는 태그 중 하나
- 알반적인 사용법

``` html
<img src='url/path' />
```

- ` height`, `width` 속성 사용법

``` html
<img src='url/path' width='px', height='px' />
```

### 테이블

- 일반적인 문서에서 `표`에 해당하는 내용
- 테이블을 이용해서 웹 페이지 레이아웃을 표현하기도 함
  - html5 표준부터는 div를 더 많이 사용
- 테이블 기본 구조

``` html
<table>   <!-- 테이블의 시작 -->
  <thead> <!-- 제목 라인 --> 
    <tr>  <!-- 행을 표현 -->
      <th></th>  <!-- 컬럼 --> 
    </tr>
  </thead>

  <tbody> <!-- 표에 들어갈 내용 -->
    <tr>  <!-- 행을 표현 -->
      <td> </td> <!-- 컬럼 --> 
    </tr>
  </tbody>
</table>  <!-- 테이블의 끝 -->
```

### anchor

- 하이퍼 링크
  - 지금의 웹이 만들어지는데 가장 중요한 기능
  - 봇(bot) - 자동화된 프로그램
    - 웹 페이지도 봇에 의해서 자동으로 수집
    - 시드(seed) 페이지를 통해서 하이퍼 링크를 통해서 연결되어 있는 다른 웹 페이지를 찾는 방식
    - 전 세계에 흩어져 있는 웹 페이지들을 전부 수집
    - 이렇게 수집된 페이지에서 사용자가 원하는 페이지를 가장 빠르게 검색해서 제공 해주던 사이트가 바로 구글
- 사용법

```html
<a>연결된 페이지의 이름</a>
```

- 속성
  - href : 연결된 페이지의 주소(URL/URI)
  - target : 연결된 페이지로 이동하는 방식
    - _self(default) : 현재 창에서 해당 페이지로 바로 이동
    - _blank : 새 창에서 해당 페이지로 이동
    - _parent : 현재 창보다 상위 창에서 해당 페이지로 이동
    - _top : 최상위 창에서 해당 페이지로 이동

## HTML Box Model

- 태그들은 배치되는 형태에 따라서 크게 2가지로 분류
  - 어떤 태그를 사용하느냐에 따라서 레이아웃이 결정
  - Block 기반 태그
  - Inline 기반 태그

### Block 기반 태그

- DIV
  - `익명태그`
  - 용도가 정해져 있지 않은 태그로, 활용성이 굉장히 높아서 많이 사용
- 그 외의 블록 기반의 태그들
  - p, ol, ul, li, table, h

- 실습 예제

``` html
<!DOCTYPE html>
<html style='border: 0.5px dashed blue'>
    <head>
    </head>

    <body style='border: 0.5px dashed red'>

        <!-- 블록기반의 태그들 -->
        <h1 style='border: 0.5px dashed green'> Heading </h1>
        <p style='border: 0.5px dashed yellow'> Paragraph </p>

        <div style='border: 0.5px dashed black; width:100px; height:100px'>
        </div>
        <div style='border: 0.5px dashed black; width:100px; height:100px'>
        </div>
        <div style='border: 0.5px dashed black; width:100px; height:100px'>
        </div>
    </body>
</html>
```

- 스타일 속성
  - border : 경계선(테두리)
    - 선의 굵기가 0.5px이고, 타입이 점선이고 컬러 지정
- 각 태그들이 브라우저에서 차지하는 영역을 확인
  - 실행 시 보여지는 박스들이 각 태그 화면애서 차지하는 영역
- 블록기반의 태그 특징
  - 태그 하나가 전체 너비를 모두 차지
  - 다음 라인에 태그의 내용이 표시
  - 즉, 블록기반의 태그들은 화면에 배치가 될 떄, 한 줄에 하나씩 배치됨

### Inline 기반의 태그

- `<span>`
  - 인라인 기반의 대표적인 태그
  - `div`와 마찬가지로 `익명태그`중 하나
  - 기본적으론 div와 거의 동일하지만, `inline` 기반이 차이점
- 그 외 인라인 기반 태그들
  - img, a, ...

- 실습 예제

```html
<html style='border: 0.5px dashed blue'>
    <head>
    </head>

    <body style='border: 0.5px dashed red'>

        <!-- 블록기반의 태그들 -->
        <h1 style='border: 0.5px dashed green'> Heading </h1>
        <p style='border: 0.5px dashed yellow'> Paragraph </p>

        <div style='border: 0.5px dashed black; width:100px; height:100px'>
            div1
        </div>
        <div style='border: 0.5px dashed black; width:100px; height:100px'>
            div2
        </div>
        <div style='border: 0.5px dashed black; width:100px; height:100px'>
            div3
        </div>

        <!-- 인라인 기반의 태그들 -->
        <span style='border: 0.5px dashed black;'>
            span1
        </span>
        <span style='border: 0.5px dashed black;'>
            span2
        </span>
        <span style='border: 0.5px dashed black;'>
            span3
        </span>
    </body>
</html>
```

## 레이아웃

- div를 통해서 배치
- semantic tag를 사용해서 배치
- table을 이용해서 배치
  - HTML5 표준부터 사용하지 않는 방법

### iframe

- inline frame의 약자
- 웹 페이지 않에 또다른 웹 페이지를 표현할 수 있는 방법
- 사용법

```html
<iframe src='https://www.daum.net'></iframe>
```

### semantic tag

- HTML5 표준에서 새로 제공하는 태그들
  - 레이아웃만을 위해서 제공하는 태그
- 레이아웃을 나타내는 시멘틱 태그
  - header, nav, main, section, article, asise, footer

- HTML5 표준 이후 방식

```html
<header id="daumHead" class="head_daum" data-tiara-layer="header">
<main id="daumContent">
<footer id="daumFoot" class="foot_daum" data-tiara-layer="footer">
```

- 시멘틱 태그를 사용해도 배치가 자동으로 되지는 않음
  - 그냥 의미적으로만 사용
  - CSS를 통해서 직접 배치를 따로 해 줘야 함

```html
<header >
    헤더 부분 입니다. 
</header>            
<main>
    메인 부분 입니다. 
</main>
<footer>
    푸터 부분 입니다. 
</footer>
```

## 입력 태그들

- 사용자로부터 웹 페이지를 입력받아서 서버에 전달하기 위한 용도

### form

- post 방식으로 서버에 데이터를 전달
  - 가장 많이 사용되는 경우 : 로그인 처리와 같은 경우
- form 태그의 일반적인 형태

```html
<form action='url/app/id' method='post'>
  <!-- 여러가지 입력 태그들이 올 수 있습니다 -->
</form>
```

- form의 주요 속성
  - action : 입력 데이터를 처리할 서버(벡엔드/웹어플리케이션)의 URL
  - method : 데이터를 전달하는 방법(GET/POST)
    - GET 방식 : URL/URI를 통해서 전달
      - 보내려는 데이터가 매우 쉽게 외부에 노출되기 때문에 보안에 취약
      - 별로 중요하지 않은 데이터를 전송하는경우
    - POST 방식 : 데이터를 별도의 방식으로 전달
      - 보내려는 데이터가 외부에 쉽게 노출되지 않음
      - 암호화된 통신(https)을 사용하면 보내려는 데이터가 암호화되기 때문에 더더욱 확인하기 어려움

### input

- 입력받고자 하는 형태를 정의
  - text, radio button, checkbox, select, button, submit, ...
- 실습 예제

``` html
<input type='text' />
        <select>
            <option value='첫번째'>1</option>
            <option value='두번째'>2</option>
            <option value='세번째'>3</option>
        </select>
        <input type='hidden' />

        <input type='button' value='버튼'/>
        <input type='submit' value='제출'/>
```

- 속성
  - name
    - 각 입력 요소를 구분하는 중요한 속성
    - 데이터를 서버에 전달할 때, 변수의 이름으로 사용
    - 반드시 정의해 주는것이 좋음