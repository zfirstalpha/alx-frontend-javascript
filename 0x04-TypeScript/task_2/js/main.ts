interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}


function createEmployee(salary: number | string): Director | Teacher {
  // convert string to number if needed
  if (typeof salary === "string") {
    salary = Number(salary.replace(/\$/g, ""));
  }

  if (salary < 500)
    return new Teacher();
  return new Director();
}




console.log(createEmployee(200));    // Teacher instance
console.log(createEmployee(1000));   // Director instance
console.log(createEmployee("$500")); // Director instance

// Type predicate function
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork function
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks


// String literal type
export type Subjects = "Math" | "History";

// Function teachClass with exact type and return strings
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// Example usage
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
