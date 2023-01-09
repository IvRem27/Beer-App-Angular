import { Pipe, PipeTransform } from '@angular/core'
import { Beer } from "./app.component"
import Utils from "./utils"

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    items: Beer[],
    search: string | null | undefined,
    abvMin: number | null | undefined,
    abvMax: number | null | undefined,
    sortChoice: string | null | undefined,
    showFavorites: boolean | null | undefined
  ): any[] {
    let filteredBeers = []
    filteredBeers = items
    if (items && items.length > 0 && (search || abvMin || abvMax)) {
      const regexp = new RegExp(search || "", 'i')
      abvMin = abvMin || 0
      abvMax = abvMax || 56
      filteredBeers = items.filter((item: Beer) => regexp.test(item.name)).filter((item: Beer) => item.abv >= abvMin! && item.abv <= abvMax!)
    }

    if (sortChoice === 'abv') {
      return filteredBeers.sort((a: Beer, b: Beer) => {
        if (a.abv < b.abv) {
          return -1
        }
        if (a.abv > b.abv) {
          return 1
        }
        return 0
      })
    }

    if (sortChoice === 'beers') {
      return filteredBeers.sort((a: Beer, b: Beer) => a.name.localeCompare(b.name))
    }

    if (showFavorites) {
      return filteredBeers.filter((b: Beer) => Utils.isFavorite(b.id))
    }

    return filteredBeers
  }
}
