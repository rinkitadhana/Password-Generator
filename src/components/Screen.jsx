import Footer from "./Footer"
import Header from "./Header"

export default function Screen({ children }) {
  return (
    <div className=" border border-zinc-500 rounded-lg mt-4 w-[600px] py-4  mx-auto text-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
