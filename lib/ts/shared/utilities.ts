type Indexable = Record<string | number | symbol, any>;

export function shallowEquals(obj1: Indexable, obj2: Indexable) {
    return (
        Object.keys(obj1).length === Object.keys(obj2).length &&
        Object.keys(obj1).every(key => obj1[key] === obj2[key])
    );
}
