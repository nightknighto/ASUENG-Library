export interface JSONobject {
    name: string;
    link?: string;
    source?: string[];
    children?: JSONobject[] | undefined
    date?: string;
    note?: string;
}