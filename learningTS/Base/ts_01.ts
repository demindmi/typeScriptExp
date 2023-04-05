// simple typescript function
function toadd(a: number, b: number): number {
  return a + b;
}

let msg: string = "Hello Ts";
console.log(msg);

let heading = document.createElement("h1");
heading.textContent = msg;
document.body.appendChild(heading);

const printStuff = (stuff: string, id: number) => {
  console.log(`id: ${id} - ${stuff}`);
};

printStuff("Banana", 13);
// to compile ts to js run the following command
// tsc ts_01.ts
