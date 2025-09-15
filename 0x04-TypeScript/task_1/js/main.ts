// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher (singular!)
interface Director extends Teacher {
  numberOfReports: number;
}

// Example teacher
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  yearsOfExperience: 5,
  contract: true,
};

console.log("Teacher:", teacher1);

// Example director
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  contract: false,
};

console.log("Director:", director1);


// Function interface
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Named function using object destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));      // J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Johnson" })); 