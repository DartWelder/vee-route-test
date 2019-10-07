import { IListItem, ItemFlagsEnum } from "../constants";

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
                flags: Items.generateFlags()
            });
        }
        return list;
    }

    static generateFlags = (getAll: boolean = false): ItemFlagsEnum[] => {
        let flags = new Array<ItemFlagsEnum>();
        Object.keys(ItemFlagsEnum).forEach((flag) => {
            if (getAll) {
                flags.push(flag as ItemFlagsEnum);
                return;
            }
            if (Math.random() <= 0.5) {
                flags.push(flag as ItemFlagsEnum);
            }
        });
        return flags;
    }
}

export const itemList = new Items().list;