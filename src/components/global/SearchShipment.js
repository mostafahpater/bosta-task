import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getTrackingWithNum } from '../../redux/tracking/TrackingSlice';
import strings from '../../traslate/Translate';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchShipment = ({ isOpen,language }) => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            numTracking: '',
        },
        onSubmit: values => {
            console.log(parseInt(values.numTracking))
            dispatch(getTrackingWithNum(values.numTracking))

        },
    });
    return (
        <div className={`fixed top-16 ${language==='en'?'right-5':'left-5'}`}>
            {isOpen && <form className='p-5 bg-white shadow-md rounded w-80 px-8' onSubmit={formik.handleSubmit}>
                <div className='text-lg font-normal mb-5'>{strings.trackYourShipment}</div>
                <div className="relative h-14">
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.numTracking}
                        name='numTracking'
                        type="search"
                        id="numTracking"
                        className="block p-2.5 h-full w-full z-20 text-base text-gray-900 bg-gray-50 rounded-lg border-l-2 border-solid border-gray-300  " placeholder={`${strings.trackingNum}`} required />
                    <button type="submit" className={`cursor-pointer absolute top-0  h-full w-[50px] text-lg font-medium text-white bg-primary  border-none  ${language==='en'?'right-0 rounded-r-lg':'left-0 rounded-l-lg'}`}>
                        <FaMagnifyingGlass className="w-4 h-4" />
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>}
        </div>
    )
}

export default SearchShipment