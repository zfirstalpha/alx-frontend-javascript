// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example director
const director1: Directors = {
  firstName: "henok",
  lastName: "lam",
  location: "aa",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
