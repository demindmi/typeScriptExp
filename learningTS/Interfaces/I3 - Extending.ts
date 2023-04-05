interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}
// assume you have many classes that already implemented the Mailable interface.
// we want to add this to the interface: later(email: string, after: number): void
// However, adding the later() method to the Mailable interface would break the current code.
// To avoid this, we can create a new interface that extends the Mailable interface and add the later() method to it.

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

// general syntax:
// interface A {
//   a(): void;
// }

// interface B extends A {
//   b(): void;
// }

// then we implement the B interface in a class:
class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email}. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}

// multiple inheritance is possible
// interface C {
//   c(): void;
// }

// interface D extends B, C {
//   d(): void;
// }

// * -------------------------------------------------------------------------------------
// interface extends class
// TypeScript allows an interface to extend a class. In this case, the interface inherits the properties and methods of the class. Also, the interface can inherit the private and protected members of the class, not just the public members.

// It means that when an interface extends a class with private or protected members, the interface can only be implemented by that class or subclasses of that class from which the interface extends.

// By doing this, you restrict the usage of the interface to only class or subclasses of the class from which the interface extends. If you attempt to implement the interface from a class that is not a subclass of the class that the interface inherited, you’ll get an error. For example:
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}
class Label extends Control {}

// Error: cannot implement
// class Chart implements StatefulControl {
//   enable() {}
// }
