import { GrTrash, GrEdit } from "react-icons/gr";

function Recipe() {
  return (
    <div>
      <h1 className="recipe-title">Recipe name</h1>

      Recipe <GrEdit/><GrTrash/>

    </div>
  )
}

export default Recipe