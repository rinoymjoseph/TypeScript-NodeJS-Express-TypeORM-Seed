import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("employee")
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    employeeId: number;

    @Column({
        length: 100
    })
    firstName: string;

    @Column({
        length: 100
    })
    lastName: string;

   @Column({
        length: 100
    })
    email: string;
}