// const User = {
//   name: "Ceejay",
//   email: "coebe@onvc.com",
//   isActive: true,
// };

// const createUser = ({ name: string, isPaid: boolean }) => {};

// let newUser = { name: "Ceejay", isPaid: false, email: "cobe@nc.com"}

// createUser(newUser);

// const createCourse = (): { name: string; price: number } => {
//   return { name: "Reactjs", price: 499 };
// };

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// const createUser = (user: User): User => {
//   return user;
// };

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string; //Can't change the readonly value
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "C",
  email: "c@c.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "g@h.com";
// myUser._id = "asa"

export {};
