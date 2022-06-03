const jack = {
    id: "",
    name: "",
    hasDrivingLicense: true,
    isCitizen: true,
    children:[]
};

export default class Citizen {
    
    constructor(citizen = jack) {
        this.id = citizen.id;
        this.name = citizen.name;
        this.hasDrivingLicense = citizen.hasDrivingLicense;
        this.isCitizen = citizen.isCitizen;
        this.children = citizen.children;
    }
    
}
