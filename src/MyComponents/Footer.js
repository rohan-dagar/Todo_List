import React from 'react'

const Footer = () => {
    let footerStyle={
        position: "relative",
        // left:"0",
        // bottom:"0",
        top: "70vh",
        width: "100%"
        // border:"2px solid red"
    }
  return (
    <footer className='bg-dark text-light' >
        <p className="text-center">Copyright &copy; MyTodosList.com</p>
      
    </footer>
  )
}

export default Footer
