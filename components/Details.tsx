import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import Donation from './Donation'
import { CharityStruct, SupportStruct } from '@/utils/type.dt'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { globalActions } from '@/store/globalSlices'
import { useAccount } from 'wagmi'
// @ts-ignore
import ShareLink from 'react-twitter-share-link'

interface ComponentProp {
  charity: CharityStruct
  supports: SupportStruct[]
}

const Details: React.FC<ComponentProp> = ({ charity, supports }) => {
  const { address } = useAccount()
  const dispatch = useDispatch()
  const { setSupportModal, setDonorModal, setBanModal } = globalActions

  return (
    <div className="flex flex-col w-full md:w-2/3 space-y-6">
      <h4 className="text-4xl font-semibold capitalize">{charity?.name}</h4>
      <div className="w-full h-[500px] relative">
        <Image
          layout="fill"
          src={charity?.image}
          alt="donation"
          className="rounded-xl object-cover"
        />
      </div>

      <p className="sm:flex justify-start items-center sm:space-x-1">

        <span className="flex">
          <MdCheckCircle size={25} className="text-green-600" />
          <a target="_blank" href={charity.profile} className="underline">
            Learn more
          </a>
        </span>
      </p>

      <hr className="border-t border-gray-300" />

      <p>{charity?.description}</p>
      <div className="flex justify-start items-center space-x-4">
        <button
          className="border border-gray-300 py-3 px-20 rounded-lg
          transition-all duration-300 ease-in-out
         hover:bg-gray-100"
         onClick={() => dispatch(setDonorModal('scale-100'))}
        >
          Donate
        </button>
        <ShareLink link={'https://letsfundcharity.vercel.app/donations/' + charity.id} 
              text=" 🌟 Imagine a world where every child has access to education! You can help make this a reality. Even a small contribution to our charity project can ignite dreams and change lives. Join us in creating a brighter future! ✨" 
              hashtags="Linea MakeADifference">
              {(link: string | undefined) => (
                
                <button
                className="border border-gray-300 py-3 px-20 rounded-lg
                transition-all duration-300 ease-in-out
               hover:bg-gray-100"
              > 

                  <a href={link} target="_blank" rel="noreferrer">Share</a></button>
                  )}
            
        </ShareLink>
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <h4 className="font-semibold text-lg mb-1">Words of support ({supports.length})</h4>
        <p className="mb-4 text-gray-600">Please donate to share words of support.</p>

        <div className="flex flex-col space-y-10">
          {supports.map((support: any, i: number) => (
            <Donation comment support={support} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
