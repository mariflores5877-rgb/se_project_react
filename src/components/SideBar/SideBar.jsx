import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

export default function SideBar() {
  const username = "Terrence Tegegne";

  return (
    <aside className="sidebar">
      <img src={avatar} alt="" className="sidebar__avatar" />
      <p className="sidebar__username">{username}</p>
    </aside>
  );
}
