import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail"
import { userRoleState } from "../store/selectors/userRole"

function Appbar({}) {
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const userRole = useRecoilValue(userRoleState);
    const setUser = useSetRecoilState(userState);

    if (userLoading) {
        return <></>
    }

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                {userRole === 'admin' && <>
                    <div style={{marginRight: 10}}>
                        <Button onClick={() => { navigate("/addcourse") }}>Add course</Button>
                    </div>
                    <div style={{marginRight: 10}}>
                        <Button onClick={() => { navigate("/courses") }}>Courses</Button>
                    </div>
                </>}
                {userRole === 'user' && <>
                    <div style={{marginRight: 10}}>
                        <Button onClick={() => { navigate("/user/courses") }}>Browse</Button>
                    </div>
                    <div style={{marginRight: 10}}>
                        <Button onClick={() => { navigate("/purchased") }}>Purchased</Button>
                    </div>
                </>}

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userEmail: null,
                                role: null
                            })
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => { navigate("/signup") }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signin")
                        }}
                    >Signin</Button>
                </div>
                <div style={{marginLeft: 10}}>
                    <Button variant={"contained"} onClick={() => { navigate("/user/signup") }}>User Signup</Button>
                </div>
                <div style={{marginLeft: 10}}>
                    <Button variant={"contained"} onClick={() => { navigate("/user/signin") }}>User Signin</Button>
                </div>
            </div>
        </div>
    }
}

export default Appbar;