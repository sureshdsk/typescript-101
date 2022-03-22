let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown; // error
let s2: string = vUnknown as string;

let pageNumber: string = "10"
// let pageNumberInt: number = pageNumber as number; // error
let pageNumberInt: number = (pageNumber as unknown) as number;