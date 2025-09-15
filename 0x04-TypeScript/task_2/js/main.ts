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
  if (typeof salary === "number") {
    return salary < 500 ? new Teacher() : new Director();
  } else {
    const numericSalary = Number(salary.replace(/\$/g, ""));
    return numericSalary < 500 ? new Teacher() : new Director();
  }
}



console.log(createEmployee(200));    // Teacher instance
console.log(createEmployee(1000));   // Director instance
console.log(createEmployee("$500")); // Director instance
