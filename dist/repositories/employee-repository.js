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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const appConfig = require("../common/app-config");
const employee_entity_1 = require("../entities/employee-entity");
class EmployeeRepo {
    getAllEmployees() {
        return typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            // Here you can start to work with your entities
            let emps = yield connection.manager.find(employee_entity_1.EmployeeEntity);
            console.log("All Employees from the db: ", emps);
            return emps;
        })).catch(error => console.log(error));
    }
}
exports.EmployeeRepo = EmployeeRepo;
//# sourceMappingURL=employee-repository.js.map