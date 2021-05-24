import React, { useContext, useRef, useEffect } from 'react'
import DetailContext from '../../context/detail/detailContext';
import Details from './Details';

const DetailFilter = () => {
    const detailContext = useContext(DetailContext);
    const text = useRef('');

    const { filterDetails, clearFilter, filtered } = detailContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    })


    const onChange = e => {
        if (text.current.value !== '') {
            filterDetails(e.target.value);
        } else {
            clearFilter();
        }
    }


    return (
        <div className="right-col">
            <form>
                <h3>Search employee</h3>
                <input ref={text} type="text" placeholder=" &#xF002; Search details..." onChange={onChange} style={{ margin: '0' }} className='search-icon' />
            </form>
            <Details />

        </div>

    )
}

export default DetailFilter
