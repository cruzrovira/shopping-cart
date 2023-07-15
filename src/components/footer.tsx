import React from "react"
import "./footer.css"
type Props = {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="footer">
      <h4>
        Prueba técnica en react *- <span> @cruzrovira</span>
      </h4>
      <h5>Shopping cart con useContrext & useReducer</h5>
    </footer>
  )
}

export default Footer
