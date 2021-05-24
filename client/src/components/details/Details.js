import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import DetailItem from './DetailItem';
import DetailContext from '../../context/detail/detailContext'
import Spinner from '../layout/Spinner';


const Details = () => {
    const detailContext = useContext(DetailContext);

    const { details, filtered, getDetails, loading } = detailContext;

    useEffect(() => {
        getDetails();
        //eslint-disable-next-line
    }, [])
    if (details !== null && details.length === 0 && !loading) {
        return <h4>Please add a detail</h4>
    }

    return (
        <div className="form-list">
            {details !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(detail => (
                            <CSSTransition key={detail._id} timeout={500} classNames="item">
                                <DetailItem detail={detail} />
                            </CSSTransition>
                        ))
                        : details.map(detail => (
                            <CSSTransition key={detail._id} timeout={500} classNames="item">
                                <DetailItem detail={detail} />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            ) : <Spinner />}

        </div>
    )
}
export default Details
