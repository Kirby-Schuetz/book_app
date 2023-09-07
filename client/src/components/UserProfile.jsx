import { getUserProfile } from "../API";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function UserProfile() {
    const [userData, setUserData] = useState([]);

    const navigate = useNavigate();

    const tokenA = useSelector((state) => state.user.token);

    useEffect(() => {
        async function fetchUserProfile() {
            const response = await getUserProfile(tokenA);
            if (response.ok) {
                setUserData(response.data.user);
            } else {
                console.error(error);
                navigate("/AllPosts");
            }
        }
        fetchUserProfile();
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    <h2>{userData.username}</h2>
                    <p>Posts: {postData.user_id.join(', ')}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
       </div>
    );
}


    
