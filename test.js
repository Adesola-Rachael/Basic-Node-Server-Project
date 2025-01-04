const person ={
    name : 'bolanale',
    class :'jss3',
    greet(){
        console.log('welcome' + this.name)
    }

}
const printPerson = ({greet})=>{
    console.log(greet())
}

printPerson(person)

