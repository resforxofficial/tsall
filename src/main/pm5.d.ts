declare interface list extends Array<any> {}

declare interface int extends Number {}

export declare interface dict<T> { [key: string | number]: T }

export declare var list: list;

export declare var int: int;
