

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-orange-200 fixed w-full bottom-0 text-gray-400 backdrop-blur-lg flex justify-center">
      <p>&copy; {currentYear} Code2Sense. All rights reserved to  <a className="underline underline-offset-2" href="https://yuvrajsinghportfolio.vercel.app/"> Yuvraj Singh</a>.</p>
    </footer>
  )
}

export default Footer
