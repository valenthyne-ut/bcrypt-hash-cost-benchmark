/** 
 * Rewrite of
 * https://www.php.net/manual/en/function.password-hash#example-2914
 * 
 * This code will benchmark your server to determine how high of a cost you can
 * afford. You want to set the highest cost that you can without slowing down
 * you server too much. 10 is a good baseline, and more is good if your servers
 * are fast enough. The code below aims for ≤ 350 milliseconds stretching time,
 * which is an appropriate delay for systems handling interactive logins.
 * 
*/

import { hashSync } from "bcrypt";

// target time in milliseconds
const target = 350;

let cost = 10;
let startTime, endTime, timeCost;

do {
	cost++;
	startTime = new Date().getTime();
	hashSync("test", cost);
	endTime = new Date().getTime();
	timeCost = endTime - startTime;

	console.log(`${timeCost}ms for a cost of ${cost}`);
} while(timeCost < target);