
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.1
 * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
 */
Prisma.prismaVersion = {
  client: "4.3.1",
  engine: "f352a33b70356f46311da8b00d83386dd9f145d6"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ACCESSS_CONTROL_MasterScalarFieldEnum = makeEnum({
  id: 'id',
  controllerName: 'controllerName',
  userId: 'userId'
});

exports.Prisma.CustomDataFromXlsMasterScalarFieldEnum = makeEnum({
  id: 'id',
  fileName: 'fileName'
});

exports.Prisma.CustomDataFromXlsScalarFieldEnum = makeEnum({
  id: 'id',
  extendedXlsData: 'extendedXlsData',
  xlsdataID: 'xlsdataID'
});

exports.Prisma.ProductImageScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  productId: 'productId'
});

exports.Prisma.ProductMasterScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  name: 'name',
  price: 'price',
  quantity: 'quantity',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TodoScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  title: 'title',
  completed: 'completed',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.UserMasterScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  userType: 'userType',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.User_Permission_MasterScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  read: 'read',
  write: 'write',
  modify: 'modify',
  delete: 'delete',
  created_at: 'created_at',
  updated_at: 'updated_at'
});


exports.Prisma.ModelName = makeEnum({
  ACCESSS_CONTROL_Master: 'ACCESSS_CONTROL_Master',
  UserMaster: 'UserMaster',
  User_Permission_Master: 'User_Permission_Master',
  Todo: 'Todo',
  ProductMaster: 'ProductMaster',
  ProductImage: 'ProductImage',
  CustomDataFromXls: 'CustomDataFromXls',
  CustomDataFromXlsMaster: 'CustomDataFromXlsMaster'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
