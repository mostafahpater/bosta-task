import {  useFormik } from 'formik';
import React, {  useEffect, useState } from 'react'
import { FaCheck, FaCircle, FaFloppyDisk, FaMagnifyingGlass, FaRegCircle, FaTruckFast, FaTruckRampBox } from "react-icons/fa6";
import { GoPackageDependents ,GoPackage} from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { getTrackingWithNum } from '../../redux/tracking/TrackingSlice';
import  strings  from '../../traslate/Translate';
import Container from '../../components/global/Container';
import ReactSlider from 'react-slider';
const Tracking = ({language}) => {
    const { trackingData, loading, error } = useSelector((state) => state.tracking);
      const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };
      const shipmentCreated =trackingData?.TransitEvents?.find((element)=>element.state==="TICKET_CREATED")
      const shipmentReceived =trackingData?.TransitEvents?.find((element)=>element.state==="PACKAGE_RECEIVED")
      const shipmentOutForDelivery =trackingData?.TransitEvents?.find((element)=>element.state==="OUT_FOR_DELIVERY")
      const shipmentDelivered =trackingData?.TransitEvents?.find((element)=>element.state==="DELIVERED")
  return (
    <div>
        <Container>
        {loading&&<div className="text-center pt-60">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>}
       {(trackingData.length!=0&&!loading)&& <div >
        
            <div className=' mt-10 px-5 border border-gray-200 border-solid rounded-xl'>
            <div className='divide-y flex items-center justify-between'>

                <div>
                    <p className=' text-gray-400 text-base'>{strings.shipmentNumber} <span className='ml-1 '>{trackingData.TrackingNumber}</span></p>
                    <p className={`text-lg ${(trackingData?.CurrentStatus?.state==="CANCELLED")?'text-primary'
                    :(trackingData?.CurrentStatus?.state==="DELIVERED_TO_SENDER")?'text-primary'
                    :(trackingData?.CurrentStatus?.state==="DELIVERED")?'text-green-600':null}`}>
                    {(trackingData?.CurrentStatus?.state==="CANCELLED")?strings.cancelled
                    :(trackingData?.CurrentStatus?.state==="DELIVERED_TO_SENDER")?strings.deliverdToSender
                    :(trackingData?.CurrentStatus?.state==="DELIVERED")?strings.delivered:null}</p>
                </div>
                <div>
                    <p className='text-gray-400 text-base'>{strings.lastUpdate}</p>
                    <p className='text-lg'>{(new Date(trackingData?.CurrentStatus?.timestamp)).toLocaleDateString(`${strings.getLanguage()==='en'?'en-GB':'ar-EG'}`, DATE_OPTIONS)}</p>
                   
                </div>
                <div>
                    <p className='text-gray-400 text-base'>{strings.nameOfMerchant}</p>
                    <p className='text-lg'>{trackingData?.provider}</p>
                </div>
                <div>
                    <p className='text-gray-400 text-base'>{strings.DeliveryDateIsOver}</p>
                    <p className='text-lg'>{(new Date(trackingData?.PromisedDate)).toLocaleDateString(`${strings.getLanguage()==='en'?'en-GB':'ar-EG'}`, DATE_OPTIONS)}</p>
                </div>
                    </div>
                
<div className=" mx-auto my-4 border-b-2 pb-4">	
	<div className="flex pb-3">
		<div className="flex-1">
		</div>

		<div className="flex-1">
			<div className={`w-10 h-10 ${shipmentCreated?'bg-green-500':'border-2 border-solid border-gray-200'} mx-auto rounded-full text-lg text-white flex items-center`}>
				<span className="text-white text-center w-full mt-2">{shipmentCreated?<FaCheck className='w-full fill-current text-white'/>:<GoPackage className='w-full fill-current text-gray-700'/>}</span>
			</div>
		</div>


		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div className={`${shipmentReceived?'bg-green-300':null} text-xs leading-none py-1 text-center text-gray-500 rounded w-[100%]`} ></div>
			</div>
		</div>
	
		
		<div className="flex-1">
        <div className={`w-10 h-10 ${shipmentReceived?'bg-green-500':'border-2 border-solid border-gray-200'} mx-auto rounded-full text-lg text-white flex items-center`}>
				<span className="text-white text-center w-full mt-2">{shipmentReceived?<FaCheck className='w-full fill-current text-white'/>:<GoPackageDependents className='w-full fill-current text-gray-700'/>}</span>
			</div>
		</div>
	
		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className={`${shipmentOutForDelivery?'bg-green-300':null} text-xs leading-none py-1 text-center text-gray-500 rounded w-[100%]`} ></div>
			</div>
		</div>
	
		<div className="flex-1">
        <div className={`w-10 h-10 ${shipmentOutForDelivery?'bg-green-500':'border-2 border-solid border-gray-200'} mx-auto rounded-full text-lg text-white flex items-center`}>
				<span className="text-gray-700 text-center w-full mt-2">{shipmentOutForDelivery?<FaCheck className='w-full fill-current text-white'/>:<FaTruckFast className='w-full fill-current white'/>}</span>
			</div>
		</div>
	
	
		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className={`${shipmentDelivered?'bg-green-300':null} text-xs leading-none py-1 text-center text-gray-500 rounded w-[100%]`} ></div>
			</div>
		</div>


		<div className="flex-1">
        <div className={`w-10 h-10 ${shipmentDelivered?'bg-green-500':'border-2 border-solid border-gray-200'} mx-auto rounded-full text-lg text-white flex items-center`}>
				<span className="text-gray-700 text-center w-full mt-2">{shipmentDelivered?<FaCheck className='w-full fill-current text-white'/>:<FaFloppyDisk className='w-full fill-current white'/>}</span>
			</div>
		</div>
	
	
		<div className="flex-1">
		</div>		
	</div>
	
	<div className="flex text-xs content-center text-center">
		<div className="w-1/4">
			{strings.ticketCreated}
		</div>
		
		<div className="w-1/4">
			{strings.packageReceived}
		</div>
		
		<div className="w-1/4">
			{strings.outForDelivery}
		</div>
		
		<div className="w-1/4">
			{strings.delivered}
		</div>			
	</div>
</div>
            </div>
            <div>
               
            <div className='flex gap-5'>

                <div className="relative  w-full basis-2/3">
                <p>{strings.shipmentDetails}</p>
                <table className={`border-collapse w-full text-sm  text-gray-500 rounded shadow-md overflow-hidden ${language==='en'?'text-left':'text-right'}`}>
                <thead className="text-sm text-gray-700 uppercase bg-gray-100 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {strings.theBranch}
                </th>
                <th scope="col" className="px-6 py-3">
                    {strings.history}
                </th>
                <th scope="col" className="px-6 py-3">
                    {strings.time}
                </th>
                <th scope="col" className="px-6 py-3">
                    {strings.details}
                </th>
            </tr>
        </thead>
        <tbody>
            {trackingData?.TransitEvents?.map((item,index)=>(
                <tr key={index} className="bg-white border-gray-300 border-solid border-r-0 border-l-0 border-t-0 border-b ">
                <th scope="row" className="px-6 py-4 font-semibold  whitespace-nowrap ">
                  {item?.hub}
                </th>
                <td className="px-6 py-4">
                    {(new Date(item?.timestamp)).toLocaleDateString(`${strings.getLanguage()==='en'?'en-GB':'ar-EG'}`, DATE_OPTIONS)}
                </td>
                <td className="px-6 py-4">
                {(new Date(item?.timestamp)).toLocaleTimeString(`${strings.getLanguage()==='en'?'en-US':'ar-EG'}`, {hour:'2-digit',minute:'2-digit'})}
                </td>
                <td className="px-6 py-4">
                    {(item?.state==="TICKET_CREATED")?strings.ticketCreated
                    :(item?.state==="PACKAGE_RECEIVED")?strings.packageReceived
                    :(item?.state==="IN_TRANSIT")?strings.orderTransferredToHub
                    :(item?.state==="OUT_FOR_DELIVERY")?strings.outForDelivery
                    :(item.state==="WAITING_FOR_CUSTOMER_ACTION")
                    ?(<div>{strings.shipmentNotDelivered}
                    <p className='text-yellow-300'>{(item?.reason==="Retry delivery - the customer is not in the address.")?strings.reasonCustomerNotInAddress
                    :(item?.reason==="Postponed - the customer requested postponement for another day.")?strings.reasonCustomerRequestedForAnotherDay
                    :(item?.reason==="Customer is not answering.")?strings.reasonCustomerNotAnswering
                    :null}</p></div>)
                    :(item.state==="NOT_YET_SHIPPED")?strings.notYetShipped
                    :(item.state==="DELIVERED_TO_SENDER")?strings.deliverdToSender
                    :(item.state==="CANCELLED")?strings.cancelled
                    :(item.state==="DELIVERED")?strings.delivered
                    :null}
                </td>
            </tr>
            ))}
           
           
        </tbody>
    </table>
                </div>
                <div className='basis-1/3'>
                    <div>

                    <p>{strings.deliveryAddress}</p>
                    <div className='bg-gray-100 p-2 rounded mb-3'>امبابة شارع طلعت حرب</div>
                    </div>
                    <div className='flex gap-5 p-2 border border-solid border-gray-200 rounded'>
                        <img className='w-28' src={require('../../assets/image/problem.png')} />
                        <div>
                            <p>{strings.problemYourShipment}</p>
                            <button className='bg-primary text-white border-none p-2 px-5 font-bold rounded cursor-pointer'>{strings.reportProblem}</button>
                        </div>
                    </div>
                </div>
</div>


            </div>
        </div>}
        </Container>
    </div>
  )
}

export default Tracking