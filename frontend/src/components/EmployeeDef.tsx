interface Person{
    id:number
    fname:String
    onDelete?: (id:number) => void
}
export default Person;