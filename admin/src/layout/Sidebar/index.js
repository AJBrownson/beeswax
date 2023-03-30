import {useState} from "react";
import "./styles.css";
import NavLogo from "../../assets/Logo.svg";
import { SidebarLinks } from "./data";
import { AiOutlineLogout } from "react-icons/ai"


const Sidebar = () => {
    const [selected, setSelected] = useState(0)
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={NavLogo} alt="" />
          <span>BeesWax</span>
        </div>

        <div className="menu">
          {SidebarLinks.map((item, index) => {
            return (
              <div className={selected===index?'menuItem active' : 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
                <item.icon />
                <span>{item.title}</span>
              </div>
            );
          })}

          <div className="menuItem">
            <AiOutlineLogout />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
