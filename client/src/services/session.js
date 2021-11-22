import router from "../router";
import { Login, Register } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

const session = {
    user: null,
    messages: [],       // {text: string, type: string }
    toRoute: '/Discover',
    async Register(user){

        try {
            const response = await Register(user)
            if(typeof(response) === "object")
            {
            router.push(this.toRoute);
            this.messages.push({text:'Successfully Registed for username: ' + user.handle, type:"success"})
            NotificationProgrammatic.open({
                duration: 5000,
                message: 'Successfully Registed for username' + user.handle,
                variant: 'success',
                type: 'success',
                closable: true,
    
            })
            }

            
        } catch (error) {
            this.Error(error);
        }
    }, 
    async Login(handle, password){

        try {
            const response = await Login(handle, password);

            this.user = response.user;
    
            router.push(this.toRoute);
                
        } catch (error) {
            this.Error(error);
        }
    },
    async Logout(){

        try {
            this.user = null
            
        } catch (error) {
            this.Error(error);
        }
    },
    Error(error){
        console.error(error);
        const msg = error.msg ?? error;

        this.messages.push({ text: msg, type: 'warning' })
        NotificationProgrammatic.open({
            duration: 2000,
            message: msg,
            variant: 'danger',
            type: 'danger',
            closable: true,

        })

    }
};

export default session;

//export function