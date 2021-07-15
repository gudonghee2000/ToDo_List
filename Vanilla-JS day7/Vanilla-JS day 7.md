# Vanilla-JS day 7

## 1. Todo-list(할일 리스트) 완성예시

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1.png](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1.png)

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/333.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/333.jpg)

화면과 같이 할일을 적는 input 폼과 할일의 리스트들이 나오는 것을 볼 수 있다.

- CSS를 적용한 화면의 모습이다.

그렇다면 Todo-form과 Todo-list를 구현해보자!

## 2. Todo-form & list 만들기

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1.jpg)

HTML 파일로 간 뒤 사진과 같이 할일을 작성하기위한 form인 todo-form태그를 생성한다. 기존에 login-form을 생성할 때와 비슷하다.

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%201.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%201.jpg)

다음으로, "todo-list"를 이름으로 가진 ul 태그를 생성한다.(20번 라인)

- ul태그를 생성한 이유는 할일 목록을 리스트 형식으로 받아와 브라우저에 출력하기위함이다.

todo.js 자바스크립트 파일을 생성한다. 그 후 아래와 같이 진행한다. 

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%202.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%202.jpg)

우선, HTML의 todo-form, todo-input, todo-list를 todo.js파일과 연결시켜준다.

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%203.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%203.jpg)

그 다음 todo-form에서 "submit" 이벤트 발생시 처리를 위한 handle 함수를 만든다. (33번 라인)

"submit"의 자동으로 새로고침 되는 이벤트를 없앤다. (34번 라인)

todo-form 안에 입력된 input 값을 newTodo라는 변수에 넣고 값을 초기화 시킨다. (35~36번 라인)

이후 newTodoObj 변수에 객체 형식으로 newTodo 값과 id를 넣는다. (37번 라인)

- **객체형식으로 넣는이유는?**

     **추후에 todo-list에 저장된 데이터의 중복 삭제 를 방지하기 위해 id를 설정한 객체로만든것!**

toDos(배열)에 newTodoObj 값을 넣어준다. (41번 라인) 

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%204.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%204.jpg)

마지막으로 paintToDo, saveToDos 함수를 실행시킨다. (42~43번 라인)

- **paintTodo ⇒ HTML에 생성된 newTodoObj 객체를 추가하고 브라우저에 띄우기 위한 함수**
- **saveToDos ⇒ 브라우저 재실행 or 새로고침시 불러올 input값들을 DB에 저장하기 위한 함수**

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%205.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%205.jpg)

생성한 handleToDoSubmit 함수를 toDoForm의 "submit"함수의 콜백함수로 연결시킨다.

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%206.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%206.jpg)

paintToDo 함수를 구현해보자!

HTML에 들어갈 li태그를 생성하고 newTodo**(handleToDoSubmit의 newTodoObj)**의 id를 넣는다. 

(21~22번 라인)

이어서, HTML에 들어갈 span 태그를 생성하고 newTodo의 text 값을 넣는다. (23~24번라인)

마지막으로 HTML에 들어갈 button 태그를 생성하고 이벤트를 연결시킨다.(25~26번 라인)

- **button 생성의 이유와 deleteToDo 함수는?**

    **todo-list에서 할일 을 끝낸 후 HTML 상에서 해당태그를 지우기위해 button을 생성함**

    **또한, button 클릭 시 태그 삭제 기능을 위해 deleteToDo 콜백함수를 생성했다.**

li 태그에 span, button 태그를 넣어주고 마지막으로 toDoList에 li 태그를 넣어준다. (28~30번 라인)

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%207.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%207.jpg)

button클릭시 발생할 deleteToDo 콜백 함수를 구현해보자!

li 함수에 현재 event 태그의 부모태그를 연결한다. (14번 라인)

이어서, filter 함수를 통해 toDos배열에서 삭제하고자한 태그의 값을 없애준다. (15번 라인)

- **toDos에서도 해당하는 값을 제거하는 이유는?**

    **localStorage(DB로 사용)에서도 값을 제거하여야 브라우저를 재시작하여도 삭제한 결과가** 
    **유지되기 때문이다.**

HTML상에서 해당 li태그를 제거한다. (16번 라인)

현재 toDos를 localStorage에 저장한다. (17번 라인)

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%208.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%208.jpg)

다음으로, saveToDos를 구현하자.

localStorage에 현재 todos의 값들을 저장한다. (10번 라인)

- **JSON.stringify()함수를 사용하는 이유는?**

    **그냥 setItem을 하게되면 배열 안의 배열형태가 아닌 하나의 값으로 저장하게된다.**

    **하나의 값으로 저장되면 추후에 값을 로드 할때, 값이 섞이는 문제가 발생 할 수 있다.** 

    **그러므로 위 함수를 사용하여 string 객체로 값들을 저장하고 이때 배열의 형식을 유지한채 값을** 

    **localStorage에 저장한다.**

마지막으로, localStorage에 저장한 데이터를 load하는 기능을 구현해보자.

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%209.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/1%209.jpg)

savedToDo에 localStorage에 저장된 값을 가져온다. (48번 라인)

만일 저장된 값이 존재(로드할 값이 있는경우)한다면 저장 값을 toDos에 넣어주고 

HTML에 추가해준다. (50 ~ 54번 라인)

## 3. 최종 결과

![Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/333%201.jpg](Vanilla-JS%20day%207%2050041503b85345ee9a24b4012fe5bcec/333%201.jpg)

위 예시는 최종완성된 모습이다.

이전 장들의 시계, login-form, 명언, todo-form, todo-list가 구현된 것을 볼 수있다.

- 위 예시는 직접 CSS를 구현한 모습이다!

## 4. 소스 코드

위 웹페이지 제작에 사용한 소스코드(HTML, CSS, JS파일)은 git에 함께 업로드 하였다.