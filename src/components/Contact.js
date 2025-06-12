
const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl m-2 p-2">Contact Us</h1>
            <form>
                <input type="text" className="p-2 m-2 border" placeholder="name"></input>
                <input type="text" className="p-2 m-2 border" placeholder="message"></input>
                <button className="p-2 m-2 border rounded-lg bg-neutral-200">Submit</button>
            </form>
        </div>
    )
}

export default Contact;