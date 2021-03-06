# 3장. 코드에서 나는 악취

### 기이한 이름 (Mysterious Name)

- 함수 선언 바꾸기
- 변수 이름 바꾸기
- 필드 이름 바꾸기

### 중복 코드 (Duplicated Code)

- 함수 추출하기
- 문장 슬라이드하기
- 메서드 올리기

### 긴 함수 (Long Function)

- 함수 추출하기
- 임시 변수를 질의 함수로 바꾸기
- 매개변수 객체 만들기
- 객체 통째로 넘기기
- 함수를 명령으로 바꾸기
- 조건문 분해하기
- 함수 추출하기
- 조건부 로직을 다형성으로 바꾸기
- 반복문 쪼개기

### 긴 매개변수 목록 (Long Parameter List)

- 매개변수를 질의 함수로 바꾸기
- 객체 통쨰로 넘기기
- 매개변수 객체 만들기
- 플래그 인수 제거하기
- 여러 함수를 클래스로 묶기

### 전역 데이터 (Global Data)

- 변수 캡슐화하기

### 가변 데이터 (Mutable Data)

- 변수 캡슐화하기
- 변수 쪼개기
- 문장 슬라이드하기
- 함수 추출하기
- 질의 함수와 변경 함수 분리하기
- 세터 제거하기
- 파생 변수를 질의 함수로 바꾸기
- 여러 함수를 클래스로 묶기
- 여러 함수를 변환 함수로 묶기
- 참조를 값으로 바꾸기

### 뒤엉킨 변경 (Divergent Change)

- 단계 쪼개기
- 함수 옮기기
- 함수 추출하기
- 클래스 추출하기

### 산탄총 수술 (Shotgun Surgery)

- 함수 옮기기
- 필드 옮기기
- 여러 함수를 클래스로 묶기
- 여러 함수를 변환 함수로 묶기
- 단계 쪼개기
- 함수 인라인하기
- 클래스 인라인하기

### 기능 편애 (Feature Envy)

- 함수 옮기기
- 함수 추출하기
- 함수 옮기기
- 함수 추출하기

### 데이터 뭉치 (Data Clumps)

- 클래스 추출하기
- 매개변수 객체 만들기
- 객체 통째로 넘기기

### 기본형 집착 (Primitive Obsession)

- 기본형을 객체로 바꾸기
- 타입 코드를 서브클래스로 바꾸기
- 조건부 로직을 다형성으로 바꾸기
- 클래스 추출하기
- 매개변수 객체 만들기

### 반복되는 switch문 (Repeated Switched)

- 조건부 로직을 다형성으로 바꾸기

### 반복문 (Loops)

- 반복문을 파이프라인으로 바꾸기

### 성의 없는 요소 (Lazy Element)

- 함수 인라인하기
- 클래스 인라인하기
- 계층 합치기

### 추측성 일반화 (Speculative Generality)

- 계층 합치기
- 함수 인라인하기
- 클래스 인라인하기
- 함수 선언 바꾸기
- 죽은 코드 제거하기

### 임시 필드 (Temporary Field)

- 클래스 추출하기
- 함수 옮기기
- 특이 케이스 추가하기

### 메시지 체인 (Message Chains)

- 위임 숨기기
- 함수 추출하기
- 함수 옮기기

### 중개자 (Middle Man)

- 중개자 제거하기
- 함수 인라인하기

### 내부자 거래 (Insider Trading)

- 함수 옮기기
- 필드 옮기기
- 위임 숨기기
- 서브클래스를 위임으로 바꾸기
- 슈퍼클래스를 위임으로 바꾸기

### 거대한 클래스 (Large Class)

- 클래스 추출하기
- 슈퍼클래스 추출하기
- 타입 코드를 서브클래스로 바꾸기
- 클래스 추출하기
- 슈퍼클래스 추출하기
- 타입 코드를 서브클래스로 바꾸기

### 서로 다른 인터페이스의 대안 클래스들 (Alternative Classes with Different Interfaces)

- 함수 선언 바꾸기
- 함수 옮기기
- 슈퍼클래스 추출하기

### 데이터 클래스 (Data Class)

- 레코드 캡슐화하기
- 세터 제거하기
- 함수 옮기기
- 함수 추출하기
- 단계 쪼개기

### 상속 포기 (Refused Bequest)

- 메서드 내리기
- 필드 내리기
- 서브클래스를 위임으로 바꾸기
- 슈퍼클래스를 위임으로 바꾸기

### 주석 (Comments)

- 함수 추출하기
- 함수 선언 바꾸기
- 어서션 추가하기

> 주석을 달면 안 된다고 말하려는 건 아니니 걱정하지 말자. 주석은 악취가 아닌 향기를 입힌다. 문제는 주석을 탈취제처럼 사용하는 데 있다. 주석이 장황하게 달린 원인이 코드를 잘못 작성했기 떄문인 경우가 의외로 많다. 주석이 많으면 이 장에서 소개한 온갖 악취를 풍기는 코드가 나오기 쉽다. 실제로 악취가 너무 심해서 리팩터링으로 냄새를 걷어내고 봤더니 상당량의 주석이 (애초에 코드만 제대로 작성했다면 필요 없을) 군더더기였던 적이 많았다. 특정 코드 블록이 하는 일에 주석을 남기고 싶다면 `함수 추출하기`를 적용해본다. 이미 추출되어 있는 함수임에도 여전히 설명이 필요하다면 `함수 선언 바꾸기`로 함수 이름을 바꿔본다. 시스템이 동작하기 위한 선행조건을 명시하고 싶다면 `어서션 추가하기`가 대기하고 있다.

`주석을 남겨야겠다는 생각이 들면, 가장 먼저 주석이 필요 없는 코드로 리팩터링해본다.`

> 뭘 할지 모를 때라면 주석을 달아두면 좋다. 현재 진행 상황뿐만 아니라 확실하지 않은 부분에 주석을 남긴다. 코드를 지금처럼 작성한 이유를 설명하는 용도로 달 수 있다. 이런 정보는 나중에 코드를 수정해야 할 프로그래머에게, 특히 건망증이 심한 프로그래머에게 도움이 될 것이다.
