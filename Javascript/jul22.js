let temp = [
  {
    first_name: "harish"
  },
  {
    last_name: "Chowdary"
  },
  { email: "fun@mail.com" },
  {
    phone: 400
  },
  {
    role: "engineer"
  }
];

temp.map(entry => {
  let [[key, value]] = Object.entries(entry);
  console.log(key, value);
  return entry;
});
