import { IListItem, ItemFlagsEnum } from "./constants";

export class Items {
    list: IListItem[];
    constructor() {
        this.list = this.createList(100);
    }

    createList = (num: Number): IListItem[] => {
        let list = new Array<IListItem>();

        for (let i = 1; i <= num; i++) {
            list.push({
                name: `Item${i}`,
                flags: this.generateFlags()
            });
        }
        return list;
    }

    generateFlags = (): ItemFlagsEnum[] => {
        let flags = new Array<ItemFlagsEnum>();
        Object.keys(ItemFlagsEnum).forEach((flag) => {
            if (Math.random() <= 0.5) {
                flags.push(flag as ItemFlagsEnum)
            }
        });
        return flags;
    }
}