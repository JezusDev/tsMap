import { faker } from "@faker-js/faker";
import { Mappable } from "../types/mappable";

export class User implements Mappable {
  /* Объявление полей класса User */
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string | undefined = "black";

  /* Констурктор класса User */
  constructor(color?: string) {
    this.name = faker.name.fullName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.color = color;
  }

  /* Методы класса User */
  markerContent(): string {
    return `
        <h1>${this.name}</h1>
    `;
  }
}
