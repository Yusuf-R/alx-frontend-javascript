// Import SubjectClassInterface from its source file or define it here
import { SubjectClassInterface, Subject } from "./Subject";

namespace Subjects {
  interface Teacher {
    firstName: string;
    experienceTeachingReact?: number;
  }

  interface ClassReactInterface extends SubjectClassInterface {
    getRequirements(): string,
    getAvailableTeacher(): string,
  }

  export const ReactMetadata = {
    name: 'React',
    path: 'task_4/subjects/React.ts',
  };

  export class React extends Subject implements ClassReactInterface {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
