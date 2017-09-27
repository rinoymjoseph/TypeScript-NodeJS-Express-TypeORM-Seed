"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_repository_1 = require("../repositories/employee-repository");
const employee_entity_1 = require("../entities/employee-entity");
exports.getAllEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received GetAllEmployees ==> GET");
    empRepo.getAllEmployees().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.saveEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let empRepo = new employee_repository_1.EmployeeRepo();
    console.log("Received SaveEmployee ==> POST");
    console.log(req.body);
    let emp = new employee_entity_1.EmployeeEntity();
    emp.email = req.body.email;
    emp.firstName = req.body.firstName;
    emp.lastName = req.body.lastName;
    empRepo.saveEmployee(emp).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=employee-controller.js.map