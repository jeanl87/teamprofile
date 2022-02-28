const Manager = require("../lib/Manager");
const manager = new Manager("lisa", "123456", "ljean87@gmail.com", "718");

test("test if we get the values for the manager", () => {
  expect(manager.name).toBe("lisa");
  expect(manager.id).toBe("123456");
  expect(manager.email).toBe("ljean87@gmail.com");
  expect(manager.officeNumber).toBe("718");
});

test("test if we get the name from the getName() method", () => {
  expect(manager.getName()).toBe("lisa");
});

test("test if we get the id from the getId() method", () => {
  expect(manager.getId()).toBe("123456");
});

test("test if we get the email from the getEmail() method", () => {
  expect(manager.getEmail()).toBe("ljean87@gmail.com");
});

test("test if we generate the office number from the getofficeNumber() method", () => {
  expect(manager.getOfficeNumber());
});

test("test if we can generate the role from the getRole () method", () => {
  expect(manager.getRole()).toBe("Manager");
});
