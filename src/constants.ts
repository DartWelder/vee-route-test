export enum ItemFlagsEnum {
    flower = 'flower',
    heart = 'heart',
    sun = 'sun',
    flash = 'flash'
}

export interface IListItem {
    name: string,
    flags: ItemFlagsEnum[]
}