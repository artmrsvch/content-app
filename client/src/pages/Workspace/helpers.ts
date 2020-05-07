import { SelectProductType } from './ProductTable';
import { ISelectParams } from './SelectedListProducts/Params';

const toggleChecked = (target: Node & ParentNode, isChecked: boolean): void => {
  const checkbox: HTMLInputElement = target.firstElementChild!.firstElementChild!.firstElementChild!
    .firstElementChild! as HTMLInputElement;

  isChecked ? (checkbox.checked = true) : (checkbox.checked = false);
};

export const selectAllCheckboxAndReturnProduct = (
  target: Node & ParentNode,
  isChecked: boolean
): SelectProductType[] => {
  const productList: HTMLCollection = target.children;
  const checkedProducts: SelectProductType[] = [];

  for (let i = 1; i < productList.length; i++) {
    toggleChecked(productList[i], isChecked);

    isChecked &&
      checkedProducts.push({
        name: productList[i].children[2].textContent,
        sku: productList[i].children[3].textContent!,
      });
  }

  return checkedProducts;
};

export const selectAllCheckboxAndReturnParams = (
  target: Node & ParentNode,
  isChecked: boolean
): ISelectParams[] => {
  const productList: HTMLCollection = target.children;
  const checkedProducts: ISelectParams[] = [];

  for (let i = 1; i < productList.length; i++) {
    toggleChecked(productList[i], isChecked);

    isChecked &&
      checkedProducts.push({
        sku: productList[i].children[3].textContent!,
      });
  }

  return checkedProducts;
};

export const copyToBuffer = (target: HTMLElement): void => {
  let range = new Range();

  range.selectNodeContents(target);
  document.getSelection()!.removeAllRanges();
  document.getSelection()!.addRange(range);

  document.execCommand('copy');
};

export const searhParent = (target: any): HTMLElement => {
  return target.classList.contains('product') ? target : searhParent(target.parentNode);
};

export const addLinkToProduct = (products: SelectProductType[]): ISubmitProducts[] => {
  const baseUrl = 'http://allo.ua/catalog/product/show?sku=';
  const submitProducts: ISubmitProducts[] = products.map((product) => {
    return { ...product, link: `${baseUrl}${product.sku}` };
  });

  return submitProducts;
};

export interface ISubmitProducts extends SelectProductType {
  link: string;
}
