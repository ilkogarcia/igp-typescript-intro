enum ContractStatus {
  Permanent = 1,
  Temp = 2,
  Apprentice = 3
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);