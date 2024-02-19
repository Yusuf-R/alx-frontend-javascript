// Import SubjectClassInterface from its source file or define it here
import { SubjectClassInterface, Subject } from "./Subject";

namespace Subjects {
  interface Teacher {
    firstName: string;
    experienceTeachingJava?: number;
  }

  interface ClassJavaInterface extends SubjectClassInterface {
    getRequirements(): string,
    getAvailableTeacher(): string,
  }

  export const JavaMetadata = {
    name: 'Java',
    path: 'task_4/subjects/Java.ts',
  };

  export class Java extends Subject implements ClassJavaInterface {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
