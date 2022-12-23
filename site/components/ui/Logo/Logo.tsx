import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image
    src="https://res.cloudinary.com/dg7vdpqgu/image/upload/v1671760096/DALLE-Logo-144x144_bybibw.png"
    alt="logo"
    width={50}
    height={50}
  />
)

export default Logo
