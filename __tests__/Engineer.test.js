const Engineer = require("../lib/Engineer");
const engineer = new Engineer("lisa", "123456", "ljean87@gmail.com", "jeanl87");

test("test if we get the values of the engineer", () => {
  expect(engineer.name).toBe("lisa");
  expect(engineer.id).toBe("123456");
  expect(engineer.email).toBe("ljean87@gmail.com");
  expect(engineer.github).toBe("jeanl87");
});

test("test if we get the name from the getName() method", () => {
  expect(engineer.getName()).toBe("lisa");
});

test("test if we get the id from the getId() method", () => {
  expect(engineer.getId()).toBe("123456");
});

test("test if we get the email from the getEmail() method", () => {
  expect(engineer.getEmail()).toBe("ljean87@gmail.com");
});

test("test if we get the github name  from the getGithub() method", () => {
  expect(engineer.getGithub());
});

test("test if we can get the role from the getRole () method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
