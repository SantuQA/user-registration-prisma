
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\generated\\client1",
    "generated\\client1",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"ACCESSS_CONTROL_Master\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"controllerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Field referred in an index, but found no data to define the type.\"},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserMaster\",\"relationName\":\"ACCESSS_CONTROL_MasterToUserMaster\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"UserMaster\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Field referred in an index, but found no data to define the type.\"},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_controls\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ACCESSS_CONTROL_Master\",\"relationName\":\"ACCESSS_CONTROL_MasterToUserMaster\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"User_Permission_Master\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"write\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modify\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Todo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ProductMaster\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_img\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImage\",\"relationName\":\"ProductImageToProductMaster\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ProductImage\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Field referred in an index, but found no data to define the type.\"},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductMaster\",\"relationName\":\"ProductImageToProductMaster\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomDataFromXls\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extendedXlsData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xlsdata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomDataFromXlsMaster\",\"relationName\":\"CustomDataFromXlsToCustomDataFromXlsMaster\",\"relationFromFields\":[\"xlsdataID\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xlsdataID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomDataFromXlsMaster\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extendedData\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomDataFromXls\",\"relationName\":\"CustomDataFromXlsToCustomDataFromXlsMaster\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"ACCESSS_CONTROL_Master\",\"plural\":\"aCCESSS_CONTROL_Masters\",\"findUnique\":\"findUniqueACCESSS_CONTROL_Master\",\"findFirst\":\"findFirstACCESSS_CONTROL_Master\",\"findMany\":\"findManyACCESSS_CONTROL_Master\",\"create\":\"createOneACCESSS_CONTROL_Master\",\"createMany\":\"createManyACCESSS_CONTROL_Master\",\"delete\":\"deleteOneACCESSS_CONTROL_Master\",\"update\":\"updateOneACCESSS_CONTROL_Master\",\"deleteMany\":\"deleteManyACCESSS_CONTROL_Master\",\"updateMany\":\"updateManyACCESSS_CONTROL_Master\",\"upsert\":\"upsertOneACCESSS_CONTROL_Master\",\"aggregate\":\"aggregateACCESSS_CONTROL_Master\",\"groupBy\":\"groupByACCESSS_CONTROL_Master\",\"findRaw\":\"findACCESSS_CONTROL_MasterRaw\",\"aggregateRaw\":\"aggregateACCESSS_CONTROL_MasterRaw\"},{\"model\":\"UserMaster\",\"plural\":\"userMasters\",\"findUnique\":\"findUniqueUserMaster\",\"findFirst\":\"findFirstUserMaster\",\"findMany\":\"findManyUserMaster\",\"create\":\"createOneUserMaster\",\"createMany\":\"createManyUserMaster\",\"delete\":\"deleteOneUserMaster\",\"update\":\"updateOneUserMaster\",\"deleteMany\":\"deleteManyUserMaster\",\"updateMany\":\"updateManyUserMaster\",\"upsert\":\"upsertOneUserMaster\",\"aggregate\":\"aggregateUserMaster\",\"groupBy\":\"groupByUserMaster\",\"findRaw\":\"findUserMasterRaw\",\"aggregateRaw\":\"aggregateUserMasterRaw\"},{\"model\":\"User_Permission_Master\",\"plural\":\"user_Permission_Masters\",\"findUnique\":\"findUniqueUser_Permission_Master\",\"findFirst\":\"findFirstUser_Permission_Master\",\"findMany\":\"findManyUser_Permission_Master\",\"create\":\"createOneUser_Permission_Master\",\"createMany\":\"createManyUser_Permission_Master\",\"delete\":\"deleteOneUser_Permission_Master\",\"update\":\"updateOneUser_Permission_Master\",\"deleteMany\":\"deleteManyUser_Permission_Master\",\"updateMany\":\"updateManyUser_Permission_Master\",\"upsert\":\"upsertOneUser_Permission_Master\",\"aggregate\":\"aggregateUser_Permission_Master\",\"groupBy\":\"groupByUser_Permission_Master\",\"findRaw\":\"findUser_Permission_MasterRaw\",\"aggregateRaw\":\"aggregateUser_Permission_MasterRaw\"},{\"model\":\"Todo\",\"plural\":\"todos\",\"findUnique\":\"findUniqueTodo\",\"findFirst\":\"findFirstTodo\",\"findMany\":\"findManyTodo\",\"create\":\"createOneTodo\",\"createMany\":\"createManyTodo\",\"delete\":\"deleteOneTodo\",\"update\":\"updateOneTodo\",\"deleteMany\":\"deleteManyTodo\",\"updateMany\":\"updateManyTodo\",\"upsert\":\"upsertOneTodo\",\"aggregate\":\"aggregateTodo\",\"groupBy\":\"groupByTodo\",\"findRaw\":\"findTodoRaw\",\"aggregateRaw\":\"aggregateTodoRaw\"},{\"model\":\"ProductMaster\",\"plural\":\"productMasters\",\"findUnique\":\"findUniqueProductMaster\",\"findFirst\":\"findFirstProductMaster\",\"findMany\":\"findManyProductMaster\",\"create\":\"createOneProductMaster\",\"createMany\":\"createManyProductMaster\",\"delete\":\"deleteOneProductMaster\",\"update\":\"updateOneProductMaster\",\"deleteMany\":\"deleteManyProductMaster\",\"updateMany\":\"updateManyProductMaster\",\"upsert\":\"upsertOneProductMaster\",\"aggregate\":\"aggregateProductMaster\",\"groupBy\":\"groupByProductMaster\",\"findRaw\":\"findProductMasterRaw\",\"aggregateRaw\":\"aggregateProductMasterRaw\"},{\"model\":\"ProductImage\",\"plural\":\"productImages\",\"findUnique\":\"findUniqueProductImage\",\"findFirst\":\"findFirstProductImage\",\"findMany\":\"findManyProductImage\",\"create\":\"createOneProductImage\",\"createMany\":\"createManyProductImage\",\"delete\":\"deleteOneProductImage\",\"update\":\"updateOneProductImage\",\"deleteMany\":\"deleteManyProductImage\",\"updateMany\":\"updateManyProductImage\",\"upsert\":\"upsertOneProductImage\",\"aggregate\":\"aggregateProductImage\",\"groupBy\":\"groupByProductImage\",\"findRaw\":\"findProductImageRaw\",\"aggregateRaw\":\"aggregateProductImageRaw\"},{\"model\":\"CustomDataFromXls\",\"plural\":\"customDataFromXls\",\"findUnique\":\"findUniqueCustomDataFromXls\",\"findFirst\":\"findFirstCustomDataFromXls\",\"findMany\":\"findManyCustomDataFromXls\",\"create\":\"createOneCustomDataFromXls\",\"createMany\":\"createManyCustomDataFromXls\",\"delete\":\"deleteOneCustomDataFromXls\",\"update\":\"updateOneCustomDataFromXls\",\"deleteMany\":\"deleteManyCustomDataFromXls\",\"updateMany\":\"updateManyCustomDataFromXls\",\"upsert\":\"upsertOneCustomDataFromXls\",\"aggregate\":\"aggregateCustomDataFromXls\",\"groupBy\":\"groupByCustomDataFromXls\",\"findRaw\":\"findCustomDataFromXlsRaw\",\"aggregateRaw\":\"aggregateCustomDataFromXlsRaw\"},{\"model\":\"CustomDataFromXlsMaster\",\"plural\":\"customDataFromXlsMasters\",\"findUnique\":\"findUniqueCustomDataFromXlsMaster\",\"findFirst\":\"findFirstCustomDataFromXlsMaster\",\"findMany\":\"findManyCustomDataFromXlsMaster\",\"create\":\"createOneCustomDataFromXlsMaster\",\"createMany\":\"createManyCustomDataFromXlsMaster\",\"delete\":\"deleteOneCustomDataFromXlsMaster\",\"update\":\"updateOneCustomDataFromXlsMaster\",\"deleteMany\":\"deleteManyCustomDataFromXlsMaster\",\"updateMany\":\"updateManyCustomDataFromXlsMaster\",\"upsert\":\"upsertOneCustomDataFromXlsMaster\",\"aggregate\":\"aggregateCustomDataFromXlsMaster\",\"groupBy\":\"groupByCustomDataFromXlsMaster\",\"findRaw\":\"findCustomDataFromXlsMasterRaw\",\"aggregateRaw\":\"aggregateCustomDataFromXlsMasterRaw\"}],\"otherOperations\":{\"read\":[],\"write\":[\"runCommandRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Naba\\Desktop\\santu-learn\\Github\\TEST\\user-registration-prisma\\prisma\\generated\\client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.3.1",
  "engineVersion": "f352a33b70356f46311da8b00d83386dd9f145d6",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\generated\\client1\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\generated\\client1\\schema.prisma")
