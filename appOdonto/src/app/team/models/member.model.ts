export class MemberModel {
    _id?: string
    name: string
    cmp: string
    age: Number
    title: string
    university: string
    speciality: string

    constructor(name:string, cmp:string, age:Number, title:string, university:string, speciality:string){
        this.name = name
        this.cmp = cmp
        this.age = age
        this.title = title
        this.university = university
        this.speciality = speciality
    }
}