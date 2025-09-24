const DesktopNav = () => {
  return (
    <div className="flex p-16 gap-14 text-white items-center">
        <div className="">
          <img src="/images/logo.svg" alt="logo" width={82} />
        </div>
        <div className="">
          <ul className="flex gap-8 text-xl">
            <li className="hover:cursor-pointer">h<span className="hover:underline hover:underline-offset-12">om</span>e</li>
            <li className="hover:cursor-pointer">s<span className="hover:underline hover:underline-offset-12">ho</span>p</li>
            <li className="hover:cursor-pointer">a<span className="hover:underline hover:underline-offset-12">bou</span>t</li>
            <li className="hover:cursor-pointer">co<span className="hover:underline hover:underline-offset-12">nta</span>ct</li>
          </ul>
        </div>
    </div>
  )
}

export default DesktopNav