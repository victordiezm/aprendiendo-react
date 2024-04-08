import './Footer.css'

export function Footer ({filters}) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters)
      }
      {
        /*
      <h4>Prueba técnica de React * -</h4>
      <span>Victor D.</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
      */
      }
    </footer>
  )
}