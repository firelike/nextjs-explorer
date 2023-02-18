import Link from "next/link";
import Image from 'next/image'

const  MyButton = ({ href, variant = 'primary', children, appendClass }) =>{
    let className = `mt-8 px-12 py-3 bg-gradient-to-r from-primary-500 to-secondary-600`
        + ' hover:opacity-90 text-xl text-white/90 font-semibold drop-shadow-lg rounded-full';
    if (appendClass) className += ' ' + appendClass;

    return href
        ? <Link className={className} href={href}>{children}</Link>
        : <button type="button" className={className}>{children}</button>
}


export default function Home() {
  return (
    <div
        className={`w-full h-screen flex justify-center items-center overflow-hidden relative bg-black`}>
        <Image
            src={`/images/hero-1920.jpg`}
            alt="Hero Image"
            className="opacity-60 object-cover"
            fill
        />
        <div className="flex flex-col justify-center items-center px-3">
            <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                <span className="text-primary-500">GLOBE EXPLORER</span>
            </h1>
            <p className="mt-5 text-center text-lg text-white opacity-90">Explore the world with us...</p>

            <MyButton href="/countries/unitedstates" appendClass="animate-bounceLight">United States</MyButton>
            <MyButton href="/countries/canada" appendClass="animate-bounceLight">Canada</MyButton>
            <MyButton href="/countries/brazil" appendClass="animate-bounceLight">Brazil</MyButton>


            <MyButton href="/countries" appendClass="animate-bounceLight">All Countries</MyButton>

        </div>



    </div>



  )
}
