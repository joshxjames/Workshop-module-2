const employee1 = {"id": 1, "firstName": "John", "lastName": "Smith", "gender": "Male", "age": 23, "position": "Manager"};
const sale1 = {"staffId": 1, "item": "Wi-Fi Adapter", "price": 40.00, "date": "01-09-2022"};

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

// Output formatted information for employee1
console.log(formatEmployeeInfo(employee1));

// Output formatted information for sale1
console.log(formatSaleInfo(sale1));