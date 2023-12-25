import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const ButtonRoutes = () => {
  return (
    <div>
      <Link to="/button/GeneralBtn">
        <Button primary content="General Btn" />
      </Link>
      <Link to="/button/AnimatedBtn">
        <Button content="Animated Button" />
      </Link>
    </div>
  )
}

export default ButtonRoutes