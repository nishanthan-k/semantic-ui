import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const AllRoutes = () => {
  return (
    <div>
      <Link to="button">
        <Button content="ButtonRoutes" />
      </Link>
    </div>
  )
}

export default AllRoutes