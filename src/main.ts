type One = string;
type Two = string | number;
type Three = "hello";

const a: One = "bye";
const b = a as Two;
const c = a as Three;
console.log(`first  ${b}`);
console.log(`second  ${typeof b}`);

const year = <HTMLElement>document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", `${thisYear}`);
year.textContent = `${thisYear}`;
