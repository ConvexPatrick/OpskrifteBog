export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;


  constructor(name: string, disc: string, imgpath: string) {
    this.name = name;
    this.description = disc;
    this.imgPath = imgpath;
  }
}
