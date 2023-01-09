export default class Utils {
  static isFavorite(value: string): boolean {
    value = value.toString()
    const key = "favorites"
    let favoritesStr = sessionStorage.getItem(key)
    let favorites
    if (!favoritesStr) {
      favorites = new Set<string>()
    } else {
      favorites = new Set<string>(favoritesStr.split(","))
    }

    return favorites.has(value)
  }
}
