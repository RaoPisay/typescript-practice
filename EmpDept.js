var departments = new Array();
var Employee = (function () {
    function Employee(id, name, deptID) {
        this.id = id;
        this.name = name;
        if (undefined != deptID) {
            this.deptID = deptID;
        }
    }
    Employee.prototype.getID = function () {
        return this.id;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getDeptName = function () {
        /*departments.forEach(dept => {
            if (this.deptID == dept.getID()) {
                return dept.getDeptName();
            }
        });*/
        if (undefined == this.deptID) {
            return "No department assigned";
        }
        else {
            for (var index = 0; index < departments.length; index++) {
                var dept = departments[index];
                if (this.deptID == dept.getID()) {
                    return dept.getDeptName();
                }
            }
        }
    };
    return Employee;
}());
var Department = (function () {
    function Department(id, deptName) {
        this.id = id;
        this.deptName = deptName;
        departments.push(this);
    }
    Department.prototype.getID = function () {
        return this.id;
    };
    Department.prototype.getDeptName = function () {
        return this.deptName;
    };
    return Department;
}());
var dept1 = new Department(1, "Engineering");
var dept2 = new Department(2, "Sales");
var dept3 = new Department(3, "Finance");
var emp1 = new Employee(1, "Surya", 1);
var emp2 = new Employee(1, "Anup");
console.log(emp1.getDeptName());
console.log(emp2.getDeptName());
