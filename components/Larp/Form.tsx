import { FormProvider, useForm } from "react-hook-form";
import { LarpUser } from "../../models/LarpUser";
import Input from "./Input";
import styles from "./Form.module.scss";
import axios from "axios";

export default function Form(){

    const methods = useForm<LarpUser>({mode: 'onTouched'});

    async function onSubmit(data:LarpUser){

        let res = await axios.post('http://localhost:3000/api/larp', {
            data:{
                user:{
                    username: data.username,
                    password: data.password,
                    // offName: data.username
                }
            }
        });

        console.log(res);
        
        methods.reset();
    }

    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name="username" label="User name" type="text" minLength={2} errorMsg="Please enter your username."></Input>
                <Input name="password" label="Password" type="password" minLength={10} errorMsg="Your password need to be at least 10 characters long."></Input>

                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </FormProvider>
    );
}