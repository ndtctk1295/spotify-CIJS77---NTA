import "./style.css"
import {AiFillPlayCircle} from  "react-icons/ai"
const Avatar = () => {
    const AvatarList = [
        {
            id: "1",
            name: "Ed Sheeran",
            image: "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
        },
        {
            id: "2",
            name: "Justin Bieber",
            image: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
        },
        {
            id: "3",
            name: "Taylor Swift",
            image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
        }
    ]
    return(
        <div className="avatars">
            
            {AvatarList.map((avatar) => (
                <li className="avatar-list" style={{display: "flex", flexDirection:"column", position:"relative", alignItems:"center", justifyContent:"center"}}>
                    <img src={avatar.image} alt={avatar.name} className="profile-picture"></img>
                    <AiFillPlayCircle className="play-icon" style={{position:"absolute", fontSize:"40px", cursor:"pointer", marginBottom: "20%", transition: ".3s"}}/>
                    <h4>{avatar.name}</h4>
                </li>
            ))}

        </div>
    )
}

export default Avatar;