// Object - seal

const obj = {
    name: 'john', 
    age: 29, 
    job: 'designer'
  };
  
  // It doesn't let anyone add new properties
  // It doesn't let anyone delete existing properties
  // but it let them update the existing properties

  Object.seal(obj);
  
  obj.name = 'sugam';
  delete obj.name;
  obj.age = "45"
  
  
  console.log(obj);
  