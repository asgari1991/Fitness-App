import Logo from '@/assets/Logo.png'
type Props = {}

const Footer = (props: Props) => {
  return (
   <footer className='bg-primary-100 py-16'>
    <div className=' justify-content mx-auto w-5/6 gap-16 md:flex'>
<div className='mt-16 basis-1/2 md:mt-0'>
    <img src={Logo} alt="Logo" />
    <p className='my-5'>
    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
    </p>
    <p>© Evogym All Rights Reserved.</p>
</div>
<div className='mt-16 basis-1/4 md:mt-0'>
    <h4 className='font-bold'>Links</h4>
    <p className='my-5'>Lorem ipsum dolor sit.</p>
    <p className='my-5'>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
</div>
<div className='mt-16 basis-1/4 md:mt-0'>
    <h4 className='font-bold'>Contact Us</h4>
    <p className='my-5'>Lorem ipsum dolor sit amet consectetur.</p>
    <p >+98 863 111 1111</p>
   
</div>
    </div>

   </footer>
  )
}

export default Footer