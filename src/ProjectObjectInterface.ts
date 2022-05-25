export interface ProjectObject {
    name: string;
    //Links to Drive files. Used by the .pdf files
    link?: string;
    //Links to the source Drives. Used by the top-level folders
    source?: string[];
    //The folders & files inside the current directory.
    children?: ProjectObject[]
    //Used by folders & files. Categorizes the items in a page.
    date?: string;
    //Display notes on pages. Is categorized by date.
    note?: noteObject[];
    //Credits to the one in charge of uploading. Used by the top-level folders
    credits?: string[];
    //Used by ButtonLayout to display collections of course names or nested folders. Useful for collecting courses of a single major together.
    buttons?: ProjectObject[]
}

export interface noteObject {
    message: string;
    date: string | undefined;
}