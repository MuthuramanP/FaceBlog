import { locationDataModel } from './locationDataModel'
export class categoryDataImgModel {
    public imageURL: string;
    public location: locationDataModel;

    constructor(imageURL: string, location: locationDataModel) {
        this.imageURL = imageURL;
        this.location = location;
    }
}