import { displayedUserInformation } from "@/utils/data/displayedUserInformation";
import "./userProfile.css";
import { ArrowDropDownSharp, ExpandMore, Message, PersonAddAlt } from "@mui/icons-material";
import { Button } from "@mui/material";

let print = console.log();


export default function UserProfile() {
    return <div className="profile-box">
        <div className="inner-profile-box">
            <img className="background-picture" src={displayedUserInformation.backgroungPicture} />
            <div className="information-box">
                <img className="profile-picture" src={displayedUserInformation.profilePicture}></img>
                <div className="personal-information">
                    <h1>{`${displayedUserInformation.firstName}  ${displayedUserInformation.lastName}`}</h1>
                    <p>{`${displayedUserInformation.numberOfMutualFreinds} mutual freinds`}</p>
                    <div className="mutual-freinds-pictures">

                        {displayedUserInformation.mutualFreinds.map((freind) => (
                            <ListOfFreindsPictures freind={freind} />
                        ))}

                    </div>



                </div>
                <div className="out-buttons-box">
                    <div className="buttons">
                        <Button className="invite-button" variant="outlined" size="small"><PersonAddAlt />freinds</Button>

                        <Button className="invite-button" variant="contained" size="small" ><Message />messaage</Button>
                    </div>
                    <Button className="expnd-more-button" size="small" ><ExpandMore /></Button>
                </div>
            </div>
            <div className="profile-nav">
                <nav className="rhight-nav">
                    <Button >Posts</Button>
                    <Button >About</Button>
                    <Button >Freinds</Button>
                    <Button >Photos</Button>
                    <Button >Videos</Button>
                    <Button >Check-ins</Button>
                    <Button >More <ArrowDropDownSharp /></Button>
                </nav>
                <Button className="expand-more-button-three-points" size="small">. . .</Button>
            </div>

        </div>
    </div>


}


function ListOfFreindsPictures({ freind }) {
    return (

        <img className="mutual-freind-picture" src={freind.ProfilePicture} />
    )

}



