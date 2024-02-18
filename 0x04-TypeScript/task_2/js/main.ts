// Task 4
interface StudenClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string
}

class StudentClass implements StudenClassInterface {
firstName: string;
lastName:string;

constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

workOnHomework() {
    return 'Currently working';
}

displayName() {
    return this.firstName;
}

}

// Task 5
interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}
interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome() {
      return 'Working from home';
  }
  getCoffeeBreak() {
      return 'Getting a coffee break';
  }
  workDirectorTasks() {
      return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
      return 'Cannot work from home';
  }
  getCoffeeBreak() {
      return 'Cannot have a break';
  }
  workTeacherTasks() {
      return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
  }
  return new Director();
}


const stdA = new StudentClass('Yusuf', 'Abdulwasiu');
console.log(stdA.workOnHomework());
console.log(stdA.displayName());

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
