import founder from '@/public/images/image-founder.webp'
import Image from 'next/image'
import { GreenButton } from './GreenButton'

export type ApplyBlockProps = {
    className?: string;
}

export default function ApplyBlock(props: ApplyBlockProps) {
    return (
        <div className={`flex flex-col items-center ${props.className}`}>
            <Image src={founder} width={281} height={281} alt="founder" /> 
            <div className='flex flex-col bg-dark-purple p-8 w-[343px] -mt-14'>
                <h2 className=' font-fraunces font-semibold text-[32px] text-center text-white'>Be the first to test</h2>
                <p className='text-white text-center pt-4'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                <GreenButton href='#' classname='mt-6'>Apply for access</GreenButton>
            </div>
        </div>
    )
}