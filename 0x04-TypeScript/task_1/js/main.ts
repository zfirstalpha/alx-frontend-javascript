// Teacher interface
interface Teacher {
  readonly firstName: string;       // only set on init
  readonly lastName: string;        // only set on init
  fullTimeEmployee: boolean;        // always required
  yearsOfExperience?: number;       // optional
  location: string;                 // always required
  [key: string]: any;               // allow extra properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;          // mandatory
}

// Example teacher
const teacher1: Teacher = {
  firstName: "henok",
  lastName: "lam",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  yearsOfExperience: 5,
  contract: true,                   // extra property
};

console.log("Teacher:", teacher1);

// Example director
const director1: Directors = {
  firstName: "roba",
  lastName: "fike",
  fullTimeEmployee: true,
  location: "aa",
  numberOfReports: 17,
  contract: false,                  // extra property allowed
};

console.log("Director:", director1);
