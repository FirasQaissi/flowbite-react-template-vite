type Country = {
    name: {
        common: string;
    },
    capital: string,
    region: string,
    subregion: string,
    cca3: string,
    flags: {
        png: string
    }
}



function Countriess(props: Country) {
    return (



        <div className="text-2xl bg-amber-50 text-center flex flex-col p-3">
            <img src={props.flags.png} alt="" />
            <h1 className="" >{props.name.common}</h1>
            <h5 className="">{props.capital}</h5>

            <p className=""> {props.region}</p>

            <p className="">  {props.subregion}</p>
            <p>{props.cca3}</p>


        </div>

    )
}

export default Countriess