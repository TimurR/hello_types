import { distanceArray } from "./composition/tuples";

document.getElementById("app").innerHTML = `
<h1>Hello Types!</h1>
<div>
  Some patterns and best practices of Typescript's
</div>
`;

console.log("tuples", distanceArray([1, 0], [5, 2]));
