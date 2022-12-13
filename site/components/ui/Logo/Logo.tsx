import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image
    src="https://res.cloudinary.com/dg7vdpqgu/image/upload/v1670285353/Ste_201215_mn0uac.png"
    alt="logo"
    width={70}
    height={40}
  />
)

export default Logo
