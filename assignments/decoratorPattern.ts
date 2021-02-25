
abstract class courses {
    public description : string;
    public getDescription() {
        return this.description;
        
    }
    public abstract yearsofStudy () : number;
}

class  Engineering extends courses {
    public description = "Engineering"
    public yearsofStudy(): number{
        return 4;
    }
}

class Architecture extends courses {
    public description = "Architecture";
    public yearsofStudy() : number {
        return 5;
    }
}

abstract class courseoptions extends courses {
    hybridcourse: courses;
    public abstract getDescription() : string;
    public abstract yearsofStudy(): number;
}

class agritect extends courseoptions {
    hybridcourse : courses;

    constructor (hybrid : courses){
        super();
        this.hybridcourse = hybrid;
    }
    public getDescription(): string{
        return this.hybridcourse.getDescription() + " offered alongside Agriculture"
    }
    public yearsofStudy () : number {
        return this.hybridcourse.yearsofStudy() + 3 
    } 
}

class doceng extends courseoptions {
    hybridcourse : courses;

    constructor (hybrid: courses){
        super();
        this.hybridcourse = hybrid;

    }
    public getDescription(): string{
        return this.hybridcourse.getDescription() + " offered alongside medicine"
    }
    public yearsofStudy () : number {
        return this.hybridcourse.yearsofStudy() + 6
    } 
}

let hybridA = new Architecture();
hybridA = new agritect(hybridA);
console.log (hybridA.getDescription());
console.log (hybridA.yearsofStudy());

let hybridB = new Engineering();
hybridB = new doceng(hybridB);
console.log (hybridB.getDescription());
console.log (hybridB.yearsofStudy());