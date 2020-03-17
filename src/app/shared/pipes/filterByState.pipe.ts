import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filterByState"
})
export class FilterByStatePipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== 'Todos') {
      return select
        ? items.filter(item => item['productQuatity'] === select)
        : items;
    } else {
      return items;
    }
  }
}
