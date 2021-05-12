interface Ens<K extends keyof Ens<K, V>, V> {
    [key: string]: V;
}
export declare function ensure<K extends keyof Ens<K, V>, V>(object: Ens<K, V>, condition?: (it: V) => boolean): void;
export {};
