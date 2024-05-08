import AddIcon from "@mui/icons-material/Add";
import "./floatingAction.css";
import CreatePost from "../createPost/createPost";

function FloatingAction() {
  return (
    <div className="center">
      <button className="add row center">
        add product <AddIcon />
      </button>
    </div>
  );
}

export default FloatingAction;
