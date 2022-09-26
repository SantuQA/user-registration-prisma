// import { ApiProperty } from "@nestjs/swagger";
// import { Expose } from "class-transformer";
// import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, ObjectID, ObjectIdColumn } from "typeorm";
// import { User } from "./user.entity";

// @Entity()
// export class ACCESSS_CONTROL {
//   @ObjectIdColumn()
//   @Expose()
//   _id: ObjectID;

//   @ApiProperty()
//   @Expose()
//   @Column({ unique: true })
//   controllerName: string;

//   userId:ObjectID;
//   @ManyToOne(() => User, user => user.access_controls,{onDelete:'SET NULL'})
//   @JoinColumn({name:"userId"})
//   user:User;
// }
