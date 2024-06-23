type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

function createOrUpdateUser(initialValues: Partial<User>) {
  return { ...initialValues };
}
