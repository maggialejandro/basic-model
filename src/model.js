export default class Model {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  get(attribute) {
    return this.attributes[attribute];
  }

  set(attributes) {
    for(let key in attributes){
      this.attributes[key]=attributes[key];
    }

    return attributes;
  }
}
