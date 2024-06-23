interface Mango {
  name: string;
  age: number;
  email: string;
  address: {
    city: string;
    country: string;
  };
}

let mango: Mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

interface Poly {
  name: string;
  age: number;
  email: string;
}

let poly: Poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
