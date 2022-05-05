export class Quote {
    constructor(public id: number, public author: string, public quote: string,public submited_by: string, public upvotes:number = 0, public downvotes: number = 0, public created: Date,public best:boolean=false){}
}
