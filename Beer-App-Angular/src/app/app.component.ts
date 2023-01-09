import { Component, EventEmitter } from '@angular/core'
import { BeerService } from './services/beer.service'
import { MatDialog } from '@angular/material/dialog'
import { BeerDetailDialog } from "./dialog/dialog.component"
import { FormBuilder, FormControl, Validators } from "@angular/forms"
import Utils from './utils'
import { MaterialCssVarsService } from "angular-material-css-vars"

export interface Beer {
  id: string
  name: string
  description: string
  image_url: string
  abv: number
}

interface SortChoice {
  value: string,
  viewValue: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  beers: Beer[] = []

  sortChoices: SortChoice[] = [
    {
      value: 'none', viewValue: "None"
    },
    {
      value: 'beers', viewValue: "By beers"
    },
    {
      value: 'abv', viewValue: "By ABV"
    }
  ]

  searchForm = this.formBuilder.group({
    search: '',
    abvMin: new FormControl(2),
    abvMax: new FormControl(6),
    sortChoice: new FormControl('none'),
    favorites: new FormControl(false)
  })

  constructor(private service: BeerService, public dialog: MatDialog, private formBuilder: FormBuilder, public materialCssVarsService: MaterialCssVarsService) {
    const hex = "#2596be"
    this.materialCssVarsService.setPrimaryColor(hex)
  }

  ngOnInit() {
    this.service.getAllBeers()
      .subscribe((response: any) => {
        this.beers = response
      })
  }

  openDialog(name: string, description: string) {
    this.dialog.open(BeerDetailDialog, {
      data: { name: name, description: description },
    })
  }

  formatAbvLabel(value: number): string {
    return `${value}%`
  }

  isFavorite(value: string): boolean {
    return Utils.isFavorite(value)
  }

  addToFavorites(value: string) {
    value = value.toString()
    const key = "favorites"
    let favoritesStr = sessionStorage.getItem(key)
    let favorites
    if (!favoritesStr) {
      favorites = new Set<string>()
    } else {
      favorites = new Set<string>(favoritesStr.split(","))
    }

    favorites.add(value)
    sessionStorage.setItem(key, Array.from(favorites).join(','))
  }

  removeFromFavorites(value: string) {
    value = value.toString()
    const key = "favorites"
    let favoritesStr = sessionStorage.getItem(key)
    let favorites
    if (!favoritesStr) {
      favorites = new Set<string>()
    } else {
      favorites = new Set<string>(favoritesStr.split(","))
    }

    favorites.delete(value)
    sessionStorage.setItem(key, Array.from(favorites).join(','))
  }

  changeFavorite(event: any, beerId: string) {
    console.log(event.selected)
    if (event.selected) {
      this.addToFavorites(beerId)
    } else {
      this.removeFromFavorites(beerId)
    }
  }
}
