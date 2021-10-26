export interface JSONobject {
    name: string;
    path: string;
    children?: JSONobject[] | undefined
}