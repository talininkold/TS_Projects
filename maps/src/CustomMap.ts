import { User } from "./User"

export interface Mappable {
  location: {
    lat: number,
    lng: number
  }
  getInfoPopUp(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const popUp = new google.maps.InfoWindow({
      content: mappable.getInfoPopUp()
    })

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
    
    marker.addListener('click', () => {
      popUp.open(this.googleMap, marker)
    })
  }
}