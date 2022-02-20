https://velog.io/@ragnarok_code/JavaScript-자바스크립트-테스팅하기

### Jest

#### 1. add scrips (package.json)

```javscript
"scripts": {
  "test": "jest"
}
```

#### 2.. 전체 파일 테스팅

```javascript
yarn test
```

#### 3.. 특정 파일 테스팅

```javascript
yarn test -- fileName.js
```

### Stack(Stack)의 사용 사례

재귀 알고리즘을 사용하는 경우 스택이 유용하다.

#### 1. 재귀 알고리즘

- 재귀적으로 함수를 호출해야 하는 경우에 임시 데이터를 스택에 넣어준다.
- 재귀함수를 빠져나와 퇴각 검색(backtrack)을 할 때는 스택에 넣어 두었던 임시 테이블을 빼줘야 한다.
- 스택은 이런 일련의 행위를 직관적으로 가능하게 해 준다.
- 또한 스택은 재귀 알고리즘을 반복적 형태(iterative)를 통해서 구현할 수 있게 해준다.

#### 2. 웹 브라우저 방문기록(뒤로가기)

#### 3. 실행취소(undo)

#### 4. 역순 문자열 만들기

#### 5. 수식의 괄호 검사 (연산자 우선순위 표현을 위한 괄호 검사)

#### 6. 후위 표기법 계산
