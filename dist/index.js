"use strict";
class UserProfile {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
}
const user = new UserProfile("Kiel", 23);
console.log(user);
