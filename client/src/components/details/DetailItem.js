import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import DetailContext from '../../context/detail/detailContext'
import DisplayCard from './DisplayCard';
import { Link } from 'react-router-dom';

const DetailItem = ({ detail }) => {
    const detailContext = useContext(DetailContext);
    const { deleteDetail, setCurrent, clearCurrent } = detailContext

    const { _id, name, email, phone, type, address, socialUrl, designation, department, otherDetails } = detail;

    const onDelete = () => {
        deleteDetail(_id);
        clearCurrent();
    }

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {name}{' '}

                <span style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (type === 'professional' ? 'badge-successs' : 'badge-primaryy')}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list">
                {email && (<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>

                )}

                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>

                )}

                {address && (
                    <li>
                        <i className="fas fa-map-marker"></i> {address}
                    </li>

                )}

                {socialUrl && (
                    <li>
                        <i className="fas fa-share-square"></i> {socialUrl}
                    </li>

                )}

                {designation && (
                    <li>
                        <i className="fas fa-address-book"></i> {designation}
                    </li>

                )}
                {department && (
                    <li>
                        <i className="fas fa-building"></i> {department}
                    </li>

                )}
                {otherDetails && (
                    <li>
                        <i className="fas fa-info"></i> {otherDetails}
                    </li>

                )}

            </ul>
            <p>
                <button className='btn btn-edit btn-sm' onClick={() => setCurrent(detail)}>Edit</button>
                <button className='btn btn-del btn-sm' onClick={onDelete}>Delete</button>

            </p>
        </div>
    )
}

DetailItem.propTypes = {
    detail: PropTypes.object.isRequired,
}

export default DetailItem
