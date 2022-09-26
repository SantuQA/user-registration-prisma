// import { ApiProperty } from '@nestjs/swagger';
// import { Expose } from 'class-transformer';
// import { CartEntity } from 'src/ecommerce/cart/cart.entity';
// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   ObjectID,
//   ObjectIdColumn,
//   OneToMany,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity()
// export class ProductEntity {
//   @ObjectIdColumn()
//   @Expose()
//   _id: ObjectID;
//   @ApiProperty()
//   @Column()
//   name: string;
//   @ApiProperty()
//   @Column()
//   price: number;
//   @ApiProperty()
//   @Column()
//   quantity: string;

//   @CreateDateColumn()
//   createdAt: String;

//   @UpdateDateColumn()
//   updtedAt: String;

//   @OneToMany((type) => CartEntity, (cart) => cart._id)
//   @JoinColumn()
//   cart: CartEntity[];
// }
