// Task 1
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any  // Index signature allowing any additional properties
}

// Task 2
interface Directors extends Teacher {
  numberOfReports:number,
}

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName:string): string
}

const printTeacher: printTeacherFunction = (firstName:string, lastName:string): string => `${firstName[0]}. ${lastName}`

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











const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};//teacher3.firstName = 'Jane';  // Error: Cannot assign to 'firstName' because it is a read-only property
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log();
console.log(printTeacher('John', 'Doe'));

const stdA = new StudentClass('Yusuf', 'Abdulwasiu');
console.log(stdA.workOnHomework());
console.log(stdA.displayName());
