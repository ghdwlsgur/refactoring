'use strict';

class ClassWithStaticMethod {
  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called';
  }

  static {
    console.log('Class static initialization block called');
    console.log('클래스 호출 감지');
  }
}

console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());

/**
 *@discription

 static 키워드는 클래스의 정적 메서드를 정의한다.
 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
 정적 메서드는 종종 애플리케이션의 유틸리티 함수를 만드는 데 사용된다.
*/

class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod);
    console.log(this.constructor.staticMethod());
  }

  static staticMethod() {
    return 'Static method has been called';
  }

  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}

// console.log(StaticMethodCall.staticMethod());
// console.log(StaticMethodCall.anotherStaticMethod());

const staticClass = new StaticMethodCall();
staticClass.call;

/**
 *@discription

 다른 정적 메서드에서의 호출
 동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 this를 사용할 수 있다.

 클래스 생성자 및 다른 메서드에서의 호출
 
 정적 메서드가 비정적 메서드에서 키워드 this를 써서는 직접적인 접근을 할 수 없다. 
 바른 호출 방법은 클래스 명칭을 쓰거나, 즉 CLASSNAME.STATIC_METHOD_NMAE()를 아용하거나
 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 
 constructor: this.constructor.STATIC_METHOD_NAME()를 이용한다.
*/

class Triple {
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18
console.log(BiggerTriple.triple(3)); // 81
var tp = new Triple();
console.log(BiggerTriple.triple(3));
// console.log(tp.triple(3));
console.log(tp.constructor.triple(4));

/**
 *@discription

 1. 어떻게 정적 메서드가 클래스에서 구현되는지
 2. 클래스의 정적 멤버가 서브클래스화 되는 것을 보여줍니다.
 3. 정적 메서드가 어떤 경우에 호출될 수 있는지와 없는지를 설명합니다.
*/
