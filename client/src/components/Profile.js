import UserRecipes from "./UserRecipes";
import UserPreferences from "./UserPreferences";
import {Link} from "react-router-dom"

function Profile(props) {
  const { userID } = props
  
  return (
    <section className="profile">
      <div className="profile-message"><Link style={{color:"#32324D"}} to="/">Back to Homepage</Link></div>
      <UserRecipes />
      <UserPreferences userID={userID} />
    </section>
  )

}

export default Profile;