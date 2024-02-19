// Import SubjectClassInterface from its source file or define it here
import { SubjectClassInterface, Subject } from "./Subject";

namespace Subjects {
  interface Teacher {
    firstName: string;
    experienceTeachingC?: number;
  }

  interface ClassCppInterface extends SubjectClassInterface{
    getRequirements(): string,
    getAvailableTeacher(): string,
  }

  export const CppMetadata = {
    name: 'Cpp',
    path: 'task_4/subjects/Cpp.ts',
  };

  export class Cpp extends Subject implements ClassCppInterface{
    teacher: Teacher;
    constructor(teacher: Teacher) {
      super(teacher);
    }
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}