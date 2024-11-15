export default function Header() {
  return (
    <div className=" flex justify-between mx-4">
      <div className=" group flex cursor-pointer font-bold font-sans text-xl">
        PGx
        <div className=" group-hover:scale-150 transition-transform delay-75">
          🔒
        </div>
      </div>
      <a
        href="https://github.com/rinkitadhana/Password-Generator"
        target="_blank"
        className=" text-blue-500 hover:text-blue-400 underline font-semibold cursor-pointer"
      >
        Star on github
      </a>
    </div>
  )
}
