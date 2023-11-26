const registeredUsers = [];

const registerUser = (username, password) => {
  registeredUsers.push({ username, password });
};

const validateUser = (username, password) => {
  const user = registeredUsers.find(
    (user) => user.username === username && user.password === password
  );
  return user !== undefined;
};

export { registerUser, validateUser };
