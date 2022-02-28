const Intern = require("../lib/Intern");
const intern = new Intern("lisa", "123456", "ljean87@gmail.com", "St.John's");

test("test if we get the values for the intern", () => {
  expect(intern.name).toBe("lisa");
  expect(intern.id).toBe("123456");
  expect(intern.email).toBe("ljean87@gmail.com");
  expect(intern.school).toBe("St.John's");
});

test("test if we get the name from the getName() method", () => {
  expect(intern.getName()).toBe("lisa");
});

test("test if we get the id from the getId() method", () => {
  expect(intern.getId()).toBe("123456");
});

test("test if we get the email from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("ljean87@gmail.com");
});

test("test if we get the school's name from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("St.John's");
});

test("test if we can get the role from the getRole () method", () => {
  expect(intern.getRole()).toBe("Intern");
});
