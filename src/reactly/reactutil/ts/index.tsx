import { useRef } from 'react';

// const store = useRef({
//     state: new Map(),
// });

type StoreNode<L> = {
    key: string,
    value: L,
    subscribers: Set<() => void>,
    subscribe: (cb: () => void) => () => void;
    notify: () => void
}

function add<T>(key: string, initialvalue: T): StoreNode<T> {
    const subscribers = new Set<() => void>();
    const value = initialvalue;

    const subscribe = (cb: () => void) => {
        subscribers.add(cb);

        return () => {
            subscribers.delete(cb);
        }
    };

    const notify = () => {
        subscribers.forEach((cb) => cb());
    };

    return {
        key,
        value,
        subscribers,
        subscribe,
        notify
    };
}

// const storeNode = add("username", "hi");
// const cba = () => {
//     console.log("username changed");
// }

// const uns = storeNode.subscribe(cba);
// storeNode.notify();

// uns();