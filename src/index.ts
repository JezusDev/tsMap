import { User } from "./User/User";
import { Company } from "./Company/Company";
import { Map } from "./Map/Map";

/* const a = new ITimer("#map");
a.start();
setTimeout(() => {
  a.stop();
}, 10000);
 */

const user = new User();
const company = new Company();
const map = new Map("map");

map.addMarker(user);
map.addMarker(company);
