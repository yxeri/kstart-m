import { useFormContext } from "react-hook-form";
import { styled } from "../../../../styles/stitches.config";

interface Props{
    name:string;
}

const StyledTextarea = styled('textarea', {
    height:50,
    flexGrow:1,

    resize:'none'
});

export default function Textarea(props:Props){

    const {register} = useFormContext();

    return(
        <StyledTextarea placeholder="Send a message..." {...register(props.name)}>

        </StyledTextarea>
    );
}