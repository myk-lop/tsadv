// const names: Array<string> = ["Max", "Nik"]; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const a = { name: "Max" };
const b = { age: "30" };

const mergedObject = merge(a, b);

mergedObject.age;

console.log(mergedObject);

console.log(a);
console.log(b);

///////

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sport", "Food"]));

//////

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Moooo" }, "name"));

//////

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Man");
textStorage.addItem("Ram");
textStorage.addItem("Thuoi");
textStorage.removeItem("Man");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// /////....
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

/////

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

////

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
