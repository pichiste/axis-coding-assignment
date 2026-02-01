/**
 * API helpers for fetching user data
 */

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

const USER_DATA_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await fetch(USER_DATA_URL);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json() as Promise<User[]>;
};
