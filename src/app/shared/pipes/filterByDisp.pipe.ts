import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filterByDisp"
})
export class FilterByDispPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== 'Todos') {
      return select
        ? items.filter(item => item['productState'] === select)
        : items;
      } else {
        return items;
      }
    }
  }


