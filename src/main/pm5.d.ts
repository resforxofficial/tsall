declare interface list extends Array<any> {}

declare interface int extends Number {}

export declare interface dict<T> extends Record<any, T> {}

declare interface str extends String {}

export declare var list: list;

export declare var int: int;

export declare var str: str;