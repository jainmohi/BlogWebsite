import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sideImg" src="images/about.jpg" alt=""/>
            <p>Hello! I'm Mohi Jain, an aspiring software developer with a passion for creating innovative solutions 
              and exploring new technologies. As a female in the field, I'm dedicated to promoting diversity and 
              inclusivity in the tech industry.As an aspiring software developer, my mission is to leverage my skills
              and knowledge to create meaningful applications that have a positive impact on people's lives. I believe
              in the power of technology to drive change and improve the world we live in. I am eager to contribute 
              to projects that align with this vision and make a difference.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidevarList">
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Food</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
              <i className=" sidebarIcon fa-brands fa-facebook"></i>
              <i className=" sidebarIcon fa-brands fa-instagram"></i>
              <i className=" sidebarIcon fa-brands fa-twitter"></i>
              <i className=" sidebarIcon fa-brands fa-pinterest"></i>
        </div>
        </div>
    </div>
  )
}
