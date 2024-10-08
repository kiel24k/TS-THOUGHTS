interface User {
    id: number;
    name: string
}

class UserProfile {
    id: number;
    name: string

    constructor(name: string,id: number,){
        this.id = id
        this.name = name
    }
}

const user: User = new UserProfile("Kiel", 23)
console.log(user);
