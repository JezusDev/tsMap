import { faker } from "@faker-js/faker";
import { Mappable } from "../types/mappable";

export class Company implements Mappable {
  /* Объявление полей класса Company */
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string | undefined = "red";

  /* Констурктор класса Company */
  constructor(color?: string) {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.color = color;
  }

  /* Методы класса Company */
  markerContent(): string {
    return `
          <h1>${this.companyName}</h1>
          <p>${this.catchPhrase}</p>
    `;
  }
}
