
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Recepcionista
 * 
 */
export type Recepcionista = $Result.DefaultSelection<Prisma.$RecepcionistaPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Fisioterapeuta
 * 
 */
export type Fisioterapeuta = $Result.DefaultSelection<Prisma.$FisioterapeutaPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recepcionistas
 * const recepcionistas = await prisma.recepcionista.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Recepcionistas
   * const recepcionistas = await prisma.recepcionista.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.recepcionista`: Exposes CRUD operations for the **Recepcionista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recepcionistas
    * const recepcionistas = await prisma.recepcionista.findMany()
    * ```
    */
  get recepcionista(): Prisma.RecepcionistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fisioterapeuta`: Exposes CRUD operations for the **Fisioterapeuta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fisioterapeutas
    * const fisioterapeutas = await prisma.fisioterapeuta.findMany()
    * ```
    */
  get fisioterapeuta(): Prisma.FisioterapeutaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Recepcionista: 'Recepcionista',
    Paciente: 'Paciente',
    Fisioterapeuta: 'Fisioterapeuta',
    Consulta: 'Consulta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "recepcionista" | "paciente" | "fisioterapeuta" | "consulta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recepcionista: {
        payload: Prisma.$RecepcionistaPayload<ExtArgs>
        fields: Prisma.RecepcionistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecepcionistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecepcionistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          findFirst: {
            args: Prisma.RecepcionistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecepcionistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          findMany: {
            args: Prisma.RecepcionistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>[]
          }
          create: {
            args: Prisma.RecepcionistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          createMany: {
            args: Prisma.RecepcionistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecepcionistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>[]
          }
          delete: {
            args: Prisma.RecepcionistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          update: {
            args: Prisma.RecepcionistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          deleteMany: {
            args: Prisma.RecepcionistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecepcionistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecepcionistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>[]
          }
          upsert: {
            args: Prisma.RecepcionistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecepcionistaPayload>
          }
          aggregate: {
            args: Prisma.RecepcionistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecepcionista>
          }
          groupBy: {
            args: Prisma.RecepcionistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecepcionistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecepcionistaCountArgs<ExtArgs>
            result: $Utils.Optional<RecepcionistaCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Fisioterapeuta: {
        payload: Prisma.$FisioterapeutaPayload<ExtArgs>
        fields: Prisma.FisioterapeutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FisioterapeutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FisioterapeutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          findFirst: {
            args: Prisma.FisioterapeutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FisioterapeutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          findMany: {
            args: Prisma.FisioterapeutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>[]
          }
          create: {
            args: Prisma.FisioterapeutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          createMany: {
            args: Prisma.FisioterapeutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FisioterapeutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>[]
          }
          delete: {
            args: Prisma.FisioterapeutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          update: {
            args: Prisma.FisioterapeutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          deleteMany: {
            args: Prisma.FisioterapeutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FisioterapeutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FisioterapeutaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>[]
          }
          upsert: {
            args: Prisma.FisioterapeutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FisioterapeutaPayload>
          }
          aggregate: {
            args: Prisma.FisioterapeutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFisioterapeuta>
          }
          groupBy: {
            args: Prisma.FisioterapeutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FisioterapeutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FisioterapeutaCountArgs<ExtArgs>
            result: $Utils.Optional<FisioterapeutaCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    recepcionista?: RecepcionistaOmit
    paciente?: PacienteOmit
    fisioterapeuta?: FisioterapeutaOmit
    consulta?: ConsultaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    consultas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacienteCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Count Type FisioterapeutaCountOutputType
   */

  export type FisioterapeutaCountOutputType = {
    consultas: number
  }

  export type FisioterapeutaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | FisioterapeutaCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * FisioterapeutaCountOutputType without action
   */
  export type FisioterapeutaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FisioterapeutaCountOutputType
     */
    select?: FisioterapeutaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FisioterapeutaCountOutputType without action
   */
  export type FisioterapeutaCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recepcionista
   */

  export type AggregateRecepcionista = {
    _count: RecepcionistaCountAggregateOutputType | null
    _avg: RecepcionistaAvgAggregateOutputType | null
    _sum: RecepcionistaSumAggregateOutputType | null
    _min: RecepcionistaMinAggregateOutputType | null
    _max: RecepcionistaMaxAggregateOutputType | null
  }

  export type RecepcionistaAvgAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaSumAggregateOutputType = {
    id: number | null
  }

  export type RecepcionistaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecepcionistaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecepcionistaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    telefone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecepcionistaAvgAggregateInputType = {
    id?: true
  }

  export type RecepcionistaSumAggregateInputType = {
    id?: true
  }

  export type RecepcionistaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecepcionistaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecepcionistaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecepcionistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recepcionista to aggregate.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recepcionistas
    **/
    _count?: true | RecepcionistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecepcionistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecepcionistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecepcionistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecepcionistaMaxAggregateInputType
  }

  export type GetRecepcionistaAggregateType<T extends RecepcionistaAggregateArgs> = {
        [P in keyof T & keyof AggregateRecepcionista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecepcionista[P]>
      : GetScalarType<T[P], AggregateRecepcionista[P]>
  }




  export type RecepcionistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecepcionistaWhereInput
    orderBy?: RecepcionistaOrderByWithAggregationInput | RecepcionistaOrderByWithAggregationInput[]
    by: RecepcionistaScalarFieldEnum[] | RecepcionistaScalarFieldEnum
    having?: RecepcionistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecepcionistaCountAggregateInputType | true
    _avg?: RecepcionistaAvgAggregateInputType
    _sum?: RecepcionistaSumAggregateInputType
    _min?: RecepcionistaMinAggregateInputType
    _max?: RecepcionistaMaxAggregateInputType
  }

  export type RecepcionistaGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    telefone: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecepcionistaCountAggregateOutputType | null
    _avg: RecepcionistaAvgAggregateOutputType | null
    _sum: RecepcionistaSumAggregateOutputType | null
    _min: RecepcionistaMinAggregateOutputType | null
    _max: RecepcionistaMaxAggregateOutputType | null
  }

  type GetRecepcionistaGroupByPayload<T extends RecepcionistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecepcionistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecepcionistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecepcionistaGroupByOutputType[P]>
            : GetScalarType<T[P], RecepcionistaGroupByOutputType[P]>
        }
      >
    >


  export type RecepcionistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recepcionista"]>

  export type RecepcionistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recepcionista"]>

  export type RecepcionistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recepcionista"]>

  export type RecepcionistaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecepcionistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "telefone" | "createdAt" | "updatedAt", ExtArgs["result"]["recepcionista"]>

  export type $RecepcionistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recepcionista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      telefone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recepcionista"]>
    composites: {}
  }

  type RecepcionistaGetPayload<S extends boolean | null | undefined | RecepcionistaDefaultArgs> = $Result.GetResult<Prisma.$RecepcionistaPayload, S>

  type RecepcionistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecepcionistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecepcionistaCountAggregateInputType | true
    }

  export interface RecepcionistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recepcionista'], meta: { name: 'Recepcionista' } }
    /**
     * Find zero or one Recepcionista that matches the filter.
     * @param {RecepcionistaFindUniqueArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecepcionistaFindUniqueArgs>(args: SelectSubset<T, RecepcionistaFindUniqueArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recepcionista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecepcionistaFindUniqueOrThrowArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecepcionistaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecepcionistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recepcionista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindFirstArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecepcionistaFindFirstArgs>(args?: SelectSubset<T, RecepcionistaFindFirstArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recepcionista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindFirstOrThrowArgs} args - Arguments to find a Recepcionista
     * @example
     * // Get one Recepcionista
     * const recepcionista = await prisma.recepcionista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecepcionistaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecepcionistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recepcionistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recepcionistas
     * const recepcionistas = await prisma.recepcionista.findMany()
     * 
     * // Get first 10 Recepcionistas
     * const recepcionistas = await prisma.recepcionista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recepcionistaWithIdOnly = await prisma.recepcionista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecepcionistaFindManyArgs>(args?: SelectSubset<T, RecepcionistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recepcionista.
     * @param {RecepcionistaCreateArgs} args - Arguments to create a Recepcionista.
     * @example
     * // Create one Recepcionista
     * const Recepcionista = await prisma.recepcionista.create({
     *   data: {
     *     // ... data to create a Recepcionista
     *   }
     * })
     * 
     */
    create<T extends RecepcionistaCreateArgs>(args: SelectSubset<T, RecepcionistaCreateArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recepcionistas.
     * @param {RecepcionistaCreateManyArgs} args - Arguments to create many Recepcionistas.
     * @example
     * // Create many Recepcionistas
     * const recepcionista = await prisma.recepcionista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecepcionistaCreateManyArgs>(args?: SelectSubset<T, RecepcionistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recepcionistas and returns the data saved in the database.
     * @param {RecepcionistaCreateManyAndReturnArgs} args - Arguments to create many Recepcionistas.
     * @example
     * // Create many Recepcionistas
     * const recepcionista = await prisma.recepcionista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recepcionistas and only return the `id`
     * const recepcionistaWithIdOnly = await prisma.recepcionista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecepcionistaCreateManyAndReturnArgs>(args?: SelectSubset<T, RecepcionistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recepcionista.
     * @param {RecepcionistaDeleteArgs} args - Arguments to delete one Recepcionista.
     * @example
     * // Delete one Recepcionista
     * const Recepcionista = await prisma.recepcionista.delete({
     *   where: {
     *     // ... filter to delete one Recepcionista
     *   }
     * })
     * 
     */
    delete<T extends RecepcionistaDeleteArgs>(args: SelectSubset<T, RecepcionistaDeleteArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recepcionista.
     * @param {RecepcionistaUpdateArgs} args - Arguments to update one Recepcionista.
     * @example
     * // Update one Recepcionista
     * const recepcionista = await prisma.recepcionista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecepcionistaUpdateArgs>(args: SelectSubset<T, RecepcionistaUpdateArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recepcionistas.
     * @param {RecepcionistaDeleteManyArgs} args - Arguments to filter Recepcionistas to delete.
     * @example
     * // Delete a few Recepcionistas
     * const { count } = await prisma.recepcionista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecepcionistaDeleteManyArgs>(args?: SelectSubset<T, RecepcionistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recepcionistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recepcionistas
     * const recepcionista = await prisma.recepcionista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecepcionistaUpdateManyArgs>(args: SelectSubset<T, RecepcionistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recepcionistas and returns the data updated in the database.
     * @param {RecepcionistaUpdateManyAndReturnArgs} args - Arguments to update many Recepcionistas.
     * @example
     * // Update many Recepcionistas
     * const recepcionista = await prisma.recepcionista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recepcionistas and only return the `id`
     * const recepcionistaWithIdOnly = await prisma.recepcionista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecepcionistaUpdateManyAndReturnArgs>(args: SelectSubset<T, RecepcionistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recepcionista.
     * @param {RecepcionistaUpsertArgs} args - Arguments to update or create a Recepcionista.
     * @example
     * // Update or create a Recepcionista
     * const recepcionista = await prisma.recepcionista.upsert({
     *   create: {
     *     // ... data to create a Recepcionista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recepcionista we want to update
     *   }
     * })
     */
    upsert<T extends RecepcionistaUpsertArgs>(args: SelectSubset<T, RecepcionistaUpsertArgs<ExtArgs>>): Prisma__RecepcionistaClient<$Result.GetResult<Prisma.$RecepcionistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recepcionistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaCountArgs} args - Arguments to filter Recepcionistas to count.
     * @example
     * // Count the number of Recepcionistas
     * const count = await prisma.recepcionista.count({
     *   where: {
     *     // ... the filter for the Recepcionistas we want to count
     *   }
     * })
    **/
    count<T extends RecepcionistaCountArgs>(
      args?: Subset<T, RecepcionistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecepcionistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recepcionista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecepcionistaAggregateArgs>(args: Subset<T, RecepcionistaAggregateArgs>): Prisma.PrismaPromise<GetRecepcionistaAggregateType<T>>

    /**
     * Group by Recepcionista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecepcionistaGroupByArgs} args - Group by arguments.
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
      T extends RecepcionistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecepcionistaGroupByArgs['orderBy'] }
        : { orderBy?: RecepcionistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecepcionistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecepcionistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recepcionista model
   */
  readonly fields: RecepcionistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recepcionista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecepcionistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recepcionista model
   */
  interface RecepcionistaFieldRefs {
    readonly id: FieldRef<"Recepcionista", 'Int'>
    readonly nome: FieldRef<"Recepcionista", 'String'>
    readonly email: FieldRef<"Recepcionista", 'String'>
    readonly senha: FieldRef<"Recepcionista", 'String'>
    readonly telefone: FieldRef<"Recepcionista", 'String'>
    readonly createdAt: FieldRef<"Recepcionista", 'DateTime'>
    readonly updatedAt: FieldRef<"Recepcionista", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recepcionista findUnique
   */
  export type RecepcionistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista findUniqueOrThrow
   */
  export type RecepcionistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista findFirst
   */
  export type RecepcionistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recepcionistas.
     */
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista findFirstOrThrow
   */
  export type RecepcionistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter, which Recepcionista to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recepcionistas.
     */
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista findMany
   */
  export type RecepcionistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter, which Recepcionistas to fetch.
     */
    where?: RecepcionistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recepcionistas to fetch.
     */
    orderBy?: RecepcionistaOrderByWithRelationInput | RecepcionistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recepcionistas.
     */
    cursor?: RecepcionistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recepcionistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recepcionistas.
     */
    skip?: number
    distinct?: RecepcionistaScalarFieldEnum | RecepcionistaScalarFieldEnum[]
  }

  /**
   * Recepcionista create
   */
  export type RecepcionistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * The data needed to create a Recepcionista.
     */
    data: XOR<RecepcionistaCreateInput, RecepcionistaUncheckedCreateInput>
  }

  /**
   * Recepcionista createMany
   */
  export type RecepcionistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recepcionistas.
     */
    data: RecepcionistaCreateManyInput | RecepcionistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recepcionista createManyAndReturn
   */
  export type RecepcionistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * The data used to create many Recepcionistas.
     */
    data: RecepcionistaCreateManyInput | RecepcionistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recepcionista update
   */
  export type RecepcionistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * The data needed to update a Recepcionista.
     */
    data: XOR<RecepcionistaUpdateInput, RecepcionistaUncheckedUpdateInput>
    /**
     * Choose, which Recepcionista to update.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista updateMany
   */
  export type RecepcionistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recepcionistas.
     */
    data: XOR<RecepcionistaUpdateManyMutationInput, RecepcionistaUncheckedUpdateManyInput>
    /**
     * Filter which Recepcionistas to update
     */
    where?: RecepcionistaWhereInput
    /**
     * Limit how many Recepcionistas to update.
     */
    limit?: number
  }

  /**
   * Recepcionista updateManyAndReturn
   */
  export type RecepcionistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * The data used to update Recepcionistas.
     */
    data: XOR<RecepcionistaUpdateManyMutationInput, RecepcionistaUncheckedUpdateManyInput>
    /**
     * Filter which Recepcionistas to update
     */
    where?: RecepcionistaWhereInput
    /**
     * Limit how many Recepcionistas to update.
     */
    limit?: number
  }

  /**
   * Recepcionista upsert
   */
  export type RecepcionistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * The filter to search for the Recepcionista to update in case it exists.
     */
    where: RecepcionistaWhereUniqueInput
    /**
     * In case the Recepcionista found by the `where` argument doesn't exist, create a new Recepcionista with this data.
     */
    create: XOR<RecepcionistaCreateInput, RecepcionistaUncheckedCreateInput>
    /**
     * In case the Recepcionista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecepcionistaUpdateInput, RecepcionistaUncheckedUpdateInput>
  }

  /**
   * Recepcionista delete
   */
  export type RecepcionistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
    /**
     * Filter which Recepcionista to delete.
     */
    where: RecepcionistaWhereUniqueInput
  }

  /**
   * Recepcionista deleteMany
   */
  export type RecepcionistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recepcionistas to delete
     */
    where?: RecepcionistaWhereInput
    /**
     * Limit how many Recepcionistas to delete.
     */
    limit?: number
  }

  /**
   * Recepcionista without action
   */
  export type RecepcionistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recepcionista
     */
    select?: RecepcionistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recepcionista
     */
    omit?: RecepcionistaOmit<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    telefone: string | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    telefone: string | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    telefone: number
    dataNascimento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    cpf: string
    telefone: string | null
    dataNascimento: Date
    createdAt: Date
    updatedAt: Date
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "telefone" | "dataNascimento" | "createdAt" | "updatedAt", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      cpf: string
      telefone: string | null
      dataNascimento: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends Paciente$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly createdAt: FieldRef<"Paciente", 'DateTime'>
    readonly updatedAt: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.consultas
   */
  export type Paciente$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Fisioterapeuta
   */

  export type AggregateFisioterapeuta = {
    _count: FisioterapeutaCountAggregateOutputType | null
    _avg: FisioterapeutaAvgAggregateOutputType | null
    _sum: FisioterapeutaSumAggregateOutputType | null
    _min: FisioterapeutaMinAggregateOutputType | null
    _max: FisioterapeutaMaxAggregateOutputType | null
  }

  export type FisioterapeutaAvgAggregateOutputType = {
    id: number | null
  }

  export type FisioterapeutaSumAggregateOutputType = {
    id: number | null
  }

  export type FisioterapeutaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    crm: string | null
    especialidade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FisioterapeutaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    crm: string | null
    especialidade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FisioterapeutaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    crm: number
    especialidade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FisioterapeutaAvgAggregateInputType = {
    id?: true
  }

  export type FisioterapeutaSumAggregateInputType = {
    id?: true
  }

  export type FisioterapeutaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    crm?: true
    especialidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FisioterapeutaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    crm?: true
    especialidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FisioterapeutaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    crm?: true
    especialidade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FisioterapeutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fisioterapeuta to aggregate.
     */
    where?: FisioterapeutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fisioterapeutas to fetch.
     */
    orderBy?: FisioterapeutaOrderByWithRelationInput | FisioterapeutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FisioterapeutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fisioterapeutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fisioterapeutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fisioterapeutas
    **/
    _count?: true | FisioterapeutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FisioterapeutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FisioterapeutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FisioterapeutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FisioterapeutaMaxAggregateInputType
  }

  export type GetFisioterapeutaAggregateType<T extends FisioterapeutaAggregateArgs> = {
        [P in keyof T & keyof AggregateFisioterapeuta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFisioterapeuta[P]>
      : GetScalarType<T[P], AggregateFisioterapeuta[P]>
  }




  export type FisioterapeutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FisioterapeutaWhereInput
    orderBy?: FisioterapeutaOrderByWithAggregationInput | FisioterapeutaOrderByWithAggregationInput[]
    by: FisioterapeutaScalarFieldEnum[] | FisioterapeutaScalarFieldEnum
    having?: FisioterapeutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FisioterapeutaCountAggregateInputType | true
    _avg?: FisioterapeutaAvgAggregateInputType
    _sum?: FisioterapeutaSumAggregateInputType
    _min?: FisioterapeutaMinAggregateInputType
    _max?: FisioterapeutaMaxAggregateInputType
  }

  export type FisioterapeutaGroupByOutputType = {
    id: number
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt: Date
    updatedAt: Date
    _count: FisioterapeutaCountAggregateOutputType | null
    _avg: FisioterapeutaAvgAggregateOutputType | null
    _sum: FisioterapeutaSumAggregateOutputType | null
    _min: FisioterapeutaMinAggregateOutputType | null
    _max: FisioterapeutaMaxAggregateOutputType | null
  }

  type GetFisioterapeutaGroupByPayload<T extends FisioterapeutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FisioterapeutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FisioterapeutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FisioterapeutaGroupByOutputType[P]>
            : GetScalarType<T[P], FisioterapeutaGroupByOutputType[P]>
        }
      >
    >


  export type FisioterapeutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    crm?: boolean
    especialidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consultas?: boolean | Fisioterapeuta$consultasArgs<ExtArgs>
    _count?: boolean | FisioterapeutaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fisioterapeuta"]>

  export type FisioterapeutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    crm?: boolean
    especialidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fisioterapeuta"]>

  export type FisioterapeutaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    crm?: boolean
    especialidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fisioterapeuta"]>

  export type FisioterapeutaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    crm?: boolean
    especialidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FisioterapeutaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "crm" | "especialidade" | "createdAt" | "updatedAt", ExtArgs["result"]["fisioterapeuta"]>
  export type FisioterapeutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | Fisioterapeuta$consultasArgs<ExtArgs>
    _count?: boolean | FisioterapeutaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FisioterapeutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FisioterapeutaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FisioterapeutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fisioterapeuta"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      cpf: string
      crm: string
      especialidade: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fisioterapeuta"]>
    composites: {}
  }

  type FisioterapeutaGetPayload<S extends boolean | null | undefined | FisioterapeutaDefaultArgs> = $Result.GetResult<Prisma.$FisioterapeutaPayload, S>

  type FisioterapeutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FisioterapeutaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FisioterapeutaCountAggregateInputType | true
    }

  export interface FisioterapeutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fisioterapeuta'], meta: { name: 'Fisioterapeuta' } }
    /**
     * Find zero or one Fisioterapeuta that matches the filter.
     * @param {FisioterapeutaFindUniqueArgs} args - Arguments to find a Fisioterapeuta
     * @example
     * // Get one Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FisioterapeutaFindUniqueArgs>(args: SelectSubset<T, FisioterapeutaFindUniqueArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fisioterapeuta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FisioterapeutaFindUniqueOrThrowArgs} args - Arguments to find a Fisioterapeuta
     * @example
     * // Get one Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FisioterapeutaFindUniqueOrThrowArgs>(args: SelectSubset<T, FisioterapeutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fisioterapeuta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaFindFirstArgs} args - Arguments to find a Fisioterapeuta
     * @example
     * // Get one Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FisioterapeutaFindFirstArgs>(args?: SelectSubset<T, FisioterapeutaFindFirstArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fisioterapeuta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaFindFirstOrThrowArgs} args - Arguments to find a Fisioterapeuta
     * @example
     * // Get one Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FisioterapeutaFindFirstOrThrowArgs>(args?: SelectSubset<T, FisioterapeutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fisioterapeutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fisioterapeutas
     * const fisioterapeutas = await prisma.fisioterapeuta.findMany()
     * 
     * // Get first 10 Fisioterapeutas
     * const fisioterapeutas = await prisma.fisioterapeuta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fisioterapeutaWithIdOnly = await prisma.fisioterapeuta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FisioterapeutaFindManyArgs>(args?: SelectSubset<T, FisioterapeutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fisioterapeuta.
     * @param {FisioterapeutaCreateArgs} args - Arguments to create a Fisioterapeuta.
     * @example
     * // Create one Fisioterapeuta
     * const Fisioterapeuta = await prisma.fisioterapeuta.create({
     *   data: {
     *     // ... data to create a Fisioterapeuta
     *   }
     * })
     * 
     */
    create<T extends FisioterapeutaCreateArgs>(args: SelectSubset<T, FisioterapeutaCreateArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fisioterapeutas.
     * @param {FisioterapeutaCreateManyArgs} args - Arguments to create many Fisioterapeutas.
     * @example
     * // Create many Fisioterapeutas
     * const fisioterapeuta = await prisma.fisioterapeuta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FisioterapeutaCreateManyArgs>(args?: SelectSubset<T, FisioterapeutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fisioterapeutas and returns the data saved in the database.
     * @param {FisioterapeutaCreateManyAndReturnArgs} args - Arguments to create many Fisioterapeutas.
     * @example
     * // Create many Fisioterapeutas
     * const fisioterapeuta = await prisma.fisioterapeuta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fisioterapeutas and only return the `id`
     * const fisioterapeutaWithIdOnly = await prisma.fisioterapeuta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FisioterapeutaCreateManyAndReturnArgs>(args?: SelectSubset<T, FisioterapeutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fisioterapeuta.
     * @param {FisioterapeutaDeleteArgs} args - Arguments to delete one Fisioterapeuta.
     * @example
     * // Delete one Fisioterapeuta
     * const Fisioterapeuta = await prisma.fisioterapeuta.delete({
     *   where: {
     *     // ... filter to delete one Fisioterapeuta
     *   }
     * })
     * 
     */
    delete<T extends FisioterapeutaDeleteArgs>(args: SelectSubset<T, FisioterapeutaDeleteArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fisioterapeuta.
     * @param {FisioterapeutaUpdateArgs} args - Arguments to update one Fisioterapeuta.
     * @example
     * // Update one Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FisioterapeutaUpdateArgs>(args: SelectSubset<T, FisioterapeutaUpdateArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fisioterapeutas.
     * @param {FisioterapeutaDeleteManyArgs} args - Arguments to filter Fisioterapeutas to delete.
     * @example
     * // Delete a few Fisioterapeutas
     * const { count } = await prisma.fisioterapeuta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FisioterapeutaDeleteManyArgs>(args?: SelectSubset<T, FisioterapeutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fisioterapeutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fisioterapeutas
     * const fisioterapeuta = await prisma.fisioterapeuta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FisioterapeutaUpdateManyArgs>(args: SelectSubset<T, FisioterapeutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fisioterapeutas and returns the data updated in the database.
     * @param {FisioterapeutaUpdateManyAndReturnArgs} args - Arguments to update many Fisioterapeutas.
     * @example
     * // Update many Fisioterapeutas
     * const fisioterapeuta = await prisma.fisioterapeuta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fisioterapeutas and only return the `id`
     * const fisioterapeutaWithIdOnly = await prisma.fisioterapeuta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FisioterapeutaUpdateManyAndReturnArgs>(args: SelectSubset<T, FisioterapeutaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fisioterapeuta.
     * @param {FisioterapeutaUpsertArgs} args - Arguments to update or create a Fisioterapeuta.
     * @example
     * // Update or create a Fisioterapeuta
     * const fisioterapeuta = await prisma.fisioterapeuta.upsert({
     *   create: {
     *     // ... data to create a Fisioterapeuta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fisioterapeuta we want to update
     *   }
     * })
     */
    upsert<T extends FisioterapeutaUpsertArgs>(args: SelectSubset<T, FisioterapeutaUpsertArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fisioterapeutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaCountArgs} args - Arguments to filter Fisioterapeutas to count.
     * @example
     * // Count the number of Fisioterapeutas
     * const count = await prisma.fisioterapeuta.count({
     *   where: {
     *     // ... the filter for the Fisioterapeutas we want to count
     *   }
     * })
    **/
    count<T extends FisioterapeutaCountArgs>(
      args?: Subset<T, FisioterapeutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FisioterapeutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fisioterapeuta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FisioterapeutaAggregateArgs>(args: Subset<T, FisioterapeutaAggregateArgs>): Prisma.PrismaPromise<GetFisioterapeutaAggregateType<T>>

    /**
     * Group by Fisioterapeuta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FisioterapeutaGroupByArgs} args - Group by arguments.
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
      T extends FisioterapeutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FisioterapeutaGroupByArgs['orderBy'] }
        : { orderBy?: FisioterapeutaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FisioterapeutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFisioterapeutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fisioterapeuta model
   */
  readonly fields: FisioterapeutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fisioterapeuta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FisioterapeutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends Fisioterapeuta$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Fisioterapeuta$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fisioterapeuta model
   */
  interface FisioterapeutaFieldRefs {
    readonly id: FieldRef<"Fisioterapeuta", 'Int'>
    readonly nome: FieldRef<"Fisioterapeuta", 'String'>
    readonly email: FieldRef<"Fisioterapeuta", 'String'>
    readonly cpf: FieldRef<"Fisioterapeuta", 'String'>
    readonly crm: FieldRef<"Fisioterapeuta", 'String'>
    readonly especialidade: FieldRef<"Fisioterapeuta", 'String'>
    readonly createdAt: FieldRef<"Fisioterapeuta", 'DateTime'>
    readonly updatedAt: FieldRef<"Fisioterapeuta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fisioterapeuta findUnique
   */
  export type FisioterapeutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter, which Fisioterapeuta to fetch.
     */
    where: FisioterapeutaWhereUniqueInput
  }

  /**
   * Fisioterapeuta findUniqueOrThrow
   */
  export type FisioterapeutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter, which Fisioterapeuta to fetch.
     */
    where: FisioterapeutaWhereUniqueInput
  }

  /**
   * Fisioterapeuta findFirst
   */
  export type FisioterapeutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter, which Fisioterapeuta to fetch.
     */
    where?: FisioterapeutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fisioterapeutas to fetch.
     */
    orderBy?: FisioterapeutaOrderByWithRelationInput | FisioterapeutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fisioterapeutas.
     */
    cursor?: FisioterapeutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fisioterapeutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fisioterapeutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fisioterapeutas.
     */
    distinct?: FisioterapeutaScalarFieldEnum | FisioterapeutaScalarFieldEnum[]
  }

  /**
   * Fisioterapeuta findFirstOrThrow
   */
  export type FisioterapeutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter, which Fisioterapeuta to fetch.
     */
    where?: FisioterapeutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fisioterapeutas to fetch.
     */
    orderBy?: FisioterapeutaOrderByWithRelationInput | FisioterapeutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fisioterapeutas.
     */
    cursor?: FisioterapeutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fisioterapeutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fisioterapeutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fisioterapeutas.
     */
    distinct?: FisioterapeutaScalarFieldEnum | FisioterapeutaScalarFieldEnum[]
  }

  /**
   * Fisioterapeuta findMany
   */
  export type FisioterapeutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter, which Fisioterapeutas to fetch.
     */
    where?: FisioterapeutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fisioterapeutas to fetch.
     */
    orderBy?: FisioterapeutaOrderByWithRelationInput | FisioterapeutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fisioterapeutas.
     */
    cursor?: FisioterapeutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fisioterapeutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fisioterapeutas.
     */
    skip?: number
    distinct?: FisioterapeutaScalarFieldEnum | FisioterapeutaScalarFieldEnum[]
  }

  /**
   * Fisioterapeuta create
   */
  export type FisioterapeutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fisioterapeuta.
     */
    data: XOR<FisioterapeutaCreateInput, FisioterapeutaUncheckedCreateInput>
  }

  /**
   * Fisioterapeuta createMany
   */
  export type FisioterapeutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fisioterapeutas.
     */
    data: FisioterapeutaCreateManyInput | FisioterapeutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fisioterapeuta createManyAndReturn
   */
  export type FisioterapeutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * The data used to create many Fisioterapeutas.
     */
    data: FisioterapeutaCreateManyInput | FisioterapeutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fisioterapeuta update
   */
  export type FisioterapeutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fisioterapeuta.
     */
    data: XOR<FisioterapeutaUpdateInput, FisioterapeutaUncheckedUpdateInput>
    /**
     * Choose, which Fisioterapeuta to update.
     */
    where: FisioterapeutaWhereUniqueInput
  }

  /**
   * Fisioterapeuta updateMany
   */
  export type FisioterapeutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fisioterapeutas.
     */
    data: XOR<FisioterapeutaUpdateManyMutationInput, FisioterapeutaUncheckedUpdateManyInput>
    /**
     * Filter which Fisioterapeutas to update
     */
    where?: FisioterapeutaWhereInput
    /**
     * Limit how many Fisioterapeutas to update.
     */
    limit?: number
  }

  /**
   * Fisioterapeuta updateManyAndReturn
   */
  export type FisioterapeutaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * The data used to update Fisioterapeutas.
     */
    data: XOR<FisioterapeutaUpdateManyMutationInput, FisioterapeutaUncheckedUpdateManyInput>
    /**
     * Filter which Fisioterapeutas to update
     */
    where?: FisioterapeutaWhereInput
    /**
     * Limit how many Fisioterapeutas to update.
     */
    limit?: number
  }

  /**
   * Fisioterapeuta upsert
   */
  export type FisioterapeutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fisioterapeuta to update in case it exists.
     */
    where: FisioterapeutaWhereUniqueInput
    /**
     * In case the Fisioterapeuta found by the `where` argument doesn't exist, create a new Fisioterapeuta with this data.
     */
    create: XOR<FisioterapeutaCreateInput, FisioterapeutaUncheckedCreateInput>
    /**
     * In case the Fisioterapeuta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FisioterapeutaUpdateInput, FisioterapeutaUncheckedUpdateInput>
  }

  /**
   * Fisioterapeuta delete
   */
  export type FisioterapeutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
    /**
     * Filter which Fisioterapeuta to delete.
     */
    where: FisioterapeutaWhereUniqueInput
  }

  /**
   * Fisioterapeuta deleteMany
   */
  export type FisioterapeutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fisioterapeutas to delete
     */
    where?: FisioterapeutaWhereInput
    /**
     * Limit how many Fisioterapeutas to delete.
     */
    limit?: number
  }

  /**
   * Fisioterapeuta.consultas
   */
  export type Fisioterapeuta$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Fisioterapeuta without action
   */
  export type FisioterapeutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fisioterapeuta
     */
    select?: FisioterapeutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fisioterapeuta
     */
    omit?: FisioterapeutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FisioterapeutaInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    fisioterapeutaId: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    fisioterapeutaId: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pacienteId: number | null
    fisioterapeutaId: number | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pacienteId: number | null
    fisioterapeutaId: number | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    dataHora: number
    motivo: number
    createdAt: number
    updatedAt: number
    pacienteId: number
    fisioterapeutaId: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    fisioterapeutaId?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
    pacienteId?: true
    fisioterapeutaId?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    pacienteId?: true
    fisioterapeutaId?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    pacienteId?: true
    fisioterapeutaId?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    pacienteId?: true
    fisioterapeutaId?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    dataHora: Date
    motivo: string | null
    createdAt: Date
    updatedAt: Date
    pacienteId: number
    fisioterapeutaId: number
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacienteId?: boolean
    fisioterapeutaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacienteId?: boolean
    fisioterapeutaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacienteId?: boolean
    fisioterapeutaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacienteId?: boolean
    fisioterapeutaId?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataHora" | "motivo" | "createdAt" | "updatedAt" | "pacienteId" | "fisioterapeutaId", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fisioterapeuta?: boolean | FisioterapeutaDefaultArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      fisioterapeuta: Prisma.$FisioterapeutaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataHora: Date
      motivo: string | null
      createdAt: Date
      updatedAt: Date
      pacienteId: number
      fisioterapeutaId: number
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
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
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fisioterapeuta<T extends FisioterapeutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FisioterapeutaDefaultArgs<ExtArgs>>): Prisma__FisioterapeutaClient<$Result.GetResult<Prisma.$FisioterapeutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly dataHora: FieldRef<"Consulta", 'DateTime'>
    readonly motivo: FieldRef<"Consulta", 'String'>
    readonly createdAt: FieldRef<"Consulta", 'DateTime'>
    readonly updatedAt: FieldRef<"Consulta", 'DateTime'>
    readonly pacienteId: FieldRef<"Consulta", 'Int'>
    readonly fisioterapeutaId: FieldRef<"Consulta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta createManyAndReturn
   */
  export type ConsultaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta updateManyAndReturn
   */
  export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecepcionistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecepcionistaScalarFieldEnum = (typeof RecepcionistaScalarFieldEnum)[keyof typeof RecepcionistaScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    telefone: 'telefone',
    dataNascimento: 'dataNascimento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const FisioterapeutaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    crm: 'crm',
    especialidade: 'especialidade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FisioterapeutaScalarFieldEnum = (typeof FisioterapeutaScalarFieldEnum)[keyof typeof FisioterapeutaScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    dataHora: 'dataHora',
    motivo: 'motivo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pacienteId: 'pacienteId',
    fisioterapeutaId: 'fisioterapeutaId'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RecepcionistaWhereInput = {
    AND?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    OR?: RecepcionistaWhereInput[]
    NOT?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    id?: IntFilter<"Recepcionista"> | number
    nome?: StringFilter<"Recepcionista"> | string
    email?: StringFilter<"Recepcionista"> | string
    senha?: StringFilter<"Recepcionista"> | string
    telefone?: StringNullableFilter<"Recepcionista"> | string | null
    createdAt?: DateTimeFilter<"Recepcionista"> | Date | string
    updatedAt?: DateTimeFilter<"Recepcionista"> | Date | string
  }

  export type RecepcionistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecepcionistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    OR?: RecepcionistaWhereInput[]
    NOT?: RecepcionistaWhereInput | RecepcionistaWhereInput[]
    nome?: StringFilter<"Recepcionista"> | string
    senha?: StringFilter<"Recepcionista"> | string
    telefone?: StringNullableFilter<"Recepcionista"> | string | null
    createdAt?: DateTimeFilter<"Recepcionista"> | Date | string
    updatedAt?: DateTimeFilter<"Recepcionista"> | Date | string
  }, "id" | "email">

  export type RecepcionistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecepcionistaCountOrderByAggregateInput
    _avg?: RecepcionistaAvgOrderByAggregateInput
    _max?: RecepcionistaMaxOrderByAggregateInput
    _min?: RecepcionistaMinOrderByAggregateInput
    _sum?: RecepcionistaSumOrderByAggregateInput
  }

  export type RecepcionistaScalarWhereWithAggregatesInput = {
    AND?: RecepcionistaScalarWhereWithAggregatesInput | RecepcionistaScalarWhereWithAggregatesInput[]
    OR?: RecepcionistaScalarWhereWithAggregatesInput[]
    NOT?: RecepcionistaScalarWhereWithAggregatesInput | RecepcionistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recepcionista"> | number
    nome?: StringWithAggregatesFilter<"Recepcionista"> | string
    email?: StringWithAggregatesFilter<"Recepcionista"> | string
    senha?: StringWithAggregatesFilter<"Recepcionista"> | string
    telefone?: StringNullableWithAggregatesFilter<"Recepcionista"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recepcionista"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recepcionista"> | Date | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    cpf?: StringFilter<"Paciente"> | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    consultas?: ConsultaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    consultas?: ConsultaListRelationFilter
  }, "id" | "email" | "cpf">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    email?: StringWithAggregatesFilter<"Paciente"> | string
    cpf?: StringWithAggregatesFilter<"Paciente"> | string
    telefone?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type FisioterapeutaWhereInput = {
    AND?: FisioterapeutaWhereInput | FisioterapeutaWhereInput[]
    OR?: FisioterapeutaWhereInput[]
    NOT?: FisioterapeutaWhereInput | FisioterapeutaWhereInput[]
    id?: IntFilter<"Fisioterapeuta"> | number
    nome?: StringFilter<"Fisioterapeuta"> | string
    email?: StringFilter<"Fisioterapeuta"> | string
    cpf?: StringFilter<"Fisioterapeuta"> | string
    crm?: StringFilter<"Fisioterapeuta"> | string
    especialidade?: StringFilter<"Fisioterapeuta"> | string
    createdAt?: DateTimeFilter<"Fisioterapeuta"> | Date | string
    updatedAt?: DateTimeFilter<"Fisioterapeuta"> | Date | string
    consultas?: ConsultaListRelationFilter
  }

  export type FisioterapeutaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type FisioterapeutaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    crm?: string
    AND?: FisioterapeutaWhereInput | FisioterapeutaWhereInput[]
    OR?: FisioterapeutaWhereInput[]
    NOT?: FisioterapeutaWhereInput | FisioterapeutaWhereInput[]
    nome?: StringFilter<"Fisioterapeuta"> | string
    especialidade?: StringFilter<"Fisioterapeuta"> | string
    createdAt?: DateTimeFilter<"Fisioterapeuta"> | Date | string
    updatedAt?: DateTimeFilter<"Fisioterapeuta"> | Date | string
    consultas?: ConsultaListRelationFilter
  }, "id" | "email" | "cpf" | "crm">

  export type FisioterapeutaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FisioterapeutaCountOrderByAggregateInput
    _avg?: FisioterapeutaAvgOrderByAggregateInput
    _max?: FisioterapeutaMaxOrderByAggregateInput
    _min?: FisioterapeutaMinOrderByAggregateInput
    _sum?: FisioterapeutaSumOrderByAggregateInput
  }

  export type FisioterapeutaScalarWhereWithAggregatesInput = {
    AND?: FisioterapeutaScalarWhereWithAggregatesInput | FisioterapeutaScalarWhereWithAggregatesInput[]
    OR?: FisioterapeutaScalarWhereWithAggregatesInput[]
    NOT?: FisioterapeutaScalarWhereWithAggregatesInput | FisioterapeutaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fisioterapeuta"> | number
    nome?: StringWithAggregatesFilter<"Fisioterapeuta"> | string
    email?: StringWithAggregatesFilter<"Fisioterapeuta"> | string
    cpf?: StringWithAggregatesFilter<"Fisioterapeuta"> | string
    crm?: StringWithAggregatesFilter<"Fisioterapeuta"> | string
    especialidade?: StringWithAggregatesFilter<"Fisioterapeuta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fisioterapeuta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fisioterapeuta"> | Date | string
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
    pacienteId?: IntFilter<"Consulta"> | number
    fisioterapeutaId?: IntFilter<"Consulta"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    fisioterapeuta?: XOR<FisioterapeutaScalarRelationFilter, FisioterapeutaWhereInput>
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    fisioterapeuta?: FisioterapeutaOrderByWithRelationInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
    pacienteId?: IntFilter<"Consulta"> | number
    fisioterapeutaId?: IntFilter<"Consulta"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    fisioterapeuta?: XOR<FisioterapeutaScalarRelationFilter, FisioterapeutaWhereInput>
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    motivo?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    pacienteId?: IntWithAggregatesFilter<"Consulta"> | number
    fisioterapeutaId?: IntWithAggregatesFilter<"Consulta"> | number
  }

  export type RecepcionistaCreateInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecepcionistaUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecepcionistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecepcionistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecepcionistaCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecepcionistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecepcionistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateInput = {
    nome: string
    email: string
    cpf: string
    telefone?: string | null
    dataNascimento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone?: string | null
    dataNascimento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone?: string | null
    dataNascimento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FisioterapeutaCreateInput = {
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaCreateNestedManyWithoutFisioterapeutaInput
  }

  export type FisioterapeutaUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutFisioterapeutaInput
  }

  export type FisioterapeutaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUpdateManyWithoutFisioterapeutaNestedInput
  }

  export type FisioterapeutaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUncheckedUpdateManyWithoutFisioterapeutaNestedInput
  }

  export type FisioterapeutaCreateManyInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FisioterapeutaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FisioterapeutaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateInput = {
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    fisioterapeuta: FisioterapeutaCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacienteId: number
    fisioterapeutaId: number
  }

  export type ConsultaUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    fisioterapeuta?: FisioterapeutaUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    fisioterapeutaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateManyInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacienteId: number
    fisioterapeutaId: number
  }

  export type ConsultaUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    fisioterapeutaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecepcionistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecepcionistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecepcionistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecepcionistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecepcionistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FisioterapeutaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FisioterapeutaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FisioterapeutaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FisioterapeutaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FisioterapeutaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type FisioterapeutaScalarRelationFilter = {
    is?: FisioterapeutaWhereInput
    isNot?: FisioterapeutaWhereInput
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fisioterapeutaId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaCreateNestedManyWithoutFisioterapeutaInput = {
    create?: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput> | ConsultaCreateWithoutFisioterapeutaInput[] | ConsultaUncheckedCreateWithoutFisioterapeutaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutFisioterapeutaInput | ConsultaCreateOrConnectWithoutFisioterapeutaInput[]
    createMany?: ConsultaCreateManyFisioterapeutaInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutFisioterapeutaInput = {
    create?: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput> | ConsultaCreateWithoutFisioterapeutaInput[] | ConsultaUncheckedCreateWithoutFisioterapeutaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutFisioterapeutaInput | ConsultaCreateOrConnectWithoutFisioterapeutaInput[]
    createMany?: ConsultaCreateManyFisioterapeutaInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUpdateManyWithoutFisioterapeutaNestedInput = {
    create?: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput> | ConsultaCreateWithoutFisioterapeutaInput[] | ConsultaUncheckedCreateWithoutFisioterapeutaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutFisioterapeutaInput | ConsultaCreateOrConnectWithoutFisioterapeutaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutFisioterapeutaInput | ConsultaUpsertWithWhereUniqueWithoutFisioterapeutaInput[]
    createMany?: ConsultaCreateManyFisioterapeutaInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutFisioterapeutaInput | ConsultaUpdateWithWhereUniqueWithoutFisioterapeutaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutFisioterapeutaInput | ConsultaUpdateManyWithWhereWithoutFisioterapeutaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutFisioterapeutaNestedInput = {
    create?: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput> | ConsultaCreateWithoutFisioterapeutaInput[] | ConsultaUncheckedCreateWithoutFisioterapeutaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutFisioterapeutaInput | ConsultaCreateOrConnectWithoutFisioterapeutaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutFisioterapeutaInput | ConsultaUpsertWithWhereUniqueWithoutFisioterapeutaInput[]
    createMany?: ConsultaCreateManyFisioterapeutaInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutFisioterapeutaInput | ConsultaUpdateWithWhereUniqueWithoutFisioterapeutaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutFisioterapeutaInput | ConsultaUpdateManyWithWhereWithoutFisioterapeutaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutConsultasInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
  }

  export type FisioterapeutaCreateNestedOneWithoutConsultasInput = {
    create?: XOR<FisioterapeutaCreateWithoutConsultasInput, FisioterapeutaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: FisioterapeutaCreateOrConnectWithoutConsultasInput
    connect?: FisioterapeutaWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    upsert?: PacienteUpsertWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConsultasInput, PacienteUpdateWithoutConsultasInput>, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type FisioterapeutaUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<FisioterapeutaCreateWithoutConsultasInput, FisioterapeutaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: FisioterapeutaCreateOrConnectWithoutConsultasInput
    upsert?: FisioterapeutaUpsertWithoutConsultasInput
    connect?: FisioterapeutaWhereUniqueInput
    update?: XOR<XOR<FisioterapeutaUpdateToOneWithWhereWithoutConsultasInput, FisioterapeutaUpdateWithoutConsultasInput>, FisioterapeutaUncheckedUpdateWithoutConsultasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fisioterapeuta: FisioterapeutaCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fisioterapeutaId: number
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateManyPacienteInputEnvelope = {
    data: ConsultaCreateManyPacienteInput | ConsultaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
    pacienteId?: IntFilter<"Consulta"> | number
    fisioterapeutaId?: IntFilter<"Consulta"> | number
  }

  export type ConsultaCreateWithoutFisioterapeutaInput = {
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutFisioterapeutaInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacienteId: number
  }

  export type ConsultaCreateOrConnectWithoutFisioterapeutaInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput>
  }

  export type ConsultaCreateManyFisioterapeutaInputEnvelope = {
    data: ConsultaCreateManyFisioterapeutaInput | ConsultaCreateManyFisioterapeutaInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaUpsertWithWhereUniqueWithoutFisioterapeutaInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutFisioterapeutaInput, ConsultaUncheckedUpdateWithoutFisioterapeutaInput>
    create: XOR<ConsultaCreateWithoutFisioterapeutaInput, ConsultaUncheckedCreateWithoutFisioterapeutaInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutFisioterapeutaInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutFisioterapeutaInput, ConsultaUncheckedUpdateWithoutFisioterapeutaInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutFisioterapeutaInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutFisioterapeutaInput>
  }

  export type PacienteCreateWithoutConsultasInput = {
    nome: string
    email: string
    cpf: string
    telefone?: string | null
    dataNascimento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone?: string | null
    dataNascimento: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteCreateOrConnectWithoutConsultasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
  }

  export type FisioterapeutaCreateWithoutConsultasInput = {
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FisioterapeutaUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    crm: string
    especialidade: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FisioterapeutaCreateOrConnectWithoutConsultasInput = {
    where: FisioterapeutaWhereUniqueInput
    create: XOR<FisioterapeutaCreateWithoutConsultasInput, FisioterapeutaUncheckedCreateWithoutConsultasInput>
  }

  export type PacienteUpsertWithoutConsultasInput = {
    update: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConsultasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FisioterapeutaUpsertWithoutConsultasInput = {
    update: XOR<FisioterapeutaUpdateWithoutConsultasInput, FisioterapeutaUncheckedUpdateWithoutConsultasInput>
    create: XOR<FisioterapeutaCreateWithoutConsultasInput, FisioterapeutaUncheckedCreateWithoutConsultasInput>
    where?: FisioterapeutaWhereInput
  }

  export type FisioterapeutaUpdateToOneWithWhereWithoutConsultasInput = {
    where?: FisioterapeutaWhereInput
    data: XOR<FisioterapeutaUpdateWithoutConsultasInput, FisioterapeutaUncheckedUpdateWithoutConsultasInput>
  }

  export type FisioterapeutaUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FisioterapeutaUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateManyPacienteInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fisioterapeutaId: number
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fisioterapeuta?: FisioterapeutaUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fisioterapeutaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fisioterapeutaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateManyFisioterapeutaInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacienteId: number
  }

  export type ConsultaUpdateWithoutFisioterapeutaInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutFisioterapeutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaUncheckedUpdateManyWithoutFisioterapeutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
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