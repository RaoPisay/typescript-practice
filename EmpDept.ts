var departments: Array<Department> = new Array<Department>();
class Employee {
    private name: String;
    private id: Number;
    private deptID: Number;
    constructor(id: Number, name: String, deptID?: Number) {
        this.id = id;
        this.name = name;
        if (undefined != deptID) {
            this.deptID = deptID;
        }
    }

    getID(): Number {
        return this.id
    }
    getName(): String {
        return this.name;
    }

    getDeptName(): String {
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
    }
}

class Department {
    private id: Number;
    private deptName: String
    constructor(id: Number, deptName: String) {
        this.id = id;
        this.deptName = deptName;
        departments.push(this);
    }

    public getID(): Number {
        return this.id;
    }
    public getDeptName(): String {
        return this.deptName;
    }
}

var dept1: Department = new Department(1, "Engineering");
var dept2: Department = new Department(2, "Sales");
var dept3: Department = new Department(3, "Finance");

var emp1: Employee = new Employee(1, "Surya", 1);
var emp2: Employee = new Employee(1, "Anup");
console.log(emp1.getDeptName());
console.log(emp2.getDeptName());