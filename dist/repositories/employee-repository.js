"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_entity_1 = require("../entities/employee-entity");
const typeorm_1 = require("typeorm");
class EmployeeRepo {
    getAllEmployees() {
        // get Employee repository and find all employees
        return typeorm_1.getManager().getRepository(employee_entity_1.EmployeeEntity).find();
    }
    saveEmployee(employee) {
        return typeorm_1.getManager().getRepository(employee_entity_1.EmployeeEntity).save(employee);
    }
}
exports.EmployeeRepo = EmployeeRepo;
//# sourceMappingURL=employee-repository.js.map