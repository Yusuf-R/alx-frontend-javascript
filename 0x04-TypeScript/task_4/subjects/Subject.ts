namespace Subjects {

  export interface Teacher {
    firstName: string;
  }
  export interface SubjectClassInterface {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  export class Subject implements SubjectClassInterface{
    teacher: Teacher;
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}