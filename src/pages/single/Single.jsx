import Sidebar from "../../componenets/sidebar/Sidebar"
import SinglePost from "../../componenets/singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
