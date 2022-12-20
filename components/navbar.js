// See how we use <Link /> instead of <a>
// That is because Next.js provides some special features
// To allow client-side route navigation
import Link from "next/link";
import Image from "next/image";
import lobbyLogo from '../lobby-logo.png'
// import Image from "next/image";
// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="row navbar-items">
          <div className="item navbar-logo">
              <Link href="https://lobby99.org.il">
                <Image src={lobbyLogo} alt="lobby 99" width={50} height={50}/>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
