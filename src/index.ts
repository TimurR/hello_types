import { distanceArray, distanceGeneric } from "./composition/tuples";
import { distanceRecord } from "./composition/record";
import { checkInvariants } from "./composition/invariants";

document.getElementById("app").innerHTML = `
<h1>Hello Types!</h1>
<div>
  Some patterns and best practices of Typescript's
</div>
`;

console.log("tuples", distanceArray([1, 0], [5, 2]));
console.log("records", distanceRecord({ x: 1, y: 2 }, { x: 2, y: 5 }));
console.log("check invariants", checkInvariants(5, 20));
