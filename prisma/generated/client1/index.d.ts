
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ACCESSS_CONTROL_Master
 * 
 */
export type ACCESSS_CONTROL_Master = {
  id: string
  /**
   * Field referred in an index, but found no data to define the type.
   */
  controllerName: string
  userId: string
}

/**
 * Model UserMaster
 * 
 */
export type UserMaster = {
  id: string
  /**
   * Field referred in an index, but found no data to define the type.
   */
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
  userType: string
  created_at: Date
  updated_at: Date
}

/**
 * Model User_Permission_Master
 * 
 */
export type User_Permission_Master = {
  id: string
  userId: string
  read: boolean
  write: boolean
  modify: boolean
  delete: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Model Todo
 * 
 */
export type Todo = {
  id: string
  userId: string
  title: string
  completed: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductMaster
 * 
 */
export type ProductMaster = {
  id: string
  userId: string
  name: string
  price: number
  quantity: number
  created_at: Date
  updated_at: Date
}

/**
 * Model ProductImage
 * 
 */
export type ProductImage = {
  id: string
  /**
   * Field referred in an index, but found no data to define the type.
   */
  name: string
  url: string
  productId: string
}

/**
 * Model CustomDataFromXls
 * 
 */
export type CustomDataFromXls = {
  id: string
  extendedXlsData: Prisma.JsonValue | null
  xlsdataID: string
}

/**
 * Model CustomDataFromXlsMaster
 * 
 */
export type CustomDataFromXlsMaster = {
  id: string
  fileName: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ACCESSS_CONTROL_Masters
 * const aCCESSS_CONTROL_Masters = await prisma.aCCESSS_CONTROL_Master.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ACCESSS_CONTROL_Masters
   * const aCCESSS_CONTROL_Masters = await prisma.aCCESSS_CONTROL_Master.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.aCCESSS_CONTROL_Master`: Exposes CRUD operations for the **ACCESSS_CONTROL_Master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ACCESSS_CONTROL_Masters
    * const aCCESSS_CONTROL_Masters = await prisma.aCCESSS_CONTROL_Master.findMany()
    * ```
    */
  get aCCESSS_CONTROL_Master(): Prisma.ACCESSS_CONTROL_MasterDelegate<GlobalReject>;

  /**
   * `prisma.userMaster`: Exposes CRUD operations for the **UserMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMasters
    * const userMasters = await prisma.userMaster.findMany()
    * ```
    */
  get userMaster(): Prisma.UserMasterDelegate<GlobalReject>;

  /**
   * `prisma.user_Permission_Master`: Exposes CRUD operations for the **User_Permission_Master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Permission_Masters
    * const user_Permission_Masters = await prisma.user_Permission_Master.findMany()
    * ```
    */
  get user_Permission_Master(): Prisma.User_Permission_MasterDelegate<GlobalReject>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<GlobalReject>;

  /**
   * `prisma.productMaster`: Exposes CRUD operations for the **ProductMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMasters
    * const productMasters = await prisma.productMaster.findMany()
    * ```
    */
  get productMaster(): Prisma.ProductMasterDelegate<GlobalReject>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<GlobalReject>;

  /**
   * `prisma.customDataFromXls`: Exposes CRUD operations for the **CustomDataFromXls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomDataFromXls
    * const customDataFromXls = await prisma.customDataFromXls.findMany()
    * ```
    */
  get customDataFromXls(): Prisma.CustomDataFromXlsDelegate<GlobalReject>;

  /**
   * `prisma.customDataFromXlsMaster`: Exposes CRUD operations for the **CustomDataFromXlsMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomDataFromXlsMasters
    * const customDataFromXlsMasters = await prisma.customDataFromXlsMaster.findMany()
    * ```
    */
  get customDataFromXlsMaster(): Prisma.CustomDataFromXlsMasterDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    ACCESSS_CONTROL_Master: 'ACCESSS_CONTROL_Master',
    UserMaster: 'UserMaster',
    User_Permission_Master: 'User_Permission_Master',
    Todo: 'Todo',
    ProductMaster: 'ProductMaster',
    ProductImage: 'ProductImage',
    CustomDataFromXls: 'CustomDataFromXls',
    CustomDataFromXlsMaster: 'CustomDataFromXlsMaster'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserMasterCountOutputType
   */


  export type UserMasterCountOutputType = {
    access_controls: number
  }

  export type UserMasterCountOutputTypeSelect = {
    access_controls?: boolean
  }

  export type UserMasterCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserMasterCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserMasterCountOutputType
    : S extends undefined
    ? never
    : S extends UserMasterCountOutputTypeArgs
    ?'include' extends U
    ? UserMasterCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserMasterCountOutputType ? UserMasterCountOutputType[P] : never
  } 
    : UserMasterCountOutputType
  : UserMasterCountOutputType




  // Custom InputTypes

  /**
   * UserMasterCountOutputType without action
   */
  export type UserMasterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserMasterCountOutputType
     * 
    **/
    select?: UserMasterCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductMasterCountOutputType
   */


  export type ProductMasterCountOutputType = {
    product_img: number
  }

  export type ProductMasterCountOutputTypeSelect = {
    product_img?: boolean
  }

  export type ProductMasterCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductMasterCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductMasterCountOutputType
    : S extends undefined
    ? never
    : S extends ProductMasterCountOutputTypeArgs
    ?'include' extends U
    ? ProductMasterCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductMasterCountOutputType ? ProductMasterCountOutputType[P] : never
  } 
    : ProductMasterCountOutputType
  : ProductMasterCountOutputType




  // Custom InputTypes

  /**
   * ProductMasterCountOutputType without action
   */
  export type ProductMasterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductMasterCountOutputType
     * 
    **/
    select?: ProductMasterCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomDataFromXlsMasterCountOutputType
   */


  export type CustomDataFromXlsMasterCountOutputType = {
    extendedData: number
  }

  export type CustomDataFromXlsMasterCountOutputTypeSelect = {
    extendedData?: boolean
  }

  export type CustomDataFromXlsMasterCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CustomDataFromXlsMasterCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CustomDataFromXlsMasterCountOutputType
    : S extends undefined
    ? never
    : S extends CustomDataFromXlsMasterCountOutputTypeArgs
    ?'include' extends U
    ? CustomDataFromXlsMasterCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CustomDataFromXlsMasterCountOutputType ? CustomDataFromXlsMasterCountOutputType[P] : never
  } 
    : CustomDataFromXlsMasterCountOutputType
  : CustomDataFromXlsMasterCountOutputType




  // Custom InputTypes

  /**
   * CustomDataFromXlsMasterCountOutputType without action
   */
  export type CustomDataFromXlsMasterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMasterCountOutputType
     * 
    **/
    select?: CustomDataFromXlsMasterCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model ACCESSS_CONTROL_Master
   */


  export type AggregateACCESSS_CONTROL_Master = {
    _count: ACCESSS_CONTROL_MasterCountAggregateOutputType | null
    _min: ACCESSS_CONTROL_MasterMinAggregateOutputType | null
    _max: ACCESSS_CONTROL_MasterMaxAggregateOutputType | null
  }

  export type ACCESSS_CONTROL_MasterMinAggregateOutputType = {
    id: string | null
    controllerName: string | null
    userId: string | null
  }

  export type ACCESSS_CONTROL_MasterMaxAggregateOutputType = {
    id: string | null
    controllerName: string | null
    userId: string | null
  }

  export type ACCESSS_CONTROL_MasterCountAggregateOutputType = {
    id: number
    controllerName: number
    userId: number
    _all: number
  }


  export type ACCESSS_CONTROL_MasterMinAggregateInputType = {
    id?: true
    controllerName?: true
    userId?: true
  }

  export type ACCESSS_CONTROL_MasterMaxAggregateInputType = {
    id?: true
    controllerName?: true
    userId?: true
  }

  export type ACCESSS_CONTROL_MasterCountAggregateInputType = {
    id?: true
    controllerName?: true
    userId?: true
    _all?: true
  }

  export type ACCESSS_CONTROL_MasterAggregateArgs = {
    /**
     * Filter which ACCESSS_CONTROL_Master to aggregate.
     * 
    **/
    where?: ACCESSS_CONTROL_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACCESSS_CONTROL_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<ACCESSS_CONTROL_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ACCESSS_CONTROL_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACCESSS_CONTROL_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACCESSS_CONTROL_Masters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ACCESSS_CONTROL_Masters
    **/
    _count?: true | ACCESSS_CONTROL_MasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ACCESSS_CONTROL_MasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ACCESSS_CONTROL_MasterMaxAggregateInputType
  }

  export type GetACCESSS_CONTROL_MasterAggregateType<T extends ACCESSS_CONTROL_MasterAggregateArgs> = {
        [P in keyof T & keyof AggregateACCESSS_CONTROL_Master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateACCESSS_CONTROL_Master[P]>
      : GetScalarType<T[P], AggregateACCESSS_CONTROL_Master[P]>
  }




  export type ACCESSS_CONTROL_MasterGroupByArgs = {
    where?: ACCESSS_CONTROL_MasterWhereInput
    orderBy?: Enumerable<ACCESSS_CONTROL_MasterOrderByWithAggregationInput>
    by: Array<ACCESSS_CONTROL_MasterScalarFieldEnum>
    having?: ACCESSS_CONTROL_MasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ACCESSS_CONTROL_MasterCountAggregateInputType | true
    _min?: ACCESSS_CONTROL_MasterMinAggregateInputType
    _max?: ACCESSS_CONTROL_MasterMaxAggregateInputType
  }


  export type ACCESSS_CONTROL_MasterGroupByOutputType = {
    id: string
    controllerName: string
    userId: string
    _count: ACCESSS_CONTROL_MasterCountAggregateOutputType | null
    _min: ACCESSS_CONTROL_MasterMinAggregateOutputType | null
    _max: ACCESSS_CONTROL_MasterMaxAggregateOutputType | null
  }

  type GetACCESSS_CONTROL_MasterGroupByPayload<T extends ACCESSS_CONTROL_MasterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ACCESSS_CONTROL_MasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ACCESSS_CONTROL_MasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ACCESSS_CONTROL_MasterGroupByOutputType[P]>
            : GetScalarType<T[P], ACCESSS_CONTROL_MasterGroupByOutputType[P]>
        }
      >
    >


  export type ACCESSS_CONTROL_MasterSelect = {
    id?: boolean
    controllerName?: boolean
    user?: boolean | UserMasterArgs
    userId?: boolean
  }

  export type ACCESSS_CONTROL_MasterInclude = {
    user?: boolean | UserMasterArgs
  }

  export type ACCESSS_CONTROL_MasterGetPayload<
    S extends boolean | null | undefined | ACCESSS_CONTROL_MasterArgs,
    U = keyof S
      > = S extends true
        ? ACCESSS_CONTROL_Master
    : S extends undefined
    ? never
    : S extends ACCESSS_CONTROL_MasterArgs | ACCESSS_CONTROL_MasterFindManyArgs
    ?'include' extends U
    ? ACCESSS_CONTROL_Master  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserMasterGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserMasterGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ACCESSS_CONTROL_Master ? ACCESSS_CONTROL_Master[P] : never
  } 
    : ACCESSS_CONTROL_Master
  : ACCESSS_CONTROL_Master


  type ACCESSS_CONTROL_MasterCountArgs = Merge<
    Omit<ACCESSS_CONTROL_MasterFindManyArgs, 'select' | 'include'> & {
      select?: ACCESSS_CONTROL_MasterCountAggregateInputType | true
    }
  >

  export interface ACCESSS_CONTROL_MasterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ACCESSS_CONTROL_Master that matches the filter.
     * @param {ACCESSS_CONTROL_MasterFindUniqueArgs} args - Arguments to find a ACCESSS_CONTROL_Master
     * @example
     * // Get one ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ACCESSS_CONTROL_MasterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ACCESSS_CONTROL_Master'> extends True ? CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>> : CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master | null >, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T> | null >>

    /**
     * Find the first ACCESSS_CONTROL_Master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterFindFirstArgs} args - Arguments to find a ACCESSS_CONTROL_Master
     * @example
     * // Get one ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ACCESSS_CONTROL_MasterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ACCESSS_CONTROL_Master'> extends True ? CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>> : CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master | null >, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T> | null >>

    /**
     * Find zero or more ACCESSS_CONTROL_Masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ACCESSS_CONTROL_Masters
     * const aCCESSS_CONTROL_Masters = await prisma.aCCESSS_CONTROL_Master.findMany()
     * 
     * // Get first 10 ACCESSS_CONTROL_Masters
     * const aCCESSS_CONTROL_Masters = await prisma.aCCESSS_CONTROL_Master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aCCESSS_CONTROL_MasterWithIdOnly = await prisma.aCCESSS_CONTROL_Master.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ACCESSS_CONTROL_MasterFindManyArgs>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ACCESSS_CONTROL_Master>>, PrismaPromise<Array<ACCESSS_CONTROL_MasterGetPayload<T>>>>

    /**
     * Create a ACCESSS_CONTROL_Master.
     * @param {ACCESSS_CONTROL_MasterCreateArgs} args - Arguments to create a ACCESSS_CONTROL_Master.
     * @example
     * // Create one ACCESSS_CONTROL_Master
     * const ACCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.create({
     *   data: {
     *     // ... data to create a ACCESSS_CONTROL_Master
     *   }
     * })
     * 
    **/
    create<T extends ACCESSS_CONTROL_MasterCreateArgs>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterCreateArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Create many ACCESSS_CONTROL_Masters.
     *     @param {ACCESSS_CONTROL_MasterCreateManyArgs} args - Arguments to create many ACCESSS_CONTROL_Masters.
     *     @example
     *     // Create many ACCESSS_CONTROL_Masters
     *     const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ACCESSS_CONTROL_MasterCreateManyArgs>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ACCESSS_CONTROL_Master.
     * @param {ACCESSS_CONTROL_MasterDeleteArgs} args - Arguments to delete one ACCESSS_CONTROL_Master.
     * @example
     * // Delete one ACCESSS_CONTROL_Master
     * const ACCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.delete({
     *   where: {
     *     // ... filter to delete one ACCESSS_CONTROL_Master
     *   }
     * })
     * 
    **/
    delete<T extends ACCESSS_CONTROL_MasterDeleteArgs>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterDeleteArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Update one ACCESSS_CONTROL_Master.
     * @param {ACCESSS_CONTROL_MasterUpdateArgs} args - Arguments to update one ACCESSS_CONTROL_Master.
     * @example
     * // Update one ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ACCESSS_CONTROL_MasterUpdateArgs>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterUpdateArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Delete zero or more ACCESSS_CONTROL_Masters.
     * @param {ACCESSS_CONTROL_MasterDeleteManyArgs} args - Arguments to filter ACCESSS_CONTROL_Masters to delete.
     * @example
     * // Delete a few ACCESSS_CONTROL_Masters
     * const { count } = await prisma.aCCESSS_CONTROL_Master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ACCESSS_CONTROL_MasterDeleteManyArgs>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ACCESSS_CONTROL_Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ACCESSS_CONTROL_Masters
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ACCESSS_CONTROL_MasterUpdateManyArgs>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ACCESSS_CONTROL_Master.
     * @param {ACCESSS_CONTROL_MasterUpsertArgs} args - Arguments to update or create a ACCESSS_CONTROL_Master.
     * @example
     * // Update or create a ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.upsert({
     *   create: {
     *     // ... data to create a ACCESSS_CONTROL_Master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ACCESSS_CONTROL_Master we want to update
     *   }
     * })
    **/
    upsert<T extends ACCESSS_CONTROL_MasterUpsertArgs>(
      args: SelectSubset<T, ACCESSS_CONTROL_MasterUpsertArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Find zero or more ACCESSS_CONTROL_Masters that matches the filter.
     * @param {ACCESSS_CONTROL_MasterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ACCESSS_CONTROL_MasterFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ACCESSS_CONTROL_Master.
     * @param {ACCESSS_CONTROL_MasterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ACCESSS_CONTROL_MasterAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one ACCESSS_CONTROL_Master that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ACCESSS_CONTROL_MasterFindUniqueOrThrowArgs} args - Arguments to find a ACCESSS_CONTROL_Master
     * @example
     * // Get one ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ACCESSS_CONTROL_MasterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Find the first ACCESSS_CONTROL_Master that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterFindFirstOrThrowArgs} args - Arguments to find a ACCESSS_CONTROL_Master
     * @example
     * // Get one ACCESSS_CONTROL_Master
     * const aCCESSS_CONTROL_Master = await prisma.aCCESSS_CONTROL_Master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ACCESSS_CONTROL_MasterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ACCESSS_CONTROL_MasterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_Master>, Prisma__ACCESSS_CONTROL_MasterClient<ACCESSS_CONTROL_MasterGetPayload<T>>>

    /**
     * Count the number of ACCESSS_CONTROL_Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterCountArgs} args - Arguments to filter ACCESSS_CONTROL_Masters to count.
     * @example
     * // Count the number of ACCESSS_CONTROL_Masters
     * const count = await prisma.aCCESSS_CONTROL_Master.count({
     *   where: {
     *     // ... the filter for the ACCESSS_CONTROL_Masters we want to count
     *   }
     * })
    **/
    count<T extends ACCESSS_CONTROL_MasterCountArgs>(
      args?: Subset<T, ACCESSS_CONTROL_MasterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ACCESSS_CONTROL_MasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ACCESSS_CONTROL_Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ACCESSS_CONTROL_MasterAggregateArgs>(args: Subset<T, ACCESSS_CONTROL_MasterAggregateArgs>): PrismaPromise<GetACCESSS_CONTROL_MasterAggregateType<T>>

    /**
     * Group by ACCESSS_CONTROL_Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACCESSS_CONTROL_MasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ACCESSS_CONTROL_MasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ACCESSS_CONTROL_MasterGroupByArgs['orderBy'] }
        : { orderBy?: ACCESSS_CONTROL_MasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ACCESSS_CONTROL_MasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetACCESSS_CONTROL_MasterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ACCESSS_CONTROL_Master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ACCESSS_CONTROL_MasterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserMasterArgs = {}>(args?: Subset<T, UserMasterArgs>): CheckSelect<T, Prisma__UserMasterClient<UserMaster | null >, Prisma__UserMasterClient<UserMasterGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ACCESSS_CONTROL_Master base type for findUnique actions
   */
  export type ACCESSS_CONTROL_MasterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * Filter, which ACCESSS_CONTROL_Master to fetch.
     * 
    **/
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
  }

  /**
   * ACCESSS_CONTROL_Master: findUnique
   */
  export interface ACCESSS_CONTROL_MasterFindUniqueArgs extends ACCESSS_CONTROL_MasterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ACCESSS_CONTROL_Master base type for findFirst actions
   */
  export type ACCESSS_CONTROL_MasterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * Filter, which ACCESSS_CONTROL_Master to fetch.
     * 
    **/
    where?: ACCESSS_CONTROL_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACCESSS_CONTROL_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<ACCESSS_CONTROL_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ACCESSS_CONTROL_Masters.
     * 
    **/
    cursor?: ACCESSS_CONTROL_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACCESSS_CONTROL_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACCESSS_CONTROL_Masters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ACCESSS_CONTROL_Masters.
     * 
    **/
    distinct?: Enumerable<ACCESSS_CONTROL_MasterScalarFieldEnum>
  }

  /**
   * ACCESSS_CONTROL_Master: findFirst
   */
  export interface ACCESSS_CONTROL_MasterFindFirstArgs extends ACCESSS_CONTROL_MasterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ACCESSS_CONTROL_Master findMany
   */
  export type ACCESSS_CONTROL_MasterFindManyArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * Filter, which ACCESSS_CONTROL_Masters to fetch.
     * 
    **/
    where?: ACCESSS_CONTROL_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACCESSS_CONTROL_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<ACCESSS_CONTROL_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ACCESSS_CONTROL_Masters.
     * 
    **/
    cursor?: ACCESSS_CONTROL_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACCESSS_CONTROL_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACCESSS_CONTROL_Masters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ACCESSS_CONTROL_MasterScalarFieldEnum>
  }


  /**
   * ACCESSS_CONTROL_Master create
   */
  export type ACCESSS_CONTROL_MasterCreateArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * The data needed to create a ACCESSS_CONTROL_Master.
     * 
    **/
    data: XOR<ACCESSS_CONTROL_MasterCreateInput, ACCESSS_CONTROL_MasterUncheckedCreateInput>
  }


  /**
   * ACCESSS_CONTROL_Master createMany
   */
  export type ACCESSS_CONTROL_MasterCreateManyArgs = {
    /**
     * The data used to create many ACCESSS_CONTROL_Masters.
     * 
    **/
    data: Enumerable<ACCESSS_CONTROL_MasterCreateManyInput>
  }


  /**
   * ACCESSS_CONTROL_Master update
   */
  export type ACCESSS_CONTROL_MasterUpdateArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * The data needed to update a ACCESSS_CONTROL_Master.
     * 
    **/
    data: XOR<ACCESSS_CONTROL_MasterUpdateInput, ACCESSS_CONTROL_MasterUncheckedUpdateInput>
    /**
     * Choose, which ACCESSS_CONTROL_Master to update.
     * 
    **/
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
  }


  /**
   * ACCESSS_CONTROL_Master updateMany
   */
  export type ACCESSS_CONTROL_MasterUpdateManyArgs = {
    /**
     * The data used to update ACCESSS_CONTROL_Masters.
     * 
    **/
    data: XOR<ACCESSS_CONTROL_MasterUpdateManyMutationInput, ACCESSS_CONTROL_MasterUncheckedUpdateManyInput>
    /**
     * Filter which ACCESSS_CONTROL_Masters to update
     * 
    **/
    where?: ACCESSS_CONTROL_MasterWhereInput
  }


  /**
   * ACCESSS_CONTROL_Master upsert
   */
  export type ACCESSS_CONTROL_MasterUpsertArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * The filter to search for the ACCESSS_CONTROL_Master to update in case it exists.
     * 
    **/
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
    /**
     * In case the ACCESSS_CONTROL_Master found by the `where` argument doesn't exist, create a new ACCESSS_CONTROL_Master with this data.
     * 
    **/
    create: XOR<ACCESSS_CONTROL_MasterCreateInput, ACCESSS_CONTROL_MasterUncheckedCreateInput>
    /**
     * In case the ACCESSS_CONTROL_Master was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ACCESSS_CONTROL_MasterUpdateInput, ACCESSS_CONTROL_MasterUncheckedUpdateInput>
  }


  /**
   * ACCESSS_CONTROL_Master delete
   */
  export type ACCESSS_CONTROL_MasterDeleteArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
    /**
     * Filter which ACCESSS_CONTROL_Master to delete.
     * 
    **/
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
  }


  /**
   * ACCESSS_CONTROL_Master deleteMany
   */
  export type ACCESSS_CONTROL_MasterDeleteManyArgs = {
    /**
     * Filter which ACCESSS_CONTROL_Masters to delete
     * 
    **/
    where?: ACCESSS_CONTROL_MasterWhereInput
  }


  /**
   * ACCESSS_CONTROL_Master findRaw
   */
  export type ACCESSS_CONTROL_MasterFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ACCESSS_CONTROL_Master aggregateRaw
   */
  export type ACCESSS_CONTROL_MasterAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ACCESSS_CONTROL_Master: findUniqueOrThrow
   */
  export type ACCESSS_CONTROL_MasterFindUniqueOrThrowArgs = ACCESSS_CONTROL_MasterFindUniqueArgsBase
      

  /**
   * ACCESSS_CONTROL_Master: findFirstOrThrow
   */
  export type ACCESSS_CONTROL_MasterFindFirstOrThrowArgs = ACCESSS_CONTROL_MasterFindFirstArgsBase
      

  /**
   * ACCESSS_CONTROL_Master without action
   */
  export type ACCESSS_CONTROL_MasterArgs = {
    /**
     * Select specific fields to fetch from the ACCESSS_CONTROL_Master
     * 
    **/
    select?: ACCESSS_CONTROL_MasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ACCESSS_CONTROL_MasterInclude | null
  }



  /**
   * Model UserMaster
   */


  export type AggregateUserMaster = {
    _count: UserMasterCountAggregateOutputType | null
    _min: UserMasterMinAggregateOutputType | null
    _max: UserMasterMaxAggregateOutputType | null
  }

  export type UserMasterMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    userType: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMasterMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    userType: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMasterCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    firstName: number
    lastName: number
    userType: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMasterMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstName?: true
    lastName?: true
    userType?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMasterMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstName?: true
    lastName?: true
    userType?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMasterCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstName?: true
    lastName?: true
    userType?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserMasterAggregateArgs = {
    /**
     * Filter which UserMaster to aggregate.
     * 
    **/
    where?: UserMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMasters
    **/
    _count?: true | UserMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMasterMaxAggregateInputType
  }

  export type GetUserMasterAggregateType<T extends UserMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMaster[P]>
      : GetScalarType<T[P], AggregateUserMaster[P]>
  }




  export type UserMasterGroupByArgs = {
    where?: UserMasterWhereInput
    orderBy?: Enumerable<UserMasterOrderByWithAggregationInput>
    by: Array<UserMasterScalarFieldEnum>
    having?: UserMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMasterCountAggregateInputType | true
    _min?: UserMasterMinAggregateInputType
    _max?: UserMasterMaxAggregateInputType
  }


  export type UserMasterGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    created_at: Date
    updated_at: Date
    _count: UserMasterCountAggregateOutputType | null
    _min: UserMasterMinAggregateOutputType | null
    _max: UserMasterMaxAggregateOutputType | null
  }

  type GetUserMasterGroupByPayload<T extends UserMasterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMasterGroupByOutputType[P]>
            : GetScalarType<T[P], UserMasterGroupByOutputType[P]>
        }
      >
    >


  export type UserMasterSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    userType?: boolean
    access_controls?: boolean | ACCESSS_CONTROL_MasterFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | UserMasterCountOutputTypeArgs
  }

  export type UserMasterInclude = {
    access_controls?: boolean | ACCESSS_CONTROL_MasterFindManyArgs
    _count?: boolean | UserMasterCountOutputTypeArgs
  }

  export type UserMasterGetPayload<
    S extends boolean | null | undefined | UserMasterArgs,
    U = keyof S
      > = S extends true
        ? UserMaster
    : S extends undefined
    ? never
    : S extends UserMasterArgs | UserMasterFindManyArgs
    ?'include' extends U
    ? UserMaster  & {
    [P in TrueKeys<S['include']>]:
        P extends 'access_controls' ? Array < ACCESSS_CONTROL_MasterGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserMasterCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'access_controls' ? Array < ACCESSS_CONTROL_MasterGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserMasterCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof UserMaster ? UserMaster[P] : never
  } 
    : UserMaster
  : UserMaster


  type UserMasterCountArgs = Merge<
    Omit<UserMasterFindManyArgs, 'select' | 'include'> & {
      select?: UserMasterCountAggregateInputType | true
    }
  >

  export interface UserMasterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserMaster that matches the filter.
     * @param {UserMasterFindUniqueArgs} args - Arguments to find a UserMaster
     * @example
     * // Get one UserMaster
     * const userMaster = await prisma.userMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMasterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserMasterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserMaster'> extends True ? CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>> : CheckSelect<T, Prisma__UserMasterClient<UserMaster | null >, Prisma__UserMasterClient<UserMasterGetPayload<T> | null >>

    /**
     * Find the first UserMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterFindFirstArgs} args - Arguments to find a UserMaster
     * @example
     * // Get one UserMaster
     * const userMaster = await prisma.userMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMasterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserMasterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserMaster'> extends True ? CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>> : CheckSelect<T, Prisma__UserMasterClient<UserMaster | null >, Prisma__UserMasterClient<UserMasterGetPayload<T> | null >>

    /**
     * Find zero or more UserMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMasters
     * const userMasters = await prisma.userMaster.findMany()
     * 
     * // Get first 10 UserMasters
     * const userMasters = await prisma.userMaster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMasterWithIdOnly = await prisma.userMaster.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMasterFindManyArgs>(
      args?: SelectSubset<T, UserMasterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserMaster>>, PrismaPromise<Array<UserMasterGetPayload<T>>>>

    /**
     * Create a UserMaster.
     * @param {UserMasterCreateArgs} args - Arguments to create a UserMaster.
     * @example
     * // Create one UserMaster
     * const UserMaster = await prisma.userMaster.create({
     *   data: {
     *     // ... data to create a UserMaster
     *   }
     * })
     * 
    **/
    create<T extends UserMasterCreateArgs>(
      args: SelectSubset<T, UserMasterCreateArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Create many UserMasters.
     *     @param {UserMasterCreateManyArgs} args - Arguments to create many UserMasters.
     *     @example
     *     // Create many UserMasters
     *     const userMaster = await prisma.userMaster.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserMasterCreateManyArgs>(
      args?: SelectSubset<T, UserMasterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserMaster.
     * @param {UserMasterDeleteArgs} args - Arguments to delete one UserMaster.
     * @example
     * // Delete one UserMaster
     * const UserMaster = await prisma.userMaster.delete({
     *   where: {
     *     // ... filter to delete one UserMaster
     *   }
     * })
     * 
    **/
    delete<T extends UserMasterDeleteArgs>(
      args: SelectSubset<T, UserMasterDeleteArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Update one UserMaster.
     * @param {UserMasterUpdateArgs} args - Arguments to update one UserMaster.
     * @example
     * // Update one UserMaster
     * const userMaster = await prisma.userMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMasterUpdateArgs>(
      args: SelectSubset<T, UserMasterUpdateArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Delete zero or more UserMasters.
     * @param {UserMasterDeleteManyArgs} args - Arguments to filter UserMasters to delete.
     * @example
     * // Delete a few UserMasters
     * const { count } = await prisma.userMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMasterDeleteManyArgs>(
      args?: SelectSubset<T, UserMasterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMasters
     * const userMaster = await prisma.userMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMasterUpdateManyArgs>(
      args: SelectSubset<T, UserMasterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMaster.
     * @param {UserMasterUpsertArgs} args - Arguments to update or create a UserMaster.
     * @example
     * // Update or create a UserMaster
     * const userMaster = await prisma.userMaster.upsert({
     *   create: {
     *     // ... data to create a UserMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMaster we want to update
     *   }
     * })
    **/
    upsert<T extends UserMasterUpsertArgs>(
      args: SelectSubset<T, UserMasterUpsertArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Find zero or more UserMasters that matches the filter.
     * @param {UserMasterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userMaster = await prisma.userMaster.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserMasterFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserMaster.
     * @param {UserMasterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userMaster = await prisma.userMaster.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserMasterAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one UserMaster that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserMasterFindUniqueOrThrowArgs} args - Arguments to find a UserMaster
     * @example
     * // Get one UserMaster
     * const userMaster = await prisma.userMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMasterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserMasterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Find the first UserMaster that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterFindFirstOrThrowArgs} args - Arguments to find a UserMaster
     * @example
     * // Get one UserMaster
     * const userMaster = await prisma.userMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMasterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserMasterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMasterClient<UserMaster>, Prisma__UserMasterClient<UserMasterGetPayload<T>>>

    /**
     * Count the number of UserMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterCountArgs} args - Arguments to filter UserMasters to count.
     * @example
     * // Count the number of UserMasters
     * const count = await prisma.userMaster.count({
     *   where: {
     *     // ... the filter for the UserMasters we want to count
     *   }
     * })
    **/
    count<T extends UserMasterCountArgs>(
      args?: Subset<T, UserMasterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMasterAggregateArgs>(args: Subset<T, UserMasterAggregateArgs>): PrismaPromise<GetUserMasterAggregateType<T>>

    /**
     * Group by UserMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMasterGroupByArgs['orderBy'] }
        : { orderBy?: UserMasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMasterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserMasterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    access_controls<T extends ACCESSS_CONTROL_MasterFindManyArgs = {}>(args?: Subset<T, ACCESSS_CONTROL_MasterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ACCESSS_CONTROL_Master>>, PrismaPromise<Array<ACCESSS_CONTROL_MasterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserMaster base type for findUnique actions
   */
  export type UserMasterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * Filter, which UserMaster to fetch.
     * 
    **/
    where: UserMasterWhereUniqueInput
  }

  /**
   * UserMaster: findUnique
   */
  export interface UserMasterFindUniqueArgs extends UserMasterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMaster base type for findFirst actions
   */
  export type UserMasterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * Filter, which UserMaster to fetch.
     * 
    **/
    where?: UserMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMasters.
     * 
    **/
    cursor?: UserMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMasters.
     * 
    **/
    distinct?: Enumerable<UserMasterScalarFieldEnum>
  }

  /**
   * UserMaster: findFirst
   */
  export interface UserMasterFindFirstArgs extends UserMasterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMaster findMany
   */
  export type UserMasterFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * Filter, which UserMasters to fetch.
     * 
    **/
    where?: UserMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMasters.
     * 
    **/
    cursor?: UserMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMasters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserMasterScalarFieldEnum>
  }


  /**
   * UserMaster create
   */
  export type UserMasterCreateArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * The data needed to create a UserMaster.
     * 
    **/
    data: XOR<UserMasterCreateInput, UserMasterUncheckedCreateInput>
  }


  /**
   * UserMaster createMany
   */
  export type UserMasterCreateManyArgs = {
    /**
     * The data used to create many UserMasters.
     * 
    **/
    data: Enumerable<UserMasterCreateManyInput>
  }


  /**
   * UserMaster update
   */
  export type UserMasterUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * The data needed to update a UserMaster.
     * 
    **/
    data: XOR<UserMasterUpdateInput, UserMasterUncheckedUpdateInput>
    /**
     * Choose, which UserMaster to update.
     * 
    **/
    where: UserMasterWhereUniqueInput
  }


  /**
   * UserMaster updateMany
   */
  export type UserMasterUpdateManyArgs = {
    /**
     * The data used to update UserMasters.
     * 
    **/
    data: XOR<UserMasterUpdateManyMutationInput, UserMasterUncheckedUpdateManyInput>
    /**
     * Filter which UserMasters to update
     * 
    **/
    where?: UserMasterWhereInput
  }


  /**
   * UserMaster upsert
   */
  export type UserMasterUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * The filter to search for the UserMaster to update in case it exists.
     * 
    **/
    where: UserMasterWhereUniqueInput
    /**
     * In case the UserMaster found by the `where` argument doesn't exist, create a new UserMaster with this data.
     * 
    **/
    create: XOR<UserMasterCreateInput, UserMasterUncheckedCreateInput>
    /**
     * In case the UserMaster was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserMasterUpdateInput, UserMasterUncheckedUpdateInput>
  }


  /**
   * UserMaster delete
   */
  export type UserMasterDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
    /**
     * Filter which UserMaster to delete.
     * 
    **/
    where: UserMasterWhereUniqueInput
  }


  /**
   * UserMaster deleteMany
   */
  export type UserMasterDeleteManyArgs = {
    /**
     * Filter which UserMasters to delete
     * 
    **/
    where?: UserMasterWhereInput
  }


  /**
   * UserMaster findRaw
   */
  export type UserMasterFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * UserMaster aggregateRaw
   */
  export type UserMasterAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * UserMaster: findUniqueOrThrow
   */
  export type UserMasterFindUniqueOrThrowArgs = UserMasterFindUniqueArgsBase
      

  /**
   * UserMaster: findFirstOrThrow
   */
  export type UserMasterFindFirstOrThrowArgs = UserMasterFindFirstArgsBase
      

  /**
   * UserMaster without action
   */
  export type UserMasterArgs = {
    /**
     * Select specific fields to fetch from the UserMaster
     * 
    **/
    select?: UserMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMasterInclude | null
  }



  /**
   * Model User_Permission_Master
   */


  export type AggregateUser_Permission_Master = {
    _count: User_Permission_MasterCountAggregateOutputType | null
    _min: User_Permission_MasterMinAggregateOutputType | null
    _max: User_Permission_MasterMaxAggregateOutputType | null
  }

  export type User_Permission_MasterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    read: boolean | null
    write: boolean | null
    modify: boolean | null
    delete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_Permission_MasterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    read: boolean | null
    write: boolean | null
    modify: boolean | null
    delete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_Permission_MasterCountAggregateOutputType = {
    id: number
    userId: number
    read: number
    write: number
    modify: number
    delete: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_Permission_MasterMinAggregateInputType = {
    id?: true
    userId?: true
    read?: true
    write?: true
    modify?: true
    delete?: true
    created_at?: true
    updated_at?: true
  }

  export type User_Permission_MasterMaxAggregateInputType = {
    id?: true
    userId?: true
    read?: true
    write?: true
    modify?: true
    delete?: true
    created_at?: true
    updated_at?: true
  }

  export type User_Permission_MasterCountAggregateInputType = {
    id?: true
    userId?: true
    read?: true
    write?: true
    modify?: true
    delete?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_Permission_MasterAggregateArgs = {
    /**
     * Filter which User_Permission_Master to aggregate.
     * 
    **/
    where?: User_Permission_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Permission_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<User_Permission_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: User_Permission_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Permission_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Permission_Masters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Permission_Masters
    **/
    _count?: true | User_Permission_MasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_Permission_MasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_Permission_MasterMaxAggregateInputType
  }

  export type GetUser_Permission_MasterAggregateType<T extends User_Permission_MasterAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Permission_Master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Permission_Master[P]>
      : GetScalarType<T[P], AggregateUser_Permission_Master[P]>
  }




  export type User_Permission_MasterGroupByArgs = {
    where?: User_Permission_MasterWhereInput
    orderBy?: Enumerable<User_Permission_MasterOrderByWithAggregationInput>
    by: Array<User_Permission_MasterScalarFieldEnum>
    having?: User_Permission_MasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_Permission_MasterCountAggregateInputType | true
    _min?: User_Permission_MasterMinAggregateInputType
    _max?: User_Permission_MasterMaxAggregateInputType
  }


  export type User_Permission_MasterGroupByOutputType = {
    id: string
    userId: string
    read: boolean
    write: boolean
    modify: boolean
    delete: boolean
    created_at: Date
    updated_at: Date
    _count: User_Permission_MasterCountAggregateOutputType | null
    _min: User_Permission_MasterMinAggregateOutputType | null
    _max: User_Permission_MasterMaxAggregateOutputType | null
  }

  type GetUser_Permission_MasterGroupByPayload<T extends User_Permission_MasterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_Permission_MasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_Permission_MasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_Permission_MasterGroupByOutputType[P]>
            : GetScalarType<T[P], User_Permission_MasterGroupByOutputType[P]>
        }
      >
    >


  export type User_Permission_MasterSelect = {
    id?: boolean
    userId?: boolean
    read?: boolean
    write?: boolean
    modify?: boolean
    delete?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type User_Permission_MasterGetPayload<
    S extends boolean | null | undefined | User_Permission_MasterArgs,
    U = keyof S
      > = S extends true
        ? User_Permission_Master
    : S extends undefined
    ? never
    : S extends User_Permission_MasterArgs | User_Permission_MasterFindManyArgs
    ?'include' extends U
    ? User_Permission_Master 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User_Permission_Master ? User_Permission_Master[P] : never
  } 
    : User_Permission_Master
  : User_Permission_Master


  type User_Permission_MasterCountArgs = Merge<
    Omit<User_Permission_MasterFindManyArgs, 'select' | 'include'> & {
      select?: User_Permission_MasterCountAggregateInputType | true
    }
  >

  export interface User_Permission_MasterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User_Permission_Master that matches the filter.
     * @param {User_Permission_MasterFindUniqueArgs} args - Arguments to find a User_Permission_Master
     * @example
     * // Get one User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_Permission_MasterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_Permission_MasterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_Permission_Master'> extends True ? CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>> : CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master | null >, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T> | null >>

    /**
     * Find the first User_Permission_Master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterFindFirstArgs} args - Arguments to find a User_Permission_Master
     * @example
     * // Get one User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_Permission_MasterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_Permission_MasterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_Permission_Master'> extends True ? CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>> : CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master | null >, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T> | null >>

    /**
     * Find zero or more User_Permission_Masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Permission_Masters
     * const user_Permission_Masters = await prisma.user_Permission_Master.findMany()
     * 
     * // Get first 10 User_Permission_Masters
     * const user_Permission_Masters = await prisma.user_Permission_Master.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_Permission_MasterWithIdOnly = await prisma.user_Permission_Master.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends User_Permission_MasterFindManyArgs>(
      args?: SelectSubset<T, User_Permission_MasterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User_Permission_Master>>, PrismaPromise<Array<User_Permission_MasterGetPayload<T>>>>

    /**
     * Create a User_Permission_Master.
     * @param {User_Permission_MasterCreateArgs} args - Arguments to create a User_Permission_Master.
     * @example
     * // Create one User_Permission_Master
     * const User_Permission_Master = await prisma.user_Permission_Master.create({
     *   data: {
     *     // ... data to create a User_Permission_Master
     *   }
     * })
     * 
    **/
    create<T extends User_Permission_MasterCreateArgs>(
      args: SelectSubset<T, User_Permission_MasterCreateArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Create many User_Permission_Masters.
     *     @param {User_Permission_MasterCreateManyArgs} args - Arguments to create many User_Permission_Masters.
     *     @example
     *     // Create many User_Permission_Masters
     *     const user_Permission_Master = await prisma.user_Permission_Master.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_Permission_MasterCreateManyArgs>(
      args?: SelectSubset<T, User_Permission_MasterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_Permission_Master.
     * @param {User_Permission_MasterDeleteArgs} args - Arguments to delete one User_Permission_Master.
     * @example
     * // Delete one User_Permission_Master
     * const User_Permission_Master = await prisma.user_Permission_Master.delete({
     *   where: {
     *     // ... filter to delete one User_Permission_Master
     *   }
     * })
     * 
    **/
    delete<T extends User_Permission_MasterDeleteArgs>(
      args: SelectSubset<T, User_Permission_MasterDeleteArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Update one User_Permission_Master.
     * @param {User_Permission_MasterUpdateArgs} args - Arguments to update one User_Permission_Master.
     * @example
     * // Update one User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_Permission_MasterUpdateArgs>(
      args: SelectSubset<T, User_Permission_MasterUpdateArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Delete zero or more User_Permission_Masters.
     * @param {User_Permission_MasterDeleteManyArgs} args - Arguments to filter User_Permission_Masters to delete.
     * @example
     * // Delete a few User_Permission_Masters
     * const { count } = await prisma.user_Permission_Master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_Permission_MasterDeleteManyArgs>(
      args?: SelectSubset<T, User_Permission_MasterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Permission_Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Permission_Masters
     * const user_Permission_Master = await prisma.user_Permission_Master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_Permission_MasterUpdateManyArgs>(
      args: SelectSubset<T, User_Permission_MasterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Permission_Master.
     * @param {User_Permission_MasterUpsertArgs} args - Arguments to update or create a User_Permission_Master.
     * @example
     * // Update or create a User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.upsert({
     *   create: {
     *     // ... data to create a User_Permission_Master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Permission_Master we want to update
     *   }
     * })
    **/
    upsert<T extends User_Permission_MasterUpsertArgs>(
      args: SelectSubset<T, User_Permission_MasterUpsertArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Find zero or more User_Permission_Masters that matches the filter.
     * @param {User_Permission_MasterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user_Permission_Master = await prisma.user_Permission_Master.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: User_Permission_MasterFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User_Permission_Master.
     * @param {User_Permission_MasterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user_Permission_Master = await prisma.user_Permission_Master.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: User_Permission_MasterAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one User_Permission_Master that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {User_Permission_MasterFindUniqueOrThrowArgs} args - Arguments to find a User_Permission_Master
     * @example
     * // Get one User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends User_Permission_MasterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, User_Permission_MasterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Find the first User_Permission_Master that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterFindFirstOrThrowArgs} args - Arguments to find a User_Permission_Master
     * @example
     * // Get one User_Permission_Master
     * const user_Permission_Master = await prisma.user_Permission_Master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends User_Permission_MasterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, User_Permission_MasterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__User_Permission_MasterClient<User_Permission_Master>, Prisma__User_Permission_MasterClient<User_Permission_MasterGetPayload<T>>>

    /**
     * Count the number of User_Permission_Masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterCountArgs} args - Arguments to filter User_Permission_Masters to count.
     * @example
     * // Count the number of User_Permission_Masters
     * const count = await prisma.user_Permission_Master.count({
     *   where: {
     *     // ... the filter for the User_Permission_Masters we want to count
     *   }
     * })
    **/
    count<T extends User_Permission_MasterCountArgs>(
      args?: Subset<T, User_Permission_MasterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_Permission_MasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Permission_Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_Permission_MasterAggregateArgs>(args: Subset<T, User_Permission_MasterAggregateArgs>): PrismaPromise<GetUser_Permission_MasterAggregateType<T>>

    /**
     * Group by User_Permission_Master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_Permission_MasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_Permission_MasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_Permission_MasterGroupByArgs['orderBy'] }
        : { orderBy?: User_Permission_MasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_Permission_MasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_Permission_MasterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Permission_Master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_Permission_MasterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User_Permission_Master base type for findUnique actions
   */
  export type User_Permission_MasterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * Filter, which User_Permission_Master to fetch.
     * 
    **/
    where: User_Permission_MasterWhereUniqueInput
  }

  /**
   * User_Permission_Master: findUnique
   */
  export interface User_Permission_MasterFindUniqueArgs extends User_Permission_MasterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_Permission_Master base type for findFirst actions
   */
  export type User_Permission_MasterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * Filter, which User_Permission_Master to fetch.
     * 
    **/
    where?: User_Permission_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Permission_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<User_Permission_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Permission_Masters.
     * 
    **/
    cursor?: User_Permission_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Permission_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Permission_Masters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Permission_Masters.
     * 
    **/
    distinct?: Enumerable<User_Permission_MasterScalarFieldEnum>
  }

  /**
   * User_Permission_Master: findFirst
   */
  export interface User_Permission_MasterFindFirstArgs extends User_Permission_MasterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User_Permission_Master findMany
   */
  export type User_Permission_MasterFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * Filter, which User_Permission_Masters to fetch.
     * 
    **/
    where?: User_Permission_MasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Permission_Masters to fetch.
     * 
    **/
    orderBy?: Enumerable<User_Permission_MasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Permission_Masters.
     * 
    **/
    cursor?: User_Permission_MasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Permission_Masters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Permission_Masters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_Permission_MasterScalarFieldEnum>
  }


  /**
   * User_Permission_Master create
   */
  export type User_Permission_MasterCreateArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * The data needed to create a User_Permission_Master.
     * 
    **/
    data: XOR<User_Permission_MasterCreateInput, User_Permission_MasterUncheckedCreateInput>
  }


  /**
   * User_Permission_Master createMany
   */
  export type User_Permission_MasterCreateManyArgs = {
    /**
     * The data used to create many User_Permission_Masters.
     * 
    **/
    data: Enumerable<User_Permission_MasterCreateManyInput>
  }


  /**
   * User_Permission_Master update
   */
  export type User_Permission_MasterUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * The data needed to update a User_Permission_Master.
     * 
    **/
    data: XOR<User_Permission_MasterUpdateInput, User_Permission_MasterUncheckedUpdateInput>
    /**
     * Choose, which User_Permission_Master to update.
     * 
    **/
    where: User_Permission_MasterWhereUniqueInput
  }


  /**
   * User_Permission_Master updateMany
   */
  export type User_Permission_MasterUpdateManyArgs = {
    /**
     * The data used to update User_Permission_Masters.
     * 
    **/
    data: XOR<User_Permission_MasterUpdateManyMutationInput, User_Permission_MasterUncheckedUpdateManyInput>
    /**
     * Filter which User_Permission_Masters to update
     * 
    **/
    where?: User_Permission_MasterWhereInput
  }


  /**
   * User_Permission_Master upsert
   */
  export type User_Permission_MasterUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * The filter to search for the User_Permission_Master to update in case it exists.
     * 
    **/
    where: User_Permission_MasterWhereUniqueInput
    /**
     * In case the User_Permission_Master found by the `where` argument doesn't exist, create a new User_Permission_Master with this data.
     * 
    **/
    create: XOR<User_Permission_MasterCreateInput, User_Permission_MasterUncheckedCreateInput>
    /**
     * In case the User_Permission_Master was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<User_Permission_MasterUpdateInput, User_Permission_MasterUncheckedUpdateInput>
  }


  /**
   * User_Permission_Master delete
   */
  export type User_Permission_MasterDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
    /**
     * Filter which User_Permission_Master to delete.
     * 
    **/
    where: User_Permission_MasterWhereUniqueInput
  }


  /**
   * User_Permission_Master deleteMany
   */
  export type User_Permission_MasterDeleteManyArgs = {
    /**
     * Filter which User_Permission_Masters to delete
     * 
    **/
    where?: User_Permission_MasterWhereInput
  }


  /**
   * User_Permission_Master findRaw
   */
  export type User_Permission_MasterFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User_Permission_Master aggregateRaw
   */
  export type User_Permission_MasterAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User_Permission_Master: findUniqueOrThrow
   */
  export type User_Permission_MasterFindUniqueOrThrowArgs = User_Permission_MasterFindUniqueArgsBase
      

  /**
   * User_Permission_Master: findFirstOrThrow
   */
  export type User_Permission_MasterFindFirstOrThrowArgs = User_Permission_MasterFindFirstArgsBase
      

  /**
   * User_Permission_Master without action
   */
  export type User_Permission_MasterArgs = {
    /**
     * Select specific fields to fetch from the User_Permission_Master
     * 
    **/
    select?: User_Permission_MasterSelect | null
  }



  /**
   * Model Todo
   */


  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TodoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    completed: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TodoMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    completed?: true
    created_at?: true
    updated_at?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    completed?: true
    created_at?: true
    updated_at?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    completed?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TodoAggregateArgs = {
    /**
     * Filter which Todo to aggregate.
     * 
    **/
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     * 
    **/
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs = {
    where?: TodoWhereInput
    orderBy?: Enumerable<TodoOrderByWithAggregationInput>
    by: Array<TodoScalarFieldEnum>
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }


  export type TodoGroupByOutputType = {
    id: string
    userId: string
    title: string
    completed: boolean
    created_at: Date
    updated_at: Date
    _count: TodoCountAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect = {
    id?: boolean
    userId?: boolean
    title?: boolean
    completed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TodoGetPayload<
    S extends boolean | null | undefined | TodoArgs,
    U = keyof S
      > = S extends true
        ? Todo
    : S extends undefined
    ? never
    : S extends TodoArgs | TodoFindManyArgs
    ?'include' extends U
    ? Todo 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Todo ? Todo[P] : never
  } 
    : Todo
  : Todo


  type TodoCountArgs = Merge<
    Omit<TodoFindManyArgs, 'select' | 'include'> & {
      select?: TodoCountAggregateInputType | true
    }
  >

  export interface TodoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TodoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Todo'> extends True ? CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>> : CheckSelect<T, Prisma__TodoClient<Todo | null >, Prisma__TodoClient<TodoGetPayload<T> | null >>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TodoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Todo'> extends True ? CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>> : CheckSelect<T, Prisma__TodoClient<Todo | null >, Prisma__TodoClient<TodoGetPayload<T> | null >>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TodoFindManyArgs>(
      args?: SelectSubset<T, TodoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Todo>>, PrismaPromise<Array<TodoGetPayload<T>>>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
    **/
    create<T extends TodoCreateArgs>(
      args: SelectSubset<T, TodoCreateArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Create many Todos.
     *     @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     *     @example
     *     // Create many Todos
     *     const todo = await prisma.todo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TodoCreateManyArgs>(
      args?: SelectSubset<T, TodoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
    **/
    delete<T extends TodoDeleteArgs>(
      args: SelectSubset<T, TodoDeleteArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodoUpdateArgs>(
      args: SelectSubset<T, TodoUpdateArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodoDeleteManyArgs>(
      args?: SelectSubset<T, TodoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodoUpdateManyArgs>(
      args: SelectSubset<T, TodoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
    **/
    upsert<T extends TodoUpsertArgs>(
      args: SelectSubset<T, TodoUpsertArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Find zero or more Todos that matches the filter.
     * @param {TodoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const todo = await prisma.todo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TodoFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Todo.
     * @param {TodoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const todo = await prisma.todo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TodoAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Todo that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TodoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Find the first Todo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TodoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TodoClient<Todo>, Prisma__TodoClient<TodoGetPayload<T>>>

    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TodoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Todo base type for findUnique actions
   */
  export type TodoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     * 
    **/
    where: TodoWhereUniqueInput
  }

  /**
   * Todo: findUnique
   */
  export interface TodoFindUniqueArgs extends TodoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todo base type for findFirst actions
   */
  export type TodoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * Filter, which Todo to fetch.
     * 
    **/
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     * 
    **/
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     * 
    **/
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     * 
    **/
    distinct?: Enumerable<TodoScalarFieldEnum>
  }

  /**
   * Todo: findFirst
   */
  export interface TodoFindFirstArgs extends TodoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * Filter, which Todos to fetch.
     * 
    **/
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     * 
    **/
    orderBy?: Enumerable<TodoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     * 
    **/
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TodoScalarFieldEnum>
  }


  /**
   * Todo create
   */
  export type TodoCreateArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * The data needed to create a Todo.
     * 
    **/
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }


  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs = {
    /**
     * The data used to create many Todos.
     * 
    **/
    data: Enumerable<TodoCreateManyInput>
  }


  /**
   * Todo update
   */
  export type TodoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * The data needed to update a Todo.
     * 
    **/
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     * 
    **/
    where: TodoWhereUniqueInput
  }


  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs = {
    /**
     * The data used to update Todos.
     * 
    **/
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     * 
    **/
    where?: TodoWhereInput
  }


  /**
   * Todo upsert
   */
  export type TodoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * The filter to search for the Todo to update in case it exists.
     * 
    **/
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     * 
    **/
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }


  /**
   * Todo delete
   */
  export type TodoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
    /**
     * Filter which Todo to delete.
     * 
    **/
    where: TodoWhereUniqueInput
  }


  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs = {
    /**
     * Filter which Todos to delete
     * 
    **/
    where?: TodoWhereInput
  }


  /**
   * Todo findRaw
   */
  export type TodoFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Todo aggregateRaw
   */
  export type TodoAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Todo: findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs = TodoFindUniqueArgsBase
      

  /**
   * Todo: findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs = TodoFindFirstArgsBase
      

  /**
   * Todo without action
   */
  export type TodoArgs = {
    /**
     * Select specific fields to fetch from the Todo
     * 
    **/
    select?: TodoSelect | null
  }



  /**
   * Model ProductMaster
   */


  export type AggregateProductMaster = {
    _count: ProductMasterCountAggregateOutputType | null
    _avg: ProductMasterAvgAggregateOutputType | null
    _sum: ProductMasterSumAggregateOutputType | null
    _min: ProductMasterMinAggregateOutputType | null
    _max: ProductMasterMaxAggregateOutputType | null
  }

  export type ProductMasterAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductMasterSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductMasterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMasterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMasterCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    price: number
    quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductMasterAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductMasterSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductMasterMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMasterMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMasterCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductMasterAggregateArgs = {
    /**
     * Filter which ProductMaster to aggregate.
     * 
    **/
    where?: ProductMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMasters
    **/
    _count?: true | ProductMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMasterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMasterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMasterMaxAggregateInputType
  }

  export type GetProductMasterAggregateType<T extends ProductMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMaster[P]>
      : GetScalarType<T[P], AggregateProductMaster[P]>
  }




  export type ProductMasterGroupByArgs = {
    where?: ProductMasterWhereInput
    orderBy?: Enumerable<ProductMasterOrderByWithAggregationInput>
    by: Array<ProductMasterScalarFieldEnum>
    having?: ProductMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMasterCountAggregateInputType | true
    _avg?: ProductMasterAvgAggregateInputType
    _sum?: ProductMasterSumAggregateInputType
    _min?: ProductMasterMinAggregateInputType
    _max?: ProductMasterMaxAggregateInputType
  }


  export type ProductMasterGroupByOutputType = {
    id: string
    userId: string
    name: string
    price: number
    quantity: number
    created_at: Date
    updated_at: Date
    _count: ProductMasterCountAggregateOutputType | null
    _avg: ProductMasterAvgAggregateOutputType | null
    _sum: ProductMasterSumAggregateOutputType | null
    _min: ProductMasterMinAggregateOutputType | null
    _max: ProductMasterMaxAggregateOutputType | null
  }

  type GetProductMasterGroupByPayload<T extends ProductMasterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMasterGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMasterGroupByOutputType[P]>
        }
      >
    >


  export type ProductMasterSelect = {
    id?: boolean
    userId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    product_img?: boolean | ProductImageFindManyArgs
    created_at?: boolean
    updated_at?: boolean
    _count?: boolean | ProductMasterCountOutputTypeArgs
  }

  export type ProductMasterInclude = {
    product_img?: boolean | ProductImageFindManyArgs
    _count?: boolean | ProductMasterCountOutputTypeArgs
  }

  export type ProductMasterGetPayload<
    S extends boolean | null | undefined | ProductMasterArgs,
    U = keyof S
      > = S extends true
        ? ProductMaster
    : S extends undefined
    ? never
    : S extends ProductMasterArgs | ProductMasterFindManyArgs
    ?'include' extends U
    ? ProductMaster  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product_img' ? Array < ProductImageGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ProductMasterCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product_img' ? Array < ProductImageGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ProductMasterCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ProductMaster ? ProductMaster[P] : never
  } 
    : ProductMaster
  : ProductMaster


  type ProductMasterCountArgs = Merge<
    Omit<ProductMasterFindManyArgs, 'select' | 'include'> & {
      select?: ProductMasterCountAggregateInputType | true
    }
  >

  export interface ProductMasterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductMaster that matches the filter.
     * @param {ProductMasterFindUniqueArgs} args - Arguments to find a ProductMaster
     * @example
     * // Get one ProductMaster
     * const productMaster = await prisma.productMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductMasterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductMasterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductMaster'> extends True ? CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>> : CheckSelect<T, Prisma__ProductMasterClient<ProductMaster | null >, Prisma__ProductMasterClient<ProductMasterGetPayload<T> | null >>

    /**
     * Find the first ProductMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterFindFirstArgs} args - Arguments to find a ProductMaster
     * @example
     * // Get one ProductMaster
     * const productMaster = await prisma.productMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductMasterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductMasterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductMaster'> extends True ? CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>> : CheckSelect<T, Prisma__ProductMasterClient<ProductMaster | null >, Prisma__ProductMasterClient<ProductMasterGetPayload<T> | null >>

    /**
     * Find zero or more ProductMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMasters
     * const productMasters = await prisma.productMaster.findMany()
     * 
     * // Get first 10 ProductMasters
     * const productMasters = await prisma.productMaster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMasterWithIdOnly = await prisma.productMaster.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductMasterFindManyArgs>(
      args?: SelectSubset<T, ProductMasterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductMaster>>, PrismaPromise<Array<ProductMasterGetPayload<T>>>>

    /**
     * Create a ProductMaster.
     * @param {ProductMasterCreateArgs} args - Arguments to create a ProductMaster.
     * @example
     * // Create one ProductMaster
     * const ProductMaster = await prisma.productMaster.create({
     *   data: {
     *     // ... data to create a ProductMaster
     *   }
     * })
     * 
    **/
    create<T extends ProductMasterCreateArgs>(
      args: SelectSubset<T, ProductMasterCreateArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Create many ProductMasters.
     *     @param {ProductMasterCreateManyArgs} args - Arguments to create many ProductMasters.
     *     @example
     *     // Create many ProductMasters
     *     const productMaster = await prisma.productMaster.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductMasterCreateManyArgs>(
      args?: SelectSubset<T, ProductMasterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductMaster.
     * @param {ProductMasterDeleteArgs} args - Arguments to delete one ProductMaster.
     * @example
     * // Delete one ProductMaster
     * const ProductMaster = await prisma.productMaster.delete({
     *   where: {
     *     // ... filter to delete one ProductMaster
     *   }
     * })
     * 
    **/
    delete<T extends ProductMasterDeleteArgs>(
      args: SelectSubset<T, ProductMasterDeleteArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Update one ProductMaster.
     * @param {ProductMasterUpdateArgs} args - Arguments to update one ProductMaster.
     * @example
     * // Update one ProductMaster
     * const productMaster = await prisma.productMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductMasterUpdateArgs>(
      args: SelectSubset<T, ProductMasterUpdateArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Delete zero or more ProductMasters.
     * @param {ProductMasterDeleteManyArgs} args - Arguments to filter ProductMasters to delete.
     * @example
     * // Delete a few ProductMasters
     * const { count } = await prisma.productMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductMasterDeleteManyArgs>(
      args?: SelectSubset<T, ProductMasterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMasters
     * const productMaster = await prisma.productMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductMasterUpdateManyArgs>(
      args: SelectSubset<T, ProductMasterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductMaster.
     * @param {ProductMasterUpsertArgs} args - Arguments to update or create a ProductMaster.
     * @example
     * // Update or create a ProductMaster
     * const productMaster = await prisma.productMaster.upsert({
     *   create: {
     *     // ... data to create a ProductMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMaster we want to update
     *   }
     * })
    **/
    upsert<T extends ProductMasterUpsertArgs>(
      args: SelectSubset<T, ProductMasterUpsertArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Find zero or more ProductMasters that matches the filter.
     * @param {ProductMasterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productMaster = await prisma.productMaster.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductMasterFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductMaster.
     * @param {ProductMasterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productMaster = await prisma.productMaster.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductMasterAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one ProductMaster that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductMasterFindUniqueOrThrowArgs} args - Arguments to find a ProductMaster
     * @example
     * // Get one ProductMaster
     * const productMaster = await prisma.productMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductMasterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductMasterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Find the first ProductMaster that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterFindFirstOrThrowArgs} args - Arguments to find a ProductMaster
     * @example
     * // Get one ProductMaster
     * const productMaster = await prisma.productMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductMasterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductMasterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster>, Prisma__ProductMasterClient<ProductMasterGetPayload<T>>>

    /**
     * Count the number of ProductMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterCountArgs} args - Arguments to filter ProductMasters to count.
     * @example
     * // Count the number of ProductMasters
     * const count = await prisma.productMaster.count({
     *   where: {
     *     // ... the filter for the ProductMasters we want to count
     *   }
     * })
    **/
    count<T extends ProductMasterCountArgs>(
      args?: Subset<T, ProductMasterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductMasterAggregateArgs>(args: Subset<T, ProductMasterAggregateArgs>): PrismaPromise<GetProductMasterAggregateType<T>>

    /**
     * Group by ProductMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMasterGroupByArgs['orderBy'] }
        : { orderBy?: ProductMasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMasterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductMasterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product_img<T extends ProductImageFindManyArgs = {}>(args?: Subset<T, ProductImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductImage>>, PrismaPromise<Array<ProductImageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductMaster base type for findUnique actions
   */
  export type ProductMasterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * Filter, which ProductMaster to fetch.
     * 
    **/
    where: ProductMasterWhereUniqueInput
  }

  /**
   * ProductMaster: findUnique
   */
  export interface ProductMasterFindUniqueArgs extends ProductMasterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductMaster base type for findFirst actions
   */
  export type ProductMasterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * Filter, which ProductMaster to fetch.
     * 
    **/
    where?: ProductMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMasters.
     * 
    **/
    cursor?: ProductMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMasters.
     * 
    **/
    distinct?: Enumerable<ProductMasterScalarFieldEnum>
  }

  /**
   * ProductMaster: findFirst
   */
  export interface ProductMasterFindFirstArgs extends ProductMasterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductMaster findMany
   */
  export type ProductMasterFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * Filter, which ProductMasters to fetch.
     * 
    **/
    where?: ProductMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMasters.
     * 
    **/
    cursor?: ProductMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMasters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductMasterScalarFieldEnum>
  }


  /**
   * ProductMaster create
   */
  export type ProductMasterCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * The data needed to create a ProductMaster.
     * 
    **/
    data: XOR<ProductMasterCreateInput, ProductMasterUncheckedCreateInput>
  }


  /**
   * ProductMaster createMany
   */
  export type ProductMasterCreateManyArgs = {
    /**
     * The data used to create many ProductMasters.
     * 
    **/
    data: Enumerable<ProductMasterCreateManyInput>
  }


  /**
   * ProductMaster update
   */
  export type ProductMasterUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * The data needed to update a ProductMaster.
     * 
    **/
    data: XOR<ProductMasterUpdateInput, ProductMasterUncheckedUpdateInput>
    /**
     * Choose, which ProductMaster to update.
     * 
    **/
    where: ProductMasterWhereUniqueInput
  }


  /**
   * ProductMaster updateMany
   */
  export type ProductMasterUpdateManyArgs = {
    /**
     * The data used to update ProductMasters.
     * 
    **/
    data: XOR<ProductMasterUpdateManyMutationInput, ProductMasterUncheckedUpdateManyInput>
    /**
     * Filter which ProductMasters to update
     * 
    **/
    where?: ProductMasterWhereInput
  }


  /**
   * ProductMaster upsert
   */
  export type ProductMasterUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * The filter to search for the ProductMaster to update in case it exists.
     * 
    **/
    where: ProductMasterWhereUniqueInput
    /**
     * In case the ProductMaster found by the `where` argument doesn't exist, create a new ProductMaster with this data.
     * 
    **/
    create: XOR<ProductMasterCreateInput, ProductMasterUncheckedCreateInput>
    /**
     * In case the ProductMaster was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductMasterUpdateInput, ProductMasterUncheckedUpdateInput>
  }


  /**
   * ProductMaster delete
   */
  export type ProductMasterDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
    /**
     * Filter which ProductMaster to delete.
     * 
    **/
    where: ProductMasterWhereUniqueInput
  }


  /**
   * ProductMaster deleteMany
   */
  export type ProductMasterDeleteManyArgs = {
    /**
     * Filter which ProductMasters to delete
     * 
    **/
    where?: ProductMasterWhereInput
  }


  /**
   * ProductMaster findRaw
   */
  export type ProductMasterFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductMaster aggregateRaw
   */
  export type ProductMasterAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductMaster: findUniqueOrThrow
   */
  export type ProductMasterFindUniqueOrThrowArgs = ProductMasterFindUniqueArgsBase
      

  /**
   * ProductMaster: findFirstOrThrow
   */
  export type ProductMasterFindFirstOrThrowArgs = ProductMasterFindFirstArgsBase
      

  /**
   * ProductMaster without action
   */
  export type ProductMasterArgs = {
    /**
     * Select specific fields to fetch from the ProductMaster
     * 
    **/
    select?: ProductMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductMasterInclude | null
  }



  /**
   * Model ProductImage
   */


  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    productId: string | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    productId: string | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    name: number
    url: number
    productId: number
    _all: number
  }


  export type ProductImageMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    productId?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    productId?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    productId?: true
    _all?: true
  }

  export type ProductImageAggregateArgs = {
    /**
     * Filter which ProductImage to aggregate.
     * 
    **/
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs = {
    where?: ProductImageWhereInput
    orderBy?: Enumerable<ProductImageOrderByWithAggregationInput>
    by: Array<ProductImageScalarFieldEnum>
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }


  export type ProductImageGroupByOutputType = {
    id: string
    name: string
    url: string
    productId: string
    _count: ProductImageCountAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    product?: boolean | ProductMasterArgs
    productId?: boolean
  }

  export type ProductImageInclude = {
    product?: boolean | ProductMasterArgs
  }

  export type ProductImageGetPayload<
    S extends boolean | null | undefined | ProductImageArgs,
    U = keyof S
      > = S extends true
        ? ProductImage
    : S extends undefined
    ? never
    : S extends ProductImageArgs | ProductImageFindManyArgs
    ?'include' extends U
    ? ProductImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? ProductMasterGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? ProductMasterGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof ProductImage ? ProductImage[P] : never
  } 
    : ProductImage
  : ProductImage


  type ProductImageCountArgs = Merge<
    Omit<ProductImageFindManyArgs, 'select' | 'include'> & {
      select?: ProductImageCountAggregateInputType | true
    }
  >

  export interface ProductImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductImage'> extends True ? CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>> : CheckSelect<T, Prisma__ProductImageClient<ProductImage | null >, Prisma__ProductImageClient<ProductImageGetPayload<T> | null >>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductImage'> extends True ? CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>> : CheckSelect<T, Prisma__ProductImageClient<ProductImage | null >, Prisma__ProductImageClient<ProductImageGetPayload<T> | null >>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductImageFindManyArgs>(
      args?: SelectSubset<T, ProductImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductImage>>, PrismaPromise<Array<ProductImageGetPayload<T>>>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
    **/
    create<T extends ProductImageCreateArgs>(
      args: SelectSubset<T, ProductImageCreateArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Create many ProductImages.
     *     @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     *     @example
     *     // Create many ProductImages
     *     const productImage = await prisma.productImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductImageCreateManyArgs>(
      args?: SelectSubset<T, ProductImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
    **/
    delete<T extends ProductImageDeleteArgs>(
      args: SelectSubset<T, ProductImageDeleteArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductImageUpdateArgs>(
      args: SelectSubset<T, ProductImageUpdateArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductImageDeleteManyArgs>(
      args?: SelectSubset<T, ProductImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductImageUpdateManyArgs>(
      args: SelectSubset<T, ProductImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
    **/
    upsert<T extends ProductImageUpsertArgs>(
      args: SelectSubset<T, ProductImageUpsertArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Find zero or more ProductImages that matches the filter.
     * @param {ProductImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productImage = await prisma.productImage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductImageFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductImage.
     * @param {ProductImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productImage = await prisma.productImage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductImageAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one ProductImage that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductImageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductImageClient<ProductImage>, Prisma__ProductImageClient<ProductImageGetPayload<T>>>

    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductMasterArgs = {}>(args?: Subset<T, ProductMasterArgs>): CheckSelect<T, Prisma__ProductMasterClient<ProductMaster | null >, Prisma__ProductMasterClient<ProductMasterGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductImage base type for findUnique actions
   */
  export type ProductImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * Filter, which ProductImage to fetch.
     * 
    **/
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage: findUnique
   */
  export interface ProductImageFindUniqueArgs extends ProductImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductImage base type for findFirst actions
   */
  export type ProductImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * Filter, which ProductImage to fetch.
     * 
    **/
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     * 
    **/
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     * 
    **/
    distinct?: Enumerable<ProductImageScalarFieldEnum>
  }

  /**
   * ProductImage: findFirst
   */
  export interface ProductImageFindFirstArgs extends ProductImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * Filter, which ProductImages to fetch.
     * 
    **/
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     * 
    **/
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductImageScalarFieldEnum>
  }


  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * The data needed to create a ProductImage.
     * 
    **/
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }


  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs = {
    /**
     * The data used to create many ProductImages.
     * 
    **/
    data: Enumerable<ProductImageCreateManyInput>
  }


  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * The data needed to update a ProductImage.
     * 
    **/
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     * 
    **/
    where: ProductImageWhereUniqueInput
  }


  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs = {
    /**
     * The data used to update ProductImages.
     * 
    **/
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     * 
    **/
    where?: ProductImageWhereInput
  }


  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     * 
    **/
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     * 
    **/
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }


  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
    /**
     * Filter which ProductImage to delete.
     * 
    **/
    where: ProductImageWhereUniqueInput
  }


  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs = {
    /**
     * Filter which ProductImages to delete
     * 
    **/
    where?: ProductImageWhereInput
  }


  /**
   * ProductImage findRaw
   */
  export type ProductImageFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductImage aggregateRaw
   */
  export type ProductImageAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProductImage: findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs = ProductImageFindUniqueArgsBase
      

  /**
   * ProductImage: findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs = ProductImageFindFirstArgsBase
      

  /**
   * ProductImage without action
   */
  export type ProductImageArgs = {
    /**
     * Select specific fields to fetch from the ProductImage
     * 
    **/
    select?: ProductImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductImageInclude | null
  }



  /**
   * Model CustomDataFromXls
   */


  export type AggregateCustomDataFromXls = {
    _count: CustomDataFromXlsCountAggregateOutputType | null
    _min: CustomDataFromXlsMinAggregateOutputType | null
    _max: CustomDataFromXlsMaxAggregateOutputType | null
  }

  export type CustomDataFromXlsMinAggregateOutputType = {
    id: string | null
    xlsdataID: string | null
  }

  export type CustomDataFromXlsMaxAggregateOutputType = {
    id: string | null
    xlsdataID: string | null
  }

  export type CustomDataFromXlsCountAggregateOutputType = {
    id: number
    extendedXlsData: number
    xlsdataID: number
    _all: number
  }


  export type CustomDataFromXlsMinAggregateInputType = {
    id?: true
    xlsdataID?: true
  }

  export type CustomDataFromXlsMaxAggregateInputType = {
    id?: true
    xlsdataID?: true
  }

  export type CustomDataFromXlsCountAggregateInputType = {
    id?: true
    extendedXlsData?: true
    xlsdataID?: true
    _all?: true
  }

  export type CustomDataFromXlsAggregateArgs = {
    /**
     * Filter which CustomDataFromXls to aggregate.
     * 
    **/
    where?: CustomDataFromXlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXls to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomDataFromXlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomDataFromXls
    **/
    _count?: true | CustomDataFromXlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomDataFromXlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomDataFromXlsMaxAggregateInputType
  }

  export type GetCustomDataFromXlsAggregateType<T extends CustomDataFromXlsAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomDataFromXls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomDataFromXls[P]>
      : GetScalarType<T[P], AggregateCustomDataFromXls[P]>
  }




  export type CustomDataFromXlsGroupByArgs = {
    where?: CustomDataFromXlsWhereInput
    orderBy?: Enumerable<CustomDataFromXlsOrderByWithAggregationInput>
    by: Array<CustomDataFromXlsScalarFieldEnum>
    having?: CustomDataFromXlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomDataFromXlsCountAggregateInputType | true
    _min?: CustomDataFromXlsMinAggregateInputType
    _max?: CustomDataFromXlsMaxAggregateInputType
  }


  export type CustomDataFromXlsGroupByOutputType = {
    id: string
    extendedXlsData: JsonValue | null
    xlsdataID: string
    _count: CustomDataFromXlsCountAggregateOutputType | null
    _min: CustomDataFromXlsMinAggregateOutputType | null
    _max: CustomDataFromXlsMaxAggregateOutputType | null
  }

  type GetCustomDataFromXlsGroupByPayload<T extends CustomDataFromXlsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomDataFromXlsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomDataFromXlsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomDataFromXlsGroupByOutputType[P]>
            : GetScalarType<T[P], CustomDataFromXlsGroupByOutputType[P]>
        }
      >
    >


  export type CustomDataFromXlsSelect = {
    id?: boolean
    extendedXlsData?: boolean
    xlsdata?: boolean | CustomDataFromXlsMasterArgs
    xlsdataID?: boolean
  }

  export type CustomDataFromXlsInclude = {
    xlsdata?: boolean | CustomDataFromXlsMasterArgs
  }

  export type CustomDataFromXlsGetPayload<
    S extends boolean | null | undefined | CustomDataFromXlsArgs,
    U = keyof S
      > = S extends true
        ? CustomDataFromXls
    : S extends undefined
    ? never
    : S extends CustomDataFromXlsArgs | CustomDataFromXlsFindManyArgs
    ?'include' extends U
    ? CustomDataFromXls  & {
    [P in TrueKeys<S['include']>]:
        P extends 'xlsdata' ? CustomDataFromXlsMasterGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'xlsdata' ? CustomDataFromXlsMasterGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof CustomDataFromXls ? CustomDataFromXls[P] : never
  } 
    : CustomDataFromXls
  : CustomDataFromXls


  type CustomDataFromXlsCountArgs = Merge<
    Omit<CustomDataFromXlsFindManyArgs, 'select' | 'include'> & {
      select?: CustomDataFromXlsCountAggregateInputType | true
    }
  >

  export interface CustomDataFromXlsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CustomDataFromXls that matches the filter.
     * @param {CustomDataFromXlsFindUniqueArgs} args - Arguments to find a CustomDataFromXls
     * @example
     * // Get one CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomDataFromXlsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomDataFromXlsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CustomDataFromXls'> extends True ? CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>> : CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls | null >, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T> | null >>

    /**
     * Find the first CustomDataFromXls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsFindFirstArgs} args - Arguments to find a CustomDataFromXls
     * @example
     * // Get one CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomDataFromXlsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomDataFromXlsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CustomDataFromXls'> extends True ? CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>> : CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls | null >, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T> | null >>

    /**
     * Find zero or more CustomDataFromXls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findMany()
     * 
     * // Get first 10 CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customDataFromXlsWithIdOnly = await prisma.customDataFromXls.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomDataFromXlsFindManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CustomDataFromXls>>, PrismaPromise<Array<CustomDataFromXlsGetPayload<T>>>>

    /**
     * Create a CustomDataFromXls.
     * @param {CustomDataFromXlsCreateArgs} args - Arguments to create a CustomDataFromXls.
     * @example
     * // Create one CustomDataFromXls
     * const CustomDataFromXls = await prisma.customDataFromXls.create({
     *   data: {
     *     // ... data to create a CustomDataFromXls
     *   }
     * })
     * 
    **/
    create<T extends CustomDataFromXlsCreateArgs>(
      args: SelectSubset<T, CustomDataFromXlsCreateArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Create many CustomDataFromXls.
     *     @param {CustomDataFromXlsCreateManyArgs} args - Arguments to create many CustomDataFromXls.
     *     @example
     *     // Create many CustomDataFromXls
     *     const customDataFromXls = await prisma.customDataFromXls.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomDataFromXlsCreateManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CustomDataFromXls.
     * @param {CustomDataFromXlsDeleteArgs} args - Arguments to delete one CustomDataFromXls.
     * @example
     * // Delete one CustomDataFromXls
     * const CustomDataFromXls = await prisma.customDataFromXls.delete({
     *   where: {
     *     // ... filter to delete one CustomDataFromXls
     *   }
     * })
     * 
    **/
    delete<T extends CustomDataFromXlsDeleteArgs>(
      args: SelectSubset<T, CustomDataFromXlsDeleteArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Update one CustomDataFromXls.
     * @param {CustomDataFromXlsUpdateArgs} args - Arguments to update one CustomDataFromXls.
     * @example
     * // Update one CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomDataFromXlsUpdateArgs>(
      args: SelectSubset<T, CustomDataFromXlsUpdateArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Delete zero or more CustomDataFromXls.
     * @param {CustomDataFromXlsDeleteManyArgs} args - Arguments to filter CustomDataFromXls to delete.
     * @example
     * // Delete a few CustomDataFromXls
     * const { count } = await prisma.customDataFromXls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomDataFromXlsDeleteManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomDataFromXls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomDataFromXlsUpdateManyArgs>(
      args: SelectSubset<T, CustomDataFromXlsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomDataFromXls.
     * @param {CustomDataFromXlsUpsertArgs} args - Arguments to update or create a CustomDataFromXls.
     * @example
     * // Update or create a CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.upsert({
     *   create: {
     *     // ... data to create a CustomDataFromXls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomDataFromXls we want to update
     *   }
     * })
    **/
    upsert<T extends CustomDataFromXlsUpsertArgs>(
      args: SelectSubset<T, CustomDataFromXlsUpsertArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Find zero or more CustomDataFromXls that matches the filter.
     * @param {CustomDataFromXlsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customDataFromXls = await prisma.customDataFromXls.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CustomDataFromXlsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CustomDataFromXls.
     * @param {CustomDataFromXlsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customDataFromXls = await prisma.customDataFromXls.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CustomDataFromXlsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one CustomDataFromXls that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CustomDataFromXlsFindUniqueOrThrowArgs} args - Arguments to find a CustomDataFromXls
     * @example
     * // Get one CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomDataFromXlsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomDataFromXlsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Find the first CustomDataFromXls that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsFindFirstOrThrowArgs} args - Arguments to find a CustomDataFromXls
     * @example
     * // Get one CustomDataFromXls
     * const customDataFromXls = await prisma.customDataFromXls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomDataFromXlsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomDataFromXlsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsClient<CustomDataFromXls>, Prisma__CustomDataFromXlsClient<CustomDataFromXlsGetPayload<T>>>

    /**
     * Count the number of CustomDataFromXls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsCountArgs} args - Arguments to filter CustomDataFromXls to count.
     * @example
     * // Count the number of CustomDataFromXls
     * const count = await prisma.customDataFromXls.count({
     *   where: {
     *     // ... the filter for the CustomDataFromXls we want to count
     *   }
     * })
    **/
    count<T extends CustomDataFromXlsCountArgs>(
      args?: Subset<T, CustomDataFromXlsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomDataFromXlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomDataFromXls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomDataFromXlsAggregateArgs>(args: Subset<T, CustomDataFromXlsAggregateArgs>): PrismaPromise<GetCustomDataFromXlsAggregateType<T>>

    /**
     * Group by CustomDataFromXls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomDataFromXlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomDataFromXlsGroupByArgs['orderBy'] }
        : { orderBy?: CustomDataFromXlsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomDataFromXlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomDataFromXlsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomDataFromXls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomDataFromXlsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    xlsdata<T extends CustomDataFromXlsMasterArgs = {}>(args?: Subset<T, CustomDataFromXlsMasterArgs>): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster | null >, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CustomDataFromXls base type for findUnique actions
   */
  export type CustomDataFromXlsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * Filter, which CustomDataFromXls to fetch.
     * 
    **/
    where: CustomDataFromXlsWhereUniqueInput
  }

  /**
   * CustomDataFromXls: findUnique
   */
  export interface CustomDataFromXlsFindUniqueArgs extends CustomDataFromXlsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomDataFromXls base type for findFirst actions
   */
  export type CustomDataFromXlsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * Filter, which CustomDataFromXls to fetch.
     * 
    **/
    where?: CustomDataFromXlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXls to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomDataFromXls.
     * 
    **/
    cursor?: CustomDataFromXlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomDataFromXls.
     * 
    **/
    distinct?: Enumerable<CustomDataFromXlsScalarFieldEnum>
  }

  /**
   * CustomDataFromXls: findFirst
   */
  export interface CustomDataFromXlsFindFirstArgs extends CustomDataFromXlsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomDataFromXls findMany
   */
  export type CustomDataFromXlsFindManyArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * Filter, which CustomDataFromXls to fetch.
     * 
    **/
    where?: CustomDataFromXlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXls to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomDataFromXls.
     * 
    **/
    cursor?: CustomDataFromXlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomDataFromXlsScalarFieldEnum>
  }


  /**
   * CustomDataFromXls create
   */
  export type CustomDataFromXlsCreateArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * The data needed to create a CustomDataFromXls.
     * 
    **/
    data: XOR<CustomDataFromXlsCreateInput, CustomDataFromXlsUncheckedCreateInput>
  }


  /**
   * CustomDataFromXls createMany
   */
  export type CustomDataFromXlsCreateManyArgs = {
    /**
     * The data used to create many CustomDataFromXls.
     * 
    **/
    data: Enumerable<CustomDataFromXlsCreateManyInput>
  }


  /**
   * CustomDataFromXls update
   */
  export type CustomDataFromXlsUpdateArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * The data needed to update a CustomDataFromXls.
     * 
    **/
    data: XOR<CustomDataFromXlsUpdateInput, CustomDataFromXlsUncheckedUpdateInput>
    /**
     * Choose, which CustomDataFromXls to update.
     * 
    **/
    where: CustomDataFromXlsWhereUniqueInput
  }


  /**
   * CustomDataFromXls updateMany
   */
  export type CustomDataFromXlsUpdateManyArgs = {
    /**
     * The data used to update CustomDataFromXls.
     * 
    **/
    data: XOR<CustomDataFromXlsUpdateManyMutationInput, CustomDataFromXlsUncheckedUpdateManyInput>
    /**
     * Filter which CustomDataFromXls to update
     * 
    **/
    where?: CustomDataFromXlsWhereInput
  }


  /**
   * CustomDataFromXls upsert
   */
  export type CustomDataFromXlsUpsertArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * The filter to search for the CustomDataFromXls to update in case it exists.
     * 
    **/
    where: CustomDataFromXlsWhereUniqueInput
    /**
     * In case the CustomDataFromXls found by the `where` argument doesn't exist, create a new CustomDataFromXls with this data.
     * 
    **/
    create: XOR<CustomDataFromXlsCreateInput, CustomDataFromXlsUncheckedCreateInput>
    /**
     * In case the CustomDataFromXls was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomDataFromXlsUpdateInput, CustomDataFromXlsUncheckedUpdateInput>
  }


  /**
   * CustomDataFromXls delete
   */
  export type CustomDataFromXlsDeleteArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
    /**
     * Filter which CustomDataFromXls to delete.
     * 
    **/
    where: CustomDataFromXlsWhereUniqueInput
  }


  /**
   * CustomDataFromXls deleteMany
   */
  export type CustomDataFromXlsDeleteManyArgs = {
    /**
     * Filter which CustomDataFromXls to delete
     * 
    **/
    where?: CustomDataFromXlsWhereInput
  }


  /**
   * CustomDataFromXls findRaw
   */
  export type CustomDataFromXlsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CustomDataFromXls aggregateRaw
   */
  export type CustomDataFromXlsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CustomDataFromXls: findUniqueOrThrow
   */
  export type CustomDataFromXlsFindUniqueOrThrowArgs = CustomDataFromXlsFindUniqueArgsBase
      

  /**
   * CustomDataFromXls: findFirstOrThrow
   */
  export type CustomDataFromXlsFindFirstOrThrowArgs = CustomDataFromXlsFindFirstArgsBase
      

  /**
   * CustomDataFromXls without action
   */
  export type CustomDataFromXlsArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXls
     * 
    **/
    select?: CustomDataFromXlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsInclude | null
  }



  /**
   * Model CustomDataFromXlsMaster
   */


  export type AggregateCustomDataFromXlsMaster = {
    _count: CustomDataFromXlsMasterCountAggregateOutputType | null
    _min: CustomDataFromXlsMasterMinAggregateOutputType | null
    _max: CustomDataFromXlsMasterMaxAggregateOutputType | null
  }

  export type CustomDataFromXlsMasterMinAggregateOutputType = {
    id: string | null
    fileName: string | null
  }

  export type CustomDataFromXlsMasterMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
  }

  export type CustomDataFromXlsMasterCountAggregateOutputType = {
    id: number
    fileName: number
    _all: number
  }


  export type CustomDataFromXlsMasterMinAggregateInputType = {
    id?: true
    fileName?: true
  }

  export type CustomDataFromXlsMasterMaxAggregateInputType = {
    id?: true
    fileName?: true
  }

  export type CustomDataFromXlsMasterCountAggregateInputType = {
    id?: true
    fileName?: true
    _all?: true
  }

  export type CustomDataFromXlsMasterAggregateArgs = {
    /**
     * Filter which CustomDataFromXlsMaster to aggregate.
     * 
    **/
    where?: CustomDataFromXlsMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXlsMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomDataFromXlsMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXlsMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXlsMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomDataFromXlsMasters
    **/
    _count?: true | CustomDataFromXlsMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomDataFromXlsMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomDataFromXlsMasterMaxAggregateInputType
  }

  export type GetCustomDataFromXlsMasterAggregateType<T extends CustomDataFromXlsMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomDataFromXlsMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomDataFromXlsMaster[P]>
      : GetScalarType<T[P], AggregateCustomDataFromXlsMaster[P]>
  }




  export type CustomDataFromXlsMasterGroupByArgs = {
    where?: CustomDataFromXlsMasterWhereInput
    orderBy?: Enumerable<CustomDataFromXlsMasterOrderByWithAggregationInput>
    by: Array<CustomDataFromXlsMasterScalarFieldEnum>
    having?: CustomDataFromXlsMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomDataFromXlsMasterCountAggregateInputType | true
    _min?: CustomDataFromXlsMasterMinAggregateInputType
    _max?: CustomDataFromXlsMasterMaxAggregateInputType
  }


  export type CustomDataFromXlsMasterGroupByOutputType = {
    id: string
    fileName: string
    _count: CustomDataFromXlsMasterCountAggregateOutputType | null
    _min: CustomDataFromXlsMasterMinAggregateOutputType | null
    _max: CustomDataFromXlsMasterMaxAggregateOutputType | null
  }

  type GetCustomDataFromXlsMasterGroupByPayload<T extends CustomDataFromXlsMasterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomDataFromXlsMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomDataFromXlsMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomDataFromXlsMasterGroupByOutputType[P]>
            : GetScalarType<T[P], CustomDataFromXlsMasterGroupByOutputType[P]>
        }
      >
    >


  export type CustomDataFromXlsMasterSelect = {
    id?: boolean
    fileName?: boolean
    extendedData?: boolean | CustomDataFromXlsFindManyArgs
    _count?: boolean | CustomDataFromXlsMasterCountOutputTypeArgs
  }

  export type CustomDataFromXlsMasterInclude = {
    extendedData?: boolean | CustomDataFromXlsFindManyArgs
    _count?: boolean | CustomDataFromXlsMasterCountOutputTypeArgs
  }

  export type CustomDataFromXlsMasterGetPayload<
    S extends boolean | null | undefined | CustomDataFromXlsMasterArgs,
    U = keyof S
      > = S extends true
        ? CustomDataFromXlsMaster
    : S extends undefined
    ? never
    : S extends CustomDataFromXlsMasterArgs | CustomDataFromXlsMasterFindManyArgs
    ?'include' extends U
    ? CustomDataFromXlsMaster  & {
    [P in TrueKeys<S['include']>]:
        P extends 'extendedData' ? Array < CustomDataFromXlsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CustomDataFromXlsMasterCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'extendedData' ? Array < CustomDataFromXlsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CustomDataFromXlsMasterCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof CustomDataFromXlsMaster ? CustomDataFromXlsMaster[P] : never
  } 
    : CustomDataFromXlsMaster
  : CustomDataFromXlsMaster


  type CustomDataFromXlsMasterCountArgs = Merge<
    Omit<CustomDataFromXlsMasterFindManyArgs, 'select' | 'include'> & {
      select?: CustomDataFromXlsMasterCountAggregateInputType | true
    }
  >

  export interface CustomDataFromXlsMasterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CustomDataFromXlsMaster that matches the filter.
     * @param {CustomDataFromXlsMasterFindUniqueArgs} args - Arguments to find a CustomDataFromXlsMaster
     * @example
     * // Get one CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomDataFromXlsMasterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomDataFromXlsMasterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CustomDataFromXlsMaster'> extends True ? CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>> : CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster | null >, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T> | null >>

    /**
     * Find the first CustomDataFromXlsMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterFindFirstArgs} args - Arguments to find a CustomDataFromXlsMaster
     * @example
     * // Get one CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomDataFromXlsMasterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomDataFromXlsMasterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CustomDataFromXlsMaster'> extends True ? CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>> : CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster | null >, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T> | null >>

    /**
     * Find zero or more CustomDataFromXlsMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomDataFromXlsMasters
     * const customDataFromXlsMasters = await prisma.customDataFromXlsMaster.findMany()
     * 
     * // Get first 10 CustomDataFromXlsMasters
     * const customDataFromXlsMasters = await prisma.customDataFromXlsMaster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customDataFromXlsMasterWithIdOnly = await prisma.customDataFromXlsMaster.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomDataFromXlsMasterFindManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsMasterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CustomDataFromXlsMaster>>, PrismaPromise<Array<CustomDataFromXlsMasterGetPayload<T>>>>

    /**
     * Create a CustomDataFromXlsMaster.
     * @param {CustomDataFromXlsMasterCreateArgs} args - Arguments to create a CustomDataFromXlsMaster.
     * @example
     * // Create one CustomDataFromXlsMaster
     * const CustomDataFromXlsMaster = await prisma.customDataFromXlsMaster.create({
     *   data: {
     *     // ... data to create a CustomDataFromXlsMaster
     *   }
     * })
     * 
    **/
    create<T extends CustomDataFromXlsMasterCreateArgs>(
      args: SelectSubset<T, CustomDataFromXlsMasterCreateArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Create many CustomDataFromXlsMasters.
     *     @param {CustomDataFromXlsMasterCreateManyArgs} args - Arguments to create many CustomDataFromXlsMasters.
     *     @example
     *     // Create many CustomDataFromXlsMasters
     *     const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomDataFromXlsMasterCreateManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsMasterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CustomDataFromXlsMaster.
     * @param {CustomDataFromXlsMasterDeleteArgs} args - Arguments to delete one CustomDataFromXlsMaster.
     * @example
     * // Delete one CustomDataFromXlsMaster
     * const CustomDataFromXlsMaster = await prisma.customDataFromXlsMaster.delete({
     *   where: {
     *     // ... filter to delete one CustomDataFromXlsMaster
     *   }
     * })
     * 
    **/
    delete<T extends CustomDataFromXlsMasterDeleteArgs>(
      args: SelectSubset<T, CustomDataFromXlsMasterDeleteArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Update one CustomDataFromXlsMaster.
     * @param {CustomDataFromXlsMasterUpdateArgs} args - Arguments to update one CustomDataFromXlsMaster.
     * @example
     * // Update one CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomDataFromXlsMasterUpdateArgs>(
      args: SelectSubset<T, CustomDataFromXlsMasterUpdateArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Delete zero or more CustomDataFromXlsMasters.
     * @param {CustomDataFromXlsMasterDeleteManyArgs} args - Arguments to filter CustomDataFromXlsMasters to delete.
     * @example
     * // Delete a few CustomDataFromXlsMasters
     * const { count } = await prisma.customDataFromXlsMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomDataFromXlsMasterDeleteManyArgs>(
      args?: SelectSubset<T, CustomDataFromXlsMasterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomDataFromXlsMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomDataFromXlsMasters
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomDataFromXlsMasterUpdateManyArgs>(
      args: SelectSubset<T, CustomDataFromXlsMasterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomDataFromXlsMaster.
     * @param {CustomDataFromXlsMasterUpsertArgs} args - Arguments to update or create a CustomDataFromXlsMaster.
     * @example
     * // Update or create a CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.upsert({
     *   create: {
     *     // ... data to create a CustomDataFromXlsMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomDataFromXlsMaster we want to update
     *   }
     * })
    **/
    upsert<T extends CustomDataFromXlsMasterUpsertArgs>(
      args: SelectSubset<T, CustomDataFromXlsMasterUpsertArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Find zero or more CustomDataFromXlsMasters that matches the filter.
     * @param {CustomDataFromXlsMasterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CustomDataFromXlsMasterFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CustomDataFromXlsMaster.
     * @param {CustomDataFromXlsMasterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CustomDataFromXlsMasterAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one CustomDataFromXlsMaster that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CustomDataFromXlsMasterFindUniqueOrThrowArgs} args - Arguments to find a CustomDataFromXlsMaster
     * @example
     * // Get one CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomDataFromXlsMasterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomDataFromXlsMasterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Find the first CustomDataFromXlsMaster that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterFindFirstOrThrowArgs} args - Arguments to find a CustomDataFromXlsMaster
     * @example
     * // Get one CustomDataFromXlsMaster
     * const customDataFromXlsMaster = await prisma.customDataFromXlsMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomDataFromXlsMasterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomDataFromXlsMasterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMaster>, Prisma__CustomDataFromXlsMasterClient<CustomDataFromXlsMasterGetPayload<T>>>

    /**
     * Count the number of CustomDataFromXlsMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterCountArgs} args - Arguments to filter CustomDataFromXlsMasters to count.
     * @example
     * // Count the number of CustomDataFromXlsMasters
     * const count = await prisma.customDataFromXlsMaster.count({
     *   where: {
     *     // ... the filter for the CustomDataFromXlsMasters we want to count
     *   }
     * })
    **/
    count<T extends CustomDataFromXlsMasterCountArgs>(
      args?: Subset<T, CustomDataFromXlsMasterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomDataFromXlsMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomDataFromXlsMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomDataFromXlsMasterAggregateArgs>(args: Subset<T, CustomDataFromXlsMasterAggregateArgs>): PrismaPromise<GetCustomDataFromXlsMasterAggregateType<T>>

    /**
     * Group by CustomDataFromXlsMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomDataFromXlsMasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomDataFromXlsMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomDataFromXlsMasterGroupByArgs['orderBy'] }
        : { orderBy?: CustomDataFromXlsMasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomDataFromXlsMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomDataFromXlsMasterGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomDataFromXlsMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomDataFromXlsMasterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    extendedData<T extends CustomDataFromXlsFindManyArgs = {}>(args?: Subset<T, CustomDataFromXlsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CustomDataFromXls>>, PrismaPromise<Array<CustomDataFromXlsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CustomDataFromXlsMaster base type for findUnique actions
   */
  export type CustomDataFromXlsMasterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * Filter, which CustomDataFromXlsMaster to fetch.
     * 
    **/
    where: CustomDataFromXlsMasterWhereUniqueInput
  }

  /**
   * CustomDataFromXlsMaster: findUnique
   */
  export interface CustomDataFromXlsMasterFindUniqueArgs extends CustomDataFromXlsMasterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomDataFromXlsMaster base type for findFirst actions
   */
  export type CustomDataFromXlsMasterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * Filter, which CustomDataFromXlsMaster to fetch.
     * 
    **/
    where?: CustomDataFromXlsMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXlsMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomDataFromXlsMasters.
     * 
    **/
    cursor?: CustomDataFromXlsMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXlsMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXlsMasters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomDataFromXlsMasters.
     * 
    **/
    distinct?: Enumerable<CustomDataFromXlsMasterScalarFieldEnum>
  }

  /**
   * CustomDataFromXlsMaster: findFirst
   */
  export interface CustomDataFromXlsMasterFindFirstArgs extends CustomDataFromXlsMasterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomDataFromXlsMaster findMany
   */
  export type CustomDataFromXlsMasterFindManyArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * Filter, which CustomDataFromXlsMasters to fetch.
     * 
    **/
    where?: CustomDataFromXlsMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomDataFromXlsMasters to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomDataFromXlsMasterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomDataFromXlsMasters.
     * 
    **/
    cursor?: CustomDataFromXlsMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomDataFromXlsMasters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomDataFromXlsMasters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomDataFromXlsMasterScalarFieldEnum>
  }


  /**
   * CustomDataFromXlsMaster create
   */
  export type CustomDataFromXlsMasterCreateArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * The data needed to create a CustomDataFromXlsMaster.
     * 
    **/
    data: XOR<CustomDataFromXlsMasterCreateInput, CustomDataFromXlsMasterUncheckedCreateInput>
  }


  /**
   * CustomDataFromXlsMaster createMany
   */
  export type CustomDataFromXlsMasterCreateManyArgs = {
    /**
     * The data used to create many CustomDataFromXlsMasters.
     * 
    **/
    data: Enumerable<CustomDataFromXlsMasterCreateManyInput>
  }


  /**
   * CustomDataFromXlsMaster update
   */
  export type CustomDataFromXlsMasterUpdateArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * The data needed to update a CustomDataFromXlsMaster.
     * 
    **/
    data: XOR<CustomDataFromXlsMasterUpdateInput, CustomDataFromXlsMasterUncheckedUpdateInput>
    /**
     * Choose, which CustomDataFromXlsMaster to update.
     * 
    **/
    where: CustomDataFromXlsMasterWhereUniqueInput
  }


  /**
   * CustomDataFromXlsMaster updateMany
   */
  export type CustomDataFromXlsMasterUpdateManyArgs = {
    /**
     * The data used to update CustomDataFromXlsMasters.
     * 
    **/
    data: XOR<CustomDataFromXlsMasterUpdateManyMutationInput, CustomDataFromXlsMasterUncheckedUpdateManyInput>
    /**
     * Filter which CustomDataFromXlsMasters to update
     * 
    **/
    where?: CustomDataFromXlsMasterWhereInput
  }


  /**
   * CustomDataFromXlsMaster upsert
   */
  export type CustomDataFromXlsMasterUpsertArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * The filter to search for the CustomDataFromXlsMaster to update in case it exists.
     * 
    **/
    where: CustomDataFromXlsMasterWhereUniqueInput
    /**
     * In case the CustomDataFromXlsMaster found by the `where` argument doesn't exist, create a new CustomDataFromXlsMaster with this data.
     * 
    **/
    create: XOR<CustomDataFromXlsMasterCreateInput, CustomDataFromXlsMasterUncheckedCreateInput>
    /**
     * In case the CustomDataFromXlsMaster was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomDataFromXlsMasterUpdateInput, CustomDataFromXlsMasterUncheckedUpdateInput>
  }


  /**
   * CustomDataFromXlsMaster delete
   */
  export type CustomDataFromXlsMasterDeleteArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
    /**
     * Filter which CustomDataFromXlsMaster to delete.
     * 
    **/
    where: CustomDataFromXlsMasterWhereUniqueInput
  }


  /**
   * CustomDataFromXlsMaster deleteMany
   */
  export type CustomDataFromXlsMasterDeleteManyArgs = {
    /**
     * Filter which CustomDataFromXlsMasters to delete
     * 
    **/
    where?: CustomDataFromXlsMasterWhereInput
  }


  /**
   * CustomDataFromXlsMaster findRaw
   */
  export type CustomDataFromXlsMasterFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CustomDataFromXlsMaster aggregateRaw
   */
  export type CustomDataFromXlsMasterAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * CustomDataFromXlsMaster: findUniqueOrThrow
   */
  export type CustomDataFromXlsMasterFindUniqueOrThrowArgs = CustomDataFromXlsMasterFindUniqueArgsBase
      

  /**
   * CustomDataFromXlsMaster: findFirstOrThrow
   */
  export type CustomDataFromXlsMasterFindFirstOrThrowArgs = CustomDataFromXlsMasterFindFirstArgsBase
      

  /**
   * CustomDataFromXlsMaster without action
   */
  export type CustomDataFromXlsMasterArgs = {
    /**
     * Select specific fields to fetch from the CustomDataFromXlsMaster
     * 
    **/
    select?: CustomDataFromXlsMasterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomDataFromXlsMasterInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ACCESSS_CONTROL_MasterScalarFieldEnum: {
    id: 'id',
    controllerName: 'controllerName',
    userId: 'userId'
  };

  export type ACCESSS_CONTROL_MasterScalarFieldEnum = (typeof ACCESSS_CONTROL_MasterScalarFieldEnum)[keyof typeof ACCESSS_CONTROL_MasterScalarFieldEnum]


  export const CustomDataFromXlsMasterScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName'
  };

  export type CustomDataFromXlsMasterScalarFieldEnum = (typeof CustomDataFromXlsMasterScalarFieldEnum)[keyof typeof CustomDataFromXlsMasterScalarFieldEnum]


  export const CustomDataFromXlsScalarFieldEnum: {
    id: 'id',
    extendedXlsData: 'extendedXlsData',
    xlsdataID: 'xlsdataID'
  };

  export type CustomDataFromXlsScalarFieldEnum = (typeof CustomDataFromXlsScalarFieldEnum)[keyof typeof CustomDataFromXlsScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    productId: 'productId'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductMasterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    price: 'price',
    quantity: 'quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductMasterScalarFieldEnum = (typeof ProductMasterScalarFieldEnum)[keyof typeof ProductMasterScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TodoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    completed: 'completed',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const UserMasterScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    userType: 'userType',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserMasterScalarFieldEnum = (typeof UserMasterScalarFieldEnum)[keyof typeof UserMasterScalarFieldEnum]


  export const User_Permission_MasterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    read: 'read',
    write: 'write',
    modify: 'modify',
    delete: 'delete',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_Permission_MasterScalarFieldEnum = (typeof User_Permission_MasterScalarFieldEnum)[keyof typeof User_Permission_MasterScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ACCESSS_CONTROL_MasterWhereInput = {
    AND?: Enumerable<ACCESSS_CONTROL_MasterWhereInput>
    OR?: Enumerable<ACCESSS_CONTROL_MasterWhereInput>
    NOT?: Enumerable<ACCESSS_CONTROL_MasterWhereInput>
    id?: StringFilter | string
    controllerName?: StringFilter | string
    user?: XOR<UserMasterRelationFilter, UserMasterWhereInput>
    userId?: StringFilter | string
  }

  export type ACCESSS_CONTROL_MasterOrderByWithRelationInput = {
    id?: SortOrder
    controllerName?: SortOrder
    user?: UserMasterOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ACCESSS_CONTROL_MasterWhereUniqueInput = {
    id?: string
    controllerName?: string
  }

  export type ACCESSS_CONTROL_MasterOrderByWithAggregationInput = {
    id?: SortOrder
    controllerName?: SortOrder
    userId?: SortOrder
    _count?: ACCESSS_CONTROL_MasterCountOrderByAggregateInput
    _max?: ACCESSS_CONTROL_MasterMaxOrderByAggregateInput
    _min?: ACCESSS_CONTROL_MasterMinOrderByAggregateInput
  }

  export type ACCESSS_CONTROL_MasterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereWithAggregatesInput>
    OR?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    controllerName?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserMasterWhereInput = {
    AND?: Enumerable<UserMasterWhereInput>
    OR?: Enumerable<UserMasterWhereInput>
    NOT?: Enumerable<UserMasterWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    userType?: StringFilter | string
    access_controls?: ACCESSS_CONTROL_MasterListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserMasterOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    access_controls?: ACCESSS_CONTROL_MasterOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMasterWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserMasterOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserMasterCountOrderByAggregateInput
    _max?: UserMasterMaxOrderByAggregateInput
    _min?: UserMasterMinOrderByAggregateInput
  }

  export type UserMasterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserMasterScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserMasterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserMasterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    userType?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type User_Permission_MasterWhereInput = {
    AND?: Enumerable<User_Permission_MasterWhereInput>
    OR?: Enumerable<User_Permission_MasterWhereInput>
    NOT?: Enumerable<User_Permission_MasterWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    read?: BoolFilter | boolean
    write?: BoolFilter | boolean
    modify?: BoolFilter | boolean
    delete?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type User_Permission_MasterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    read?: SortOrder
    write?: SortOrder
    modify?: SortOrder
    delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_Permission_MasterWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type User_Permission_MasterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    read?: SortOrder
    write?: SortOrder
    modify?: SortOrder
    delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: User_Permission_MasterCountOrderByAggregateInput
    _max?: User_Permission_MasterMaxOrderByAggregateInput
    _min?: User_Permission_MasterMinOrderByAggregateInput
  }

  export type User_Permission_MasterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_Permission_MasterScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_Permission_MasterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_Permission_MasterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    read?: BoolWithAggregatesFilter | boolean
    write?: BoolWithAggregatesFilter | boolean
    modify?: BoolWithAggregatesFilter | boolean
    delete?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TodoWhereInput = {
    AND?: Enumerable<TodoWhereInput>
    OR?: Enumerable<TodoWhereInput>
    NOT?: Enumerable<TodoWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    title?: StringFilter | string
    completed?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TodoWhereUniqueInput = {
    id?: string
  }

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TodoScalarWhereWithAggregatesInput>
    OR?: Enumerable<TodoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TodoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    completed?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductMasterWhereInput = {
    AND?: Enumerable<ProductMasterWhereInput>
    OR?: Enumerable<ProductMasterWhereInput>
    NOT?: Enumerable<ProductMasterWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    name?: StringFilter | string
    price?: IntFilter | number
    quantity?: IntFilter | number
    product_img?: ProductImageListRelationFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ProductMasterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    product_img?: ProductImageOrderByRelationAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMasterWhereUniqueInput = {
    id?: string
  }

  export type ProductMasterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductMasterCountOrderByAggregateInput
    _avg?: ProductMasterAvgOrderByAggregateInput
    _max?: ProductMasterMaxOrderByAggregateInput
    _min?: ProductMasterMinOrderByAggregateInput
    _sum?: ProductMasterSumOrderByAggregateInput
  }

  export type ProductMasterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductMasterScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductMasterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductMasterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: Enumerable<ProductImageWhereInput>
    OR?: Enumerable<ProductImageWhereInput>
    NOT?: Enumerable<ProductImageWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    product?: XOR<ProductMasterRelationFilter, ProductMasterWhereInput>
    productId?: StringFilter | string
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    product?: ProductMasterOrderByWithRelationInput
    productId?: SortOrder
  }

  export type ProductImageWhereUniqueInput = {
    id?: string
    name?: string
    url?: string
  }

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
  }

  export type CustomDataFromXlsWhereInput = {
    AND?: Enumerable<CustomDataFromXlsWhereInput>
    OR?: Enumerable<CustomDataFromXlsWhereInput>
    NOT?: Enumerable<CustomDataFromXlsWhereInput>
    id?: StringFilter | string
    extendedXlsData?: JsonNullableFilter
    xlsdata?: XOR<CustomDataFromXlsMasterRelationFilter, CustomDataFromXlsMasterWhereInput>
    xlsdataID?: StringFilter | string
  }

  export type CustomDataFromXlsOrderByWithRelationInput = {
    id?: SortOrder
    extendedXlsData?: SortOrder
    xlsdata?: CustomDataFromXlsMasterOrderByWithRelationInput
    xlsdataID?: SortOrder
  }

  export type CustomDataFromXlsWhereUniqueInput = {
    id?: string
  }

  export type CustomDataFromXlsOrderByWithAggregationInput = {
    id?: SortOrder
    extendedXlsData?: SortOrder
    xlsdataID?: SortOrder
    _count?: CustomDataFromXlsCountOrderByAggregateInput
    _max?: CustomDataFromXlsMaxOrderByAggregateInput
    _min?: CustomDataFromXlsMinOrderByAggregateInput
  }

  export type CustomDataFromXlsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomDataFromXlsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomDataFromXlsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomDataFromXlsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    extendedXlsData?: JsonNullableWithAggregatesFilter
    xlsdataID?: StringWithAggregatesFilter | string
  }

  export type CustomDataFromXlsMasterWhereInput = {
    AND?: Enumerable<CustomDataFromXlsMasterWhereInput>
    OR?: Enumerable<CustomDataFromXlsMasterWhereInput>
    NOT?: Enumerable<CustomDataFromXlsMasterWhereInput>
    id?: StringFilter | string
    fileName?: StringFilter | string
    extendedData?: CustomDataFromXlsListRelationFilter
  }

  export type CustomDataFromXlsMasterOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    extendedData?: CustomDataFromXlsOrderByRelationAggregateInput
  }

  export type CustomDataFromXlsMasterWhereUniqueInput = {
    id?: string
  }

  export type CustomDataFromXlsMasterOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    _count?: CustomDataFromXlsMasterCountOrderByAggregateInput
    _max?: CustomDataFromXlsMasterMaxOrderByAggregateInput
    _min?: CustomDataFromXlsMasterMinOrderByAggregateInput
  }

  export type CustomDataFromXlsMasterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomDataFromXlsMasterScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomDataFromXlsMasterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomDataFromXlsMasterScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    fileName?: StringWithAggregatesFilter | string
  }

  export type ACCESSS_CONTROL_MasterCreateInput = {
    id?: string
    controllerName: string
    user: UserMasterCreateNestedOneWithoutAccess_controlsInput
  }

  export type ACCESSS_CONTROL_MasterUncheckedCreateInput = {
    id?: string
    controllerName: string
    userId: string
  }

  export type ACCESSS_CONTROL_MasterUpdateInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
    user?: UserMasterUpdateOneRequiredWithoutAccess_controlsNestedInput
  }

  export type ACCESSS_CONTROL_MasterUncheckedUpdateInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ACCESSS_CONTROL_MasterCreateManyInput = {
    id?: string
    controllerName: string
    userId: string
  }

  export type ACCESSS_CONTROL_MasterUpdateManyMutationInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
  }

  export type ACCESSS_CONTROL_MasterUncheckedUpdateManyInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMasterCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    access_controls?: ACCESSS_CONTROL_MasterCreateNestedManyWithoutUserInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserMasterUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    access_controls?: ACCESSS_CONTROL_MasterUncheckedCreateNestedManyWithoutUserInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserMasterUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    access_controls?: ACCESSS_CONTROL_MasterUpdateManyWithoutUserNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMasterUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    access_controls?: ACCESSS_CONTROL_MasterUncheckedUpdateManyWithoutUserNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMasterCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserMasterUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMasterUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_Permission_MasterCreateInput = {
    id?: string
    userId: string
    read: boolean
    write: boolean
    modify: boolean
    delete: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_Permission_MasterUncheckedCreateInput = {
    id?: string
    userId: string
    read: boolean
    write: boolean
    modify: boolean
    delete: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_Permission_MasterUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    modify?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_Permission_MasterUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    modify?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_Permission_MasterCreateManyInput = {
    id?: string
    userId: string
    read: boolean
    write: boolean
    modify: boolean
    delete: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_Permission_MasterUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    modify?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_Permission_MasterUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    modify?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateInput = {
    id?: string
    userId: string
    title: string
    completed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TodoUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    completed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TodoUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyInput = {
    id?: string
    userId: string
    title: string
    completed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TodoUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMasterCreateInput = {
    id?: string
    userId: string
    name: string
    price: number
    quantity: number
    product_img?: ProductImageCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductMasterUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    price: number
    quantity: number
    product_img?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductMasterUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product_img?: ProductImageUpdateManyWithoutProductNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMasterUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product_img?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMasterCreateManyInput = {
    id?: string
    userId: string
    name: string
    price: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductMasterUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMasterUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    id?: string
    name: string
    url: string
    product: ProductMasterCreateNestedOneWithoutProduct_imgInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    productId: string
  }

  export type ProductImageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    product?: ProductMasterUpdateOneRequiredWithoutProduct_imgNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyInput = {
    id?: string
    name: string
    url: string
    productId: string
  }

  export type ProductImageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsCreateInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
    xlsdata: CustomDataFromXlsMasterCreateNestedOneWithoutExtendedDataInput
  }

  export type CustomDataFromXlsUncheckedCreateInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
    xlsdataID: string
  }

  export type CustomDataFromXlsUpdateInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
    xlsdata?: CustomDataFromXlsMasterUpdateOneRequiredWithoutExtendedDataNestedInput
  }

  export type CustomDataFromXlsUncheckedUpdateInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
    xlsdataID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsCreateManyInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
    xlsdataID: string
  }

  export type CustomDataFromXlsUpdateManyMutationInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
  }

  export type CustomDataFromXlsUncheckedUpdateManyInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
    xlsdataID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsMasterCreateInput = {
    id?: string
    fileName: string
    extendedData?: CustomDataFromXlsCreateNestedManyWithoutXlsdataInput
  }

  export type CustomDataFromXlsMasterUncheckedCreateInput = {
    id?: string
    fileName: string
    extendedData?: CustomDataFromXlsUncheckedCreateNestedManyWithoutXlsdataInput
  }

  export type CustomDataFromXlsMasterUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    extendedData?: CustomDataFromXlsUpdateManyWithoutXlsdataNestedInput
  }

  export type CustomDataFromXlsMasterUncheckedUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    extendedData?: CustomDataFromXlsUncheckedUpdateManyWithoutXlsdataNestedInput
  }

  export type CustomDataFromXlsMasterCreateManyInput = {
    id?: string
    fileName: string
  }

  export type CustomDataFromXlsMasterUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsMasterUncheckedUpdateManyInput = {
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UserMasterRelationFilter = {
    is?: UserMasterWhereInput
    isNot?: UserMasterWhereInput
  }

  export type ACCESSS_CONTROL_MasterCountOrderByAggregateInput = {
    id?: SortOrder
    controllerName?: SortOrder
    userId?: SortOrder
  }

  export type ACCESSS_CONTROL_MasterMaxOrderByAggregateInput = {
    id?: SortOrder
    controllerName?: SortOrder
    userId?: SortOrder
  }

  export type ACCESSS_CONTROL_MasterMinOrderByAggregateInput = {
    id?: SortOrder
    controllerName?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ACCESSS_CONTROL_MasterListRelationFilter = {
    every?: ACCESSS_CONTROL_MasterWhereInput
    some?: ACCESSS_CONTROL_MasterWhereInput
    none?: ACCESSS_CONTROL_MasterWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ACCESSS_CONTROL_MasterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMasterCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMasterMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMasterMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type User_Permission_MasterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    read?: SortOrder
    write?: SortOrder
    modify?: SortOrder
    delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_Permission_MasterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    read?: SortOrder
    write?: SortOrder
    modify?: SortOrder
    delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_Permission_MasterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    read?: SortOrder
    write?: SortOrder
    modify?: SortOrder
    delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMasterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMasterAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMasterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMasterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMasterSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type ProductMasterRelationFilter = {
    is?: ProductMasterWhereInput
    isNot?: ProductMasterWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type CustomDataFromXlsMasterRelationFilter = {
    is?: CustomDataFromXlsMasterWhereInput
    isNot?: CustomDataFromXlsMasterWhereInput
  }

  export type CustomDataFromXlsCountOrderByAggregateInput = {
    id?: SortOrder
    extendedXlsData?: SortOrder
    xlsdataID?: SortOrder
  }

  export type CustomDataFromXlsMaxOrderByAggregateInput = {
    id?: SortOrder
    xlsdataID?: SortOrder
  }

  export type CustomDataFromXlsMinOrderByAggregateInput = {
    id?: SortOrder
    xlsdataID?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
    isSet?: boolean
  }

  export type CustomDataFromXlsListRelationFilter = {
    every?: CustomDataFromXlsWhereInput
    some?: CustomDataFromXlsWhereInput
    none?: CustomDataFromXlsWhereInput
  }

  export type CustomDataFromXlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomDataFromXlsMasterCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
  }

  export type CustomDataFromXlsMasterMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
  }

  export type CustomDataFromXlsMasterMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
  }

  export type UserMasterCreateNestedOneWithoutAccess_controlsInput = {
    create?: XOR<UserMasterCreateWithoutAccess_controlsInput, UserMasterUncheckedCreateWithoutAccess_controlsInput>
    connectOrCreate?: UserMasterCreateOrConnectWithoutAccess_controlsInput
    connect?: UserMasterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserMasterUpdateOneRequiredWithoutAccess_controlsNestedInput = {
    create?: XOR<UserMasterCreateWithoutAccess_controlsInput, UserMasterUncheckedCreateWithoutAccess_controlsInput>
    connectOrCreate?: UserMasterCreateOrConnectWithoutAccess_controlsInput
    upsert?: UserMasterUpsertWithoutAccess_controlsInput
    connect?: UserMasterWhereUniqueInput
    update?: XOR<UserMasterUpdateWithoutAccess_controlsInput, UserMasterUncheckedUpdateWithoutAccess_controlsInput>
  }

  export type ACCESSS_CONTROL_MasterCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ACCESSS_CONTROL_MasterCreateWithoutUserInput>, Enumerable<ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ACCESSS_CONTROL_MasterCreateOrConnectWithoutUserInput>
    createMany?: ACCESSS_CONTROL_MasterCreateManyUserInputEnvelope
    connect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
  }

  export type ACCESSS_CONTROL_MasterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ACCESSS_CONTROL_MasterCreateWithoutUserInput>, Enumerable<ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ACCESSS_CONTROL_MasterCreateOrConnectWithoutUserInput>
    createMany?: ACCESSS_CONTROL_MasterCreateManyUserInputEnvelope
    connect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
  }

  export type ACCESSS_CONTROL_MasterUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ACCESSS_CONTROL_MasterCreateWithoutUserInput>, Enumerable<ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ACCESSS_CONTROL_MasterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ACCESSS_CONTROL_MasterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ACCESSS_CONTROL_MasterCreateManyUserInputEnvelope
    set?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    disconnect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    delete?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    connect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    update?: Enumerable<ACCESSS_CONTROL_MasterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ACCESSS_CONTROL_MasterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ACCESSS_CONTROL_MasterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ACCESSS_CONTROL_MasterCreateWithoutUserInput>, Enumerable<ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ACCESSS_CONTROL_MasterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ACCESSS_CONTROL_MasterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ACCESSS_CONTROL_MasterCreateManyUserInputEnvelope
    set?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    disconnect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    delete?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    connect?: Enumerable<ACCESSS_CONTROL_MasterWhereUniqueInput>
    update?: Enumerable<ACCESSS_CONTROL_MasterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ACCESSS_CONTROL_MasterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductImageCreateWithoutProductInput>, Enumerable<ProductImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImageCreateOrConnectWithoutProductInput>
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: Enumerable<ProductImageWhereUniqueInput>
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductImageCreateWithoutProductInput>, Enumerable<ProductImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImageCreateOrConnectWithoutProductInput>
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: Enumerable<ProductImageWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductImageCreateWithoutProductInput>, Enumerable<ProductImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImageCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductImageUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: Enumerable<ProductImageWhereUniqueInput>
    disconnect?: Enumerable<ProductImageWhereUniqueInput>
    delete?: Enumerable<ProductImageWhereUniqueInput>
    connect?: Enumerable<ProductImageWhereUniqueInput>
    update?: Enumerable<ProductImageUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductImageUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductImageScalarWhereInput>
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductImageCreateWithoutProductInput>, Enumerable<ProductImageUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductImageCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductImageUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: Enumerable<ProductImageWhereUniqueInput>
    disconnect?: Enumerable<ProductImageWhereUniqueInput>
    delete?: Enumerable<ProductImageWhereUniqueInput>
    connect?: Enumerable<ProductImageWhereUniqueInput>
    update?: Enumerable<ProductImageUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductImageUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductImageScalarWhereInput>
  }

  export type ProductMasterCreateNestedOneWithoutProduct_imgInput = {
    create?: XOR<ProductMasterCreateWithoutProduct_imgInput, ProductMasterUncheckedCreateWithoutProduct_imgInput>
    connectOrCreate?: ProductMasterCreateOrConnectWithoutProduct_imgInput
    connect?: ProductMasterWhereUniqueInput
  }

  export type ProductMasterUpdateOneRequiredWithoutProduct_imgNestedInput = {
    create?: XOR<ProductMasterCreateWithoutProduct_imgInput, ProductMasterUncheckedCreateWithoutProduct_imgInput>
    connectOrCreate?: ProductMasterCreateOrConnectWithoutProduct_imgInput
    upsert?: ProductMasterUpsertWithoutProduct_imgInput
    connect?: ProductMasterWhereUniqueInput
    update?: XOR<ProductMasterUpdateWithoutProduct_imgInput, ProductMasterUncheckedUpdateWithoutProduct_imgInput>
  }

  export type CustomDataFromXlsMasterCreateNestedOneWithoutExtendedDataInput = {
    create?: XOR<CustomDataFromXlsMasterCreateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedCreateWithoutExtendedDataInput>
    connectOrCreate?: CustomDataFromXlsMasterCreateOrConnectWithoutExtendedDataInput
    connect?: CustomDataFromXlsMasterWhereUniqueInput
  }

  export type CustomDataFromXlsMasterUpdateOneRequiredWithoutExtendedDataNestedInput = {
    create?: XOR<CustomDataFromXlsMasterCreateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedCreateWithoutExtendedDataInput>
    connectOrCreate?: CustomDataFromXlsMasterCreateOrConnectWithoutExtendedDataInput
    upsert?: CustomDataFromXlsMasterUpsertWithoutExtendedDataInput
    connect?: CustomDataFromXlsMasterWhereUniqueInput
    update?: XOR<CustomDataFromXlsMasterUpdateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedUpdateWithoutExtendedDataInput>
  }

  export type CustomDataFromXlsCreateNestedManyWithoutXlsdataInput = {
    create?: XOR<Enumerable<CustomDataFromXlsCreateWithoutXlsdataInput>, Enumerable<CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>>
    connectOrCreate?: Enumerable<CustomDataFromXlsCreateOrConnectWithoutXlsdataInput>
    createMany?: CustomDataFromXlsCreateManyXlsdataInputEnvelope
    connect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
  }

  export type CustomDataFromXlsUncheckedCreateNestedManyWithoutXlsdataInput = {
    create?: XOR<Enumerable<CustomDataFromXlsCreateWithoutXlsdataInput>, Enumerable<CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>>
    connectOrCreate?: Enumerable<CustomDataFromXlsCreateOrConnectWithoutXlsdataInput>
    createMany?: CustomDataFromXlsCreateManyXlsdataInputEnvelope
    connect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
  }

  export type CustomDataFromXlsUpdateManyWithoutXlsdataNestedInput = {
    create?: XOR<Enumerable<CustomDataFromXlsCreateWithoutXlsdataInput>, Enumerable<CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>>
    connectOrCreate?: Enumerable<CustomDataFromXlsCreateOrConnectWithoutXlsdataInput>
    upsert?: Enumerable<CustomDataFromXlsUpsertWithWhereUniqueWithoutXlsdataInput>
    createMany?: CustomDataFromXlsCreateManyXlsdataInputEnvelope
    set?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    disconnect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    delete?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    connect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    update?: Enumerable<CustomDataFromXlsUpdateWithWhereUniqueWithoutXlsdataInput>
    updateMany?: Enumerable<CustomDataFromXlsUpdateManyWithWhereWithoutXlsdataInput>
    deleteMany?: Enumerable<CustomDataFromXlsScalarWhereInput>
  }

  export type CustomDataFromXlsUncheckedUpdateManyWithoutXlsdataNestedInput = {
    create?: XOR<Enumerable<CustomDataFromXlsCreateWithoutXlsdataInput>, Enumerable<CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>>
    connectOrCreate?: Enumerable<CustomDataFromXlsCreateOrConnectWithoutXlsdataInput>
    upsert?: Enumerable<CustomDataFromXlsUpsertWithWhereUniqueWithoutXlsdataInput>
    createMany?: CustomDataFromXlsCreateManyXlsdataInputEnvelope
    set?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    disconnect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    delete?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    connect?: Enumerable<CustomDataFromXlsWhereUniqueInput>
    update?: Enumerable<CustomDataFromXlsUpdateWithWhereUniqueWithoutXlsdataInput>
    updateMany?: Enumerable<CustomDataFromXlsUpdateManyWithWhereWithoutXlsdataInput>
    deleteMany?: Enumerable<CustomDataFromXlsScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type UserMasterCreateWithoutAccess_controlsInput = {
    id?: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserMasterUncheckedCreateWithoutAccess_controlsInput = {
    id?: string
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    userType: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserMasterCreateOrConnectWithoutAccess_controlsInput = {
    where: UserMasterWhereUniqueInput
    create: XOR<UserMasterCreateWithoutAccess_controlsInput, UserMasterUncheckedCreateWithoutAccess_controlsInput>
  }

  export type UserMasterUpsertWithoutAccess_controlsInput = {
    update: XOR<UserMasterUpdateWithoutAccess_controlsInput, UserMasterUncheckedUpdateWithoutAccess_controlsInput>
    create: XOR<UserMasterCreateWithoutAccess_controlsInput, UserMasterUncheckedCreateWithoutAccess_controlsInput>
  }

  export type UserMasterUpdateWithoutAccess_controlsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMasterUncheckedUpdateWithoutAccess_controlsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ACCESSS_CONTROL_MasterCreateWithoutUserInput = {
    id?: string
    controllerName: string
  }

  export type ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput = {
    id?: string
    controllerName: string
  }

  export type ACCESSS_CONTROL_MasterCreateOrConnectWithoutUserInput = {
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
    create: XOR<ACCESSS_CONTROL_MasterCreateWithoutUserInput, ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>
  }

  export type ACCESSS_CONTROL_MasterCreateManyUserInputEnvelope = {
    data: Enumerable<ACCESSS_CONTROL_MasterCreateManyUserInput>
  }

  export type ACCESSS_CONTROL_MasterUpsertWithWhereUniqueWithoutUserInput = {
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
    update: XOR<ACCESSS_CONTROL_MasterUpdateWithoutUserInput, ACCESSS_CONTROL_MasterUncheckedUpdateWithoutUserInput>
    create: XOR<ACCESSS_CONTROL_MasterCreateWithoutUserInput, ACCESSS_CONTROL_MasterUncheckedCreateWithoutUserInput>
  }

  export type ACCESSS_CONTROL_MasterUpdateWithWhereUniqueWithoutUserInput = {
    where: ACCESSS_CONTROL_MasterWhereUniqueInput
    data: XOR<ACCESSS_CONTROL_MasterUpdateWithoutUserInput, ACCESSS_CONTROL_MasterUncheckedUpdateWithoutUserInput>
  }

  export type ACCESSS_CONTROL_MasterUpdateManyWithWhereWithoutUserInput = {
    where: ACCESSS_CONTROL_MasterScalarWhereInput
    data: XOR<ACCESSS_CONTROL_MasterUpdateManyMutationInput, ACCESSS_CONTROL_MasterUncheckedUpdateManyWithoutAccess_controlsInput>
  }

  export type ACCESSS_CONTROL_MasterScalarWhereInput = {
    AND?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereInput>
    OR?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereInput>
    NOT?: Enumerable<ACCESSS_CONTROL_MasterScalarWhereInput>
    id?: StringFilter | string
    controllerName?: StringFilter | string
    userId?: StringFilter | string
  }

  export type ProductImageCreateWithoutProductInput = {
    id?: string
    name: string
    url: string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    url: string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: Enumerable<ProductImageCreateManyProductInput>
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProduct_imgInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: Enumerable<ProductImageScalarWhereInput>
    OR?: Enumerable<ProductImageScalarWhereInput>
    NOT?: Enumerable<ProductImageScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    productId?: StringFilter | string
  }

  export type ProductMasterCreateWithoutProduct_imgInput = {
    id?: string
    userId: string
    name: string
    price: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductMasterUncheckedCreateWithoutProduct_imgInput = {
    id?: string
    userId: string
    name: string
    price: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductMasterCreateOrConnectWithoutProduct_imgInput = {
    where: ProductMasterWhereUniqueInput
    create: XOR<ProductMasterCreateWithoutProduct_imgInput, ProductMasterUncheckedCreateWithoutProduct_imgInput>
  }

  export type ProductMasterUpsertWithoutProduct_imgInput = {
    update: XOR<ProductMasterUpdateWithoutProduct_imgInput, ProductMasterUncheckedUpdateWithoutProduct_imgInput>
    create: XOR<ProductMasterCreateWithoutProduct_imgInput, ProductMasterUncheckedCreateWithoutProduct_imgInput>
  }

  export type ProductMasterUpdateWithoutProduct_imgInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMasterUncheckedUpdateWithoutProduct_imgInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomDataFromXlsMasterCreateWithoutExtendedDataInput = {
    id?: string
    fileName: string
  }

  export type CustomDataFromXlsMasterUncheckedCreateWithoutExtendedDataInput = {
    id?: string
    fileName: string
  }

  export type CustomDataFromXlsMasterCreateOrConnectWithoutExtendedDataInput = {
    where: CustomDataFromXlsMasterWhereUniqueInput
    create: XOR<CustomDataFromXlsMasterCreateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedCreateWithoutExtendedDataInput>
  }

  export type CustomDataFromXlsMasterUpsertWithoutExtendedDataInput = {
    update: XOR<CustomDataFromXlsMasterUpdateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedUpdateWithoutExtendedDataInput>
    create: XOR<CustomDataFromXlsMasterCreateWithoutExtendedDataInput, CustomDataFromXlsMasterUncheckedCreateWithoutExtendedDataInput>
  }

  export type CustomDataFromXlsMasterUpdateWithoutExtendedDataInput = {
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsMasterUncheckedUpdateWithoutExtendedDataInput = {
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsCreateWithoutXlsdataInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
  }

  export type CustomDataFromXlsUncheckedCreateWithoutXlsdataInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
  }

  export type CustomDataFromXlsCreateOrConnectWithoutXlsdataInput = {
    where: CustomDataFromXlsWhereUniqueInput
    create: XOR<CustomDataFromXlsCreateWithoutXlsdataInput, CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>
  }

  export type CustomDataFromXlsCreateManyXlsdataInputEnvelope = {
    data: Enumerable<CustomDataFromXlsCreateManyXlsdataInput>
  }

  export type CustomDataFromXlsUpsertWithWhereUniqueWithoutXlsdataInput = {
    where: CustomDataFromXlsWhereUniqueInput
    update: XOR<CustomDataFromXlsUpdateWithoutXlsdataInput, CustomDataFromXlsUncheckedUpdateWithoutXlsdataInput>
    create: XOR<CustomDataFromXlsCreateWithoutXlsdataInput, CustomDataFromXlsUncheckedCreateWithoutXlsdataInput>
  }

  export type CustomDataFromXlsUpdateWithWhereUniqueWithoutXlsdataInput = {
    where: CustomDataFromXlsWhereUniqueInput
    data: XOR<CustomDataFromXlsUpdateWithoutXlsdataInput, CustomDataFromXlsUncheckedUpdateWithoutXlsdataInput>
  }

  export type CustomDataFromXlsUpdateManyWithWhereWithoutXlsdataInput = {
    where: CustomDataFromXlsScalarWhereInput
    data: XOR<CustomDataFromXlsUpdateManyMutationInput, CustomDataFromXlsUncheckedUpdateManyWithoutExtendedDataInput>
  }

  export type CustomDataFromXlsScalarWhereInput = {
    AND?: Enumerable<CustomDataFromXlsScalarWhereInput>
    OR?: Enumerable<CustomDataFromXlsScalarWhereInput>
    NOT?: Enumerable<CustomDataFromXlsScalarWhereInput>
    id?: StringFilter | string
    extendedXlsData?: JsonNullableFilter
    xlsdataID?: StringFilter | string
  }

  export type ACCESSS_CONTROL_MasterCreateManyUserInput = {
    id?: string
    controllerName: string
  }

  export type ACCESSS_CONTROL_MasterUpdateWithoutUserInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
  }

  export type ACCESSS_CONTROL_MasterUncheckedUpdateWithoutUserInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
  }

  export type ACCESSS_CONTROL_MasterUncheckedUpdateManyWithoutAccess_controlsInput = {
    controllerName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyProductInput = {
    id?: string
    name: string
    url: string
  }

  export type ProductImageUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProduct_imgInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CustomDataFromXlsCreateManyXlsdataInput = {
    id?: string
    extendedXlsData?: InputJsonValue | null
  }

  export type CustomDataFromXlsUpdateWithoutXlsdataInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
  }

  export type CustomDataFromXlsUncheckedUpdateWithoutXlsdataInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
  }

  export type CustomDataFromXlsUncheckedUpdateManyWithoutExtendedDataInput = {
    extendedXlsData?: InputJsonValue | InputJsonValue | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}