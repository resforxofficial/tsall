export declare interface list extends Array<any> {}

export declare type int = number;

export declare interface dict<T> extends Record<any, T> {}

export declare type str = string;

export declare type char = str;

export declare type float = number;

export declare interface floatArray extends Array<float> {}

export declare type None = null;

export declare type bool = boolean;

export declare interface listdict<T> extends Record<any, T[]> {}

export declare interface dictdict<T> extends Record<any, dict<T>> {}

export declare interface typelist<T> extends Array<T> {}