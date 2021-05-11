interface Ens<K extends keyof Ens<K, V>, V> {
    [key: string]: V
}

export function ensure<K extends keyof Ens<K, V>, V>(object: Ens<K, V>, condition: (it: V) => boolean = it => !!it) {
    const entries = Object.entries(object)
    if (entries.length !== 1) {
        throw new Error(`ENSURE: Illegal usage of 'ensure' function!`)
    }
    const [entry] = entries
    if (!entry[1] || !condition(entry[1])) {
        throw new Error(`ENSURE: Illegal argument: ${entry[0]} = ${entry[1]} did not meet the given requirements!`)
    }
}
