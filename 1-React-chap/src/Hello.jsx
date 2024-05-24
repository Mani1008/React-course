function Hello() {

    let myName = 'Manish'
    let fullName = () =>{
        return "Manish Kumar"
    }

    return <div>
    <h3>
        Hello this is {fullName()} from the future.
    </h3>
    <h4>
        I {myName} is your Master.
    </h4>
    </div>
}

export default Hello