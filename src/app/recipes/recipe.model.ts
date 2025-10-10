export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public imgAlt: string;

  constructor(name: string, desc: string, imagePath: string, imgAlt: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.imgAlt = imgAlt;
  }
}