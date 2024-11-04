export default function createReportObject(employeesList) {
  return {
    allEmployees {
	    ...employeesList,
    },
    getNumberOfDepartments(emloyeesList) {
	    return Object.keys(employeesList).length;
    };
}
