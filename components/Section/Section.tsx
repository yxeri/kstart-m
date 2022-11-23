interface props{
    children:any;
    title:string;
}

export default function Section(props:props){

    return(
        <section>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}