# Vanilla-JS day6

## CLOCK AND QUOTES, BACKGROUND 만들기

- 완성 예시

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1.png)

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2.png)

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/3.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/3.png)

위 3가지 사진은 각각 시계, 명언, 배경을 적용한 모습이다.

- **현재 사진은 CSS를 따로 적용한 페이지의 모습이다.**

## 1. 시계 만들기

우선 첫번째 사진과 같이 실시간 시간을 알려주는 시계를 만들어보자.

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%201.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%201.png)

사진의 12번째 줄과 같이 시계를 표기할<h2 id="clock"> 태그를 HTML에 생성한다.

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%202.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%202.png)

그 후에 1번째 줄과 같이 Javascript에 <h2> 태그를 가져온다.

3번째 줄처럼 getClock 함수를 생성한뒤 시, 분, 초를 각각 hours, minutes, seconds 변수에 가져온 후

<h2>태그의 innerText에 넣어준다. (8번 라인) 

마지막으로 12번 라인 처럼 setInterval 함수를 실행하여 1000ns마다 getClock함수를 실행시켜 실시간으로 시간을 알려주는 시계를 만들 수 있다.

- **padStart(num, st) 함수는 현재 변수가 num 길이보다 작다면 st에 해당하는 문자를 부족한 길이만큼 추가시켜 주는 함수**
- **4번 라인의 const date= new Date();는 Date클래스 혹은 모듈의 함수를 사용하기 위해 Date클래스의 객체를 생성한 것이다! (객체지향프로그래밍 주요개념!!)**

## 2. 명언집 만들기

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2%201.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2%201.png)

위 사진은 브라우저에 저장해놓은 명언을 가져와 띄운 모습이다.

여러개의 명언을 배열에 넣어 Random하게 브라우저에 출력되게 구현해보자!

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%203.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%203.png)

우선 HTML에 명언을 넣기 위한 div 태그와 child태그로 span태그 두개(각각 명언과 작가가 

들어갈 예정)를 생성한다.(21~24 라인)

- **div와 span은 기능을 따로 가지지않는 태그이다. 그러나 차이점을 가지는데, div는 브라우저 상에서 가로폭 공간 전부를 가지지만, span은 태그안의 내용크기만큼만 공간을 차지한다.**

 

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%204.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%204.png)

이후 quotes.js 파일을 생성한 다음 quotes 배열에 원하는 명언과 작가를 object로 넣는다. 

object를 통해 접근성이 높아지기 때문에 array가 아닌 object로 생성한다.

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%205.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%205.png)

명언과 작가를 넣기위해 만든 span 태그를 순서대로 Javascript에 가져온다(36, 37 라인)

그 다음, random하게 quotes배열에서 object를 가져오고(39라인) 이를 span태그 두개에 명언과 작가로 넣어준다.(41, 42 라인)

## 3. 배경 이미지 삽입

마지막으로 배경이미지를 삽입해보자!

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%206.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%206.png)

우선 마음에 드는 이미지 3장을 선택하여 저장한다.

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2%202.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/2%202.png)

선택한 이미지 3장을 담은 배열을 Javascript에 생성한다. (1번 라인)

이미지 배열에서 랜덤하게 하나의 이미지를 가져온다. (3번 라인)

HTML에 <img> 태그를 생성한다. (5번 라인)

- **배경이미지 삽입단계는 HTML에 태그를 생성하지 않고 Javascript에서 생성하려고하기 때문에 <img> 태그를 Javascript에서 생성하였다!**

생성한 img 태그의 src 속성을 이미지가 있는 상대경로에 연결해준다. (7번 라인)

이미지 경로 까지 연결된 img태그를 HTML 파일의 body부분에 연결시켜준다. (9번 라인)

img 태그의 id를 설정해준다. (11번 라인 ⇒ 이후 css 적용을 위해서 이다.)

## 4. 완성 모습

![Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%207.png](Vanilla-JS%20day6%202808b0de44ae4ab89916343c6d6031c0/1%207.png)

다음은 최종적으로 완성된 시계와, 명언, 배경의 모습이다. 추가적으로 이전장의 login-Form 또한 볼 수 있다.

- **위 사진은 CSS가 적용된 모습입니다!**