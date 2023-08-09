// Employee constructor function
function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
  }
  
  // Sale constructor function
  function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
  }
  
  // Create original employee and sale objects
  const employeeOriginal = {"id": 1, "firstName": "John", "lastName": "Smith", "gender": "Male", "age": 23, "position": "Manager"};
  const saleOriginal = {"staffId": 1, "item": "Wi-Fi Adapter", "price": 40.00, "date": "01-09-2022"};
  
  // Create employee objects using the constructor
  const employee1 = new Employee(1, "John", "Smith", "Male", 23, "Manager");
  const employee2 = new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson");
  
  // Create sale objects using the constructor
  const sale1 = new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022");
  const sale2 = new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022");
  
  // Arrays for employees and sales
  const employeesArray = [employeeOriginal, employee1, employee2];
  const salesArray = [saleOriginal, sale1, sale2];
  
  // Function to output formatted employee information
  function formatEmployeeInfo(employee) {
    return `Employee Information:
    ID: ${employee.id}
    Name: ${employee.firstName} ${employee.lastName}
    Gender: ${employee.gender}
    Age: ${employee.age}
    Position: ${employee.position}`;
  }
  
  // Function to output formatted sale information
  function formatSaleInfo(sale) {
    return `Sale Information:
    Staff ID: ${sale.staffId}
    Item: ${sale.item}
    Price: $${sale.price.toFixed(2)}
    Date: ${sale.date}`;
  }
  
  // Output formatted information for all employees
  console.log("All Employees:");
  employeesArray.forEach((employee, index) => {
    console.log(`Employee ${index + 1}:`);
    console.log(formatEmployeeInfo(employee));
    console.log(" ");
  });
  
  // Output formatted information for all sales
  console.log("All Sales:");
  salesArray.forEach((sale, index) => {
    console.log(`Sale ${index + 1}:`);
    console.log(formatSaleInfo(sale));
    console.log(" ");
  });