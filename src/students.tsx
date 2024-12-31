interface Studentsprops{
      name:string;
      age:number;
      isStudying:boolean;
}


function Students(props:Studentsprops){
    return(
        <div>
            <h1>Students 123</h1>
            <p>Name:{props.name}</p>
            <p>Is Studying:{props.isStudying?"yes":"NO"}</p>
        </div>
    )
}
export default Students;