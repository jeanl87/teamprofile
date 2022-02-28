const Employee = require("../lib/Employee");
const employee = new Employee("lisa", "123456", "ljean87@gmail.com");

test("test if we get the values of the employee", () => {
  expect(employee.name).toBe("lisa");
  expect(employee.id).toBe("123456");
  expect(employee.email).toBe("ljean87@gmail.com");
});

test("test if we get the name from the getName() method", () => {
  expect(employee.getName()).toBe("lisa");
});

test("test if we get the id from the getId() method", () => {
  expect(employee.getId()).toBe("123456");
});

test("test if we get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("ljean87@gmail.com");
});

test("test if we can get the role from the getRole () method", () => {
  expect(employee.getRole()).toBe("Employee");
});
