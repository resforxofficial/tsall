import { int, str } from "../pm5";

export {};

export function set<T extends int | str>(callback: (item: T[]) => void, state: T[]): () => void {
    let _item: T[] = state;

    return () => {
        let _value = _item.join(" ").split("").map(Number);
    }
}