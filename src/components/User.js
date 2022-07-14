import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">N.Floribert</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 72 rue du  Maréchal Leclerc 94410 Saint Maurice
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33787654731">0787654731</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:floribertnt@gmail.com">floribertnt@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default User
