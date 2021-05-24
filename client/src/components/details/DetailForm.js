import React, { useState, useContext, useEffect } from 'react'
import DetailContext from '../../context/detail/detailContext'
// import styles from './Detail.module.css'
import './Detail.css'
import DetailFilter from '../details/DetailFilter'

const DetailForm = () => {
    const detailContext = useContext(DetailContext);

    const { addDetail, updateDetail, clearCurrent, current } = detailContext;

    const [detail, setDetail] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'professional',
        address: '',
        socialUrl: '',
        designation: '',
        department: '',
        otherDetails: ''
    });

    useEffect(() => {
        if (current !== null) {
            setDetail(current);
        }
        else {
            setDetail({
                name: '',
                email: '',
                phone: '',
                type: 'professional',
                address: '',
                socialUrl: '',
                designation: '',
                department: '',
                otherDetails: ''
            });

        }
    }, [detailContext, current])


    const { name,
        email,
        phone,
        type,
        address,
        socialUrl,
        designation,
        department,
        otherDetails } = detail;

    const onChange = e => setDetail({ ...detail, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        if (current === null) {
            addDetail(detail);
        } else {
            updateDetail(detail);
        }
        clearAll();
        // setContact({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     type: 'personal'
        // })
    };
    const clearAll = () => {
        clearCurrent();
    }

    return (

        <>
            <div className="wrapper">
                <div className="form">
                    <div className="left-col">
                        <img src="img/ellipse1.png" className="img1" alt="" />
                        <h2>{current ? 'Edit Detail' : 'Add Detail'}</h2>
                        <form onSubmit={onSubmit}>
                            <div className="result" />
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder="Name"
                                    name='name'
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Phone'
                                    name='phone'
                                    value={phone}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="" style={{ display: 'flex' }}>
                                <h5 style={{ color: '#fff' }}>Type</h5>
                                <input
                                    type="radio"
                                    name="type"
                                    value="personal"
                                    checked={type === 'personal'}
                                    onChange={onChange}

                                /> <span style={{ color: '#fff' }}>Personal</span>
                                <input
                                    type="radio"
                                    name="type" value="professional"
                                    checked={type === 'professional'}
                                    onChange={onChange}

                                /> <span style={{ color: '#fff' }}>Professional</span>

                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Address'
                                    name='address'
                                    value={address}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Designation'
                                    name='designation'
                                    value={designation}
                                    onChange={onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Department'
                                    name='department'
                                    value={department}
                                    onChange={onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type='text'
                                    placeholder='Social Urls(eg. LinkedIn, Twitter, Instagram)'
                                    name='socialUrl'
                                    value={socialUrl}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    type='text'
                                    placeholder='Other Details'
                                    name='otherDetails'
                                    value={otherDetails}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <input className="btn-form" type="submit" value={current ? 'Update Contact' : 'Add Contact'} />
                            </div>
                            {current && <div>
                                <button className='btn btn-light btn-block' onClick={clearAll} >Clear</button>
                            </div>}
                        </form>

                    </div>
                    <DetailFilter />


                    {/* <div className="right-col">
                        <h2>List of employees</h2>

                    </div> */}
                </div>
            </div>

            {/* <div className={styles.box}>
                <form onSubmit={onSubmit}>
                    <h2>{current ? 'Edit Detail' : 'Add Detail'}</h2>
                    <input
                        type='text'
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                    <input
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={onChange}
                    />
                    <h5>Contact Type</h5>
                    <input
                        type="radio"
                        name="type"
                        value="professional"
                        checked={type === 'professional'}
                        onChange={onChange}

                    /> Personal

                <input
                        type="radio"
                        name="type" value="professional"
                        checked={type === 'professional'}
                        onChange={onChange}

                    /> Professional

                <input
                        type='text'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={onChange}
                    />

                    <input
                        type='text'
                        placeholder='Designation'
                        name='designation'
                        value={designation}
                        onChange={onChange}
                    />

                    <input
                        type='text'
                        placeholder='Department'
                        name='department'
                        value={department}
                        onChange={onChange}
                    />

                    <input
                        type='text'
                        placeholder='Social Urls(eg. LinkedIn, Twitter, Instagram)'
                        name='socialUrl'
                        value={socialUrl}
                        onChange={onChange}
                    />

                    <input
                        type='text'
                        placeholder='Other Details'
                        name='otherDetails'
                        value={otherDetails}
                        onChange={onChange}
                    />

                    <div>
                        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
                    </div>
                    {current && <div>
                        <button className='btn btn-light btn-block' onClick={clearAll} >Clear</button>
                    </div>}
                </form>
            </div> */}
        </>
    )
}
export default DetailForm
