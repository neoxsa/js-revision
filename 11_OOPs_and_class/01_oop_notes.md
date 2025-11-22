# JavaScript and Classes

## OOPs (Object Oriented Programming)

### Object :

- Collection of properties and methods.
- Example: `toLowerCase`, etc.

### Why use OOPs?

#### Parts of OOPs :

- Object literal (A specific object)
- Constructor Function
- Prototypes
- Classes
- Instances (`new`, `this`)

#### 4 Pillars in Programming

- **Abstraction:** It hides unnecessary details and shows only the essential parts.(Hides the process behind)

```javascript
// Abstraction Example:

class Car {
  start() {
    this.#engageIgnition();
    console.log("Car started...");
  }

  // Private internal logic hidden from users
  #engageIgnition() {
    console.log("Ignition engaged...");
  }
}

const car = new Car();
car.start();
// car.#engageIgnition(); ❌ — can't access, hidden behind abstraction
```

- **Encapsulation:** Keeping secrets locked away. Data and behavior wrapped together with restricted access.

```javascript
// Encapsulation Example:

class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
// acc.#balance = 10000 ❌ cannot directly modify
```

- **Inheritance:** Creating a new class based on an existing one.

```javascript
// Inheritance Example:

class Agent {
  move() {
    console.log("Agent is moving...");
  }
}

class Spy extends Agent {
  hack() {
    console.log("Access granted...");
  }
}

const ada = new Spy();
ada.move(); // From parent class
ada.hack(); // From Spy class
```

- **Polymorphism:** Same action, different behavior.
  A familiar trick — changing form depending on the situation.

```javascript
// Polymorphism Example:

class Weapon {
  attack() {
    console.log("Weapon attack!");
  }
}

class Gun extends Weapon {
  attack() {
    console.log("Bullet fire...");
  }
}

class Rifle extends Weapon {
  attack() {
    console.log("Rapid fire!");
  }
}

function execute(weapon) {
  weapon.attack();
}

execute(new Gun()); // Bullet fire...
execute(new Rifle()); // Rapid fire!
```

&nbsp;

## Short Summary :

| Concept           | Meaning                         | JS Example Effect                         |
| ----------------- | ------------------------------- | ----------------------------------------- |
| **Abstraction**   | Show only what's necessary      | Provide `start()` but hide engine logic   |
| **Encapsulation** | Protect data and methods        | Private fields like `#balance`            |
| **Inheritance**   | Reuse and extend functionality  | `Spy` inherits from `Agent`               |
| **Polymorphism**  | Same method, different behavior | `attack()` acts differently on each class |

---
