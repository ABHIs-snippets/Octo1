import React from "react";
import Usermsg from "./Usermsg"
function Chats() {
    return (
        <>
            <div className="chatContainer ">
                <div className="chatbody">
                        <Usermsg/>
                        <Usermsg/>
                        <Usermsg/>
                        <Usermsg/>
                        <Usermsg/>
                        <Usermsg/>
                </div>
                <form>           
                    <input type="text" placeholder="Type a message" />
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>                 
                </form>

            </div>
            </>
    )
}

export default Chats;