export default class Model {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  get(attribute) {
    return this.attributes[attribute];
  }

  set(attributes) {
    for(let key in attributes){
      if(this.attributes.hasOwnProperty(key)){
        this.attributes[key]=attributes[key];
      }
    }

    return attributes;
  }
}
