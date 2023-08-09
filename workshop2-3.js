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
  
  // Create employee objects
  const employee1 = new Employee(1, "John", "Smith", "Male", 23, "Manager");
  const employee2 = new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson");
  
  // Create sale objects
  const sale1 = new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022");
  const sale2 = new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022");
  
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
  
  // Output formatted information for employee1 and employee2
  console.log(formatEmployeeInfo(employee1));
  console.log(formatEmployeeInfo(employee2));
  
  // Output formatted information for sale1 and sale2
  console.log(formatSaleInfo(sale1));
  console.log(formatSaleInfo(sale2));