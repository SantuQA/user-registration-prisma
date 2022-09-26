// import { Expose } from "class-transformer";
// import { User } from "src/user/entities/user.entity";
// import { Column, Entity, JoinColumn, ObjectID, ObjectIdColumn, OneToMany, OneToOne } from "typeorm";
// import { ProductEntity } from "../products/entities/product.entity";

// @Entity()
// export class OrderEntity {
//     @ObjectIdColumn()
//     @Expose()
//     _id: ObjectID;

//    @OneToMany(type => ProductEntity, item => item._id)
//    items: ProductEntity[];

//    @OneToOne(type => User, user => user.username)
//    @JoinColumn()
//    user : User;

//    @Column()
//    subTotal: number

//    @Column({ default: false })
//    pending: boolean

// }