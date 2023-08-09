/**
 * Converts a value from its representation in "from" range to "to" range. If the third argument is missing, "from" defaults to [0, 1].
 */
export declare const map: Map;
interface Map {
    (value: number, from: [number, number], to: [number, number]): number;
    (value: number, to: [number, number]): number;
}
export {};
