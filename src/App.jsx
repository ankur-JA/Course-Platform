import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import UserSignin from "./components/UserSignin.jsx";
import UserSignup from "./components/UserSignup.jsx";
import UserCourses from "./components/UserCourses.jsx";
import PurchasedCourses from "./components/PurchasedCourses.jsx";
import Appbar from "./components/Appbar.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {Landing} from "./components/Landing.jsx";
import { userState } from "./store/atoms/user.js";
import {
    RecoilRoot,
    useSetRecoilState
} from 'recoil';
import axios from "axios";
import {BASE_URL} from "./config.js";
import {useEffect} from "react";

function App() {
    return (
        <RecoilRoot>
            <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee"}}
            >
                    <Router>
                        <Appbar />
                        <InitUser />
                        <Routes>
                            <Route path={"/addcourse"} element={<AddCourse />} />
                            <Route path={"/course/:courseId"} element={<Course />} />
                            <Route path={"/courses"} element={<Courses />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/user/signin"} element={<UserSignin />} />
                            <Route path={"/user/signup"} element={<UserSignup />} />
                            <Route path={"/user/courses"} element={<UserCourses />} />
                            <Route path={"/purchased"} element={<PurchasedCourses />} />
                            <Route path={"/"} element={<Landing />} />
                        </Routes>
                    </Router>
            </div>
        </RecoilRoot>
    );
}


function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const adminRes = await axios.get(`${BASE_URL}/admin/me`, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            if (adminRes.data.username) {
                setUser({ isLoading: false, userEmail: adminRes.data.username, role: 'admin' });
                return;
            }
        } catch (e) {}

        try {
            const userRes = await axios.get(`${BASE_URL}/user/me`, {
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            if (userRes.data.username) {
                setUser({ isLoading: false, userEmail: userRes.data.username, role: 'user' });
                return;
            }
        } catch (e) {}

        setUser({ isLoading: false, userEmail: null, role: null });
    };

    useEffect(() => {
        init();
    }, []);

    return <></>
}

export default App;