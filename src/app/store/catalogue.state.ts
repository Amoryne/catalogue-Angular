import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch, updateItem } from "@ngxs/store/operators";
import { Catalogue } from "./catalogue.actions";
import { CatalogueModel } from "./catalogue.model";
import { Product } from "./types/product";

//valeurs par défaut
const defaultValue: CatalogueModel = {
    items: []
};
// on définis un state qui s'appelle catalogue qui est de type cataloguemodel
@State<CatalogueModel>({
    name: 'catalogue',
    defaults: defaultValue
})
// logique du state
@Injectable()
export class CatalogueState {

    @Selector()
    static items(state: CatalogueModel): Product[] {
        return state.items
    }
    @Selector()
    static quantity(state: CatalogueModel): number {
        return state.items.length
    }
    @Action(Catalogue.AddItem)
    addItem(ctx: StateContext<CatalogueModel>, payload: Catalogue.AddItem) {
        const items = ctx.getState().items
        const itemIndex = items.findIndex(item => item.id === payload.item.id)
        if (itemIndex > -1) {
            const quantity: number = items[itemIndex].quantity + 1
            ctx.setState(
                patch({
                    items: updateItem<Product>((orderItem => orderItem?.id === payload.item.id), patch({ quantity }))
                })
            );

        } else {
            payload.item.quantity = 1
            ctx.setState(
                patch({
                    items: append([payload.item])
                })
            )
        }
    }
}