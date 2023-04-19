import { Product } from "./types/product";

export namespace Catalogue{
    export class AddItem {
        static readonly type = '[Catalogue] AddItem';
        constructor(public item: Product){}
    }
}