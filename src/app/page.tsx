import Image from 'next/image';
import qrcode from '../../public/images/image-qr-code.png';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-light-gray items-center justify-between p-24'>
      <section className='bg-white p-4 rounded-lg w-[300px] text-center'>
        <Image src={qrcode} alt='qr code' className='rounded-lg' />
        <div className='p-2'>
          <h1 className='text-xl font-semibold py-3 text-dark-blue'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-[15px] text-grayish-blue'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
      <footer className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://www.jacobc.co.za'>Jacob chademwiri</a>.
      </footer>
    </main>
  );
}
