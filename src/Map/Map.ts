import { Mappable } from "../types/mappable";

export class Map {
  /* Инициализация полей класса Map */
  private googleMap: google.maps.Map;

  /* Конструктор класса Map */
  constructor(mapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDiv)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  /* Методы класса Map */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
