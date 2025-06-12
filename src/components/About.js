import User from "./User";

const About=()=>{
    
    return(
        <div className="w-7/12 m-auto">
            <h1 className="m-5 text-center font-bold text-2xl">About Us</h1>
            <User userName="AnveshRacharla"/>
            {/* <User userName="thisismadhav7"/> */}
        </div>
    )
}

export default About;