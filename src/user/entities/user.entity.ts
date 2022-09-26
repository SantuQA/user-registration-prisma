// import { DefaultValuePipe } from '@nestjs/common';
// import { Expose } from 'class-transformer';

// @Entity()
// export class User {
//   @ObjectIdColumn()
//   @Expose()
//   _id: ObjectID;

//   @Column({ unique: true })
//   @Expose()
//   username: string;

//   @Column()
//   password: string;

//   @Column({ unique: true })
//   @Expose()
//   email: string;

//   @Column()
//   @Expose()
//   firstName: string;

//   @Column()
//   @Expose()
//   lastName: string;
//   @Column()
//   @Expose()
//   userType: string;
//   @OneToMany(() => ACCESSS_CONTROL,(access_control) => access_control.user,{cascade:true})
//   access_controls : ACCESSS_CONTROL[];
//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }
