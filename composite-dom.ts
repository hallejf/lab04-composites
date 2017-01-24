interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  elementType:string;
  storeInfo:IDomElement[]; 

  constructor(elementType:string) {
    this.elementType = elementType; 
    this.storeInfo = [];
  }

  add(information : IDomElement) {
    this.storeInfo.push(information); 
  }

  print() {

  }
}

class TextNode implements IDomElement {
  private content:string;
  
  constructor(content:string) {
    this.content = content;
  }

  print() {
    console.log(this.content); 
  }
}
