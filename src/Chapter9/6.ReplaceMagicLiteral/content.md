### 매직 리터럴 바꾸기

### 배경

> 매직 리터럴이란 소스 코드에 (보통은 여러 곳에) 등장하는 일반적인 리터럴 값을 말한다.

### Before

```javascript
function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}
```

### After

```javascript
const STANDARD_GRAVITY = 9.81;
functipn potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
```
