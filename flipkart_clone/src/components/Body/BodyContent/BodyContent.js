import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { get_users } from "../../../Redux/Actions/Action";
import Pagination from '@mui/material/Pagination';

import usePagination from "./Paginate";

function BodyContent(props) {
    const data = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_users())
    }, [])
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    let [page, setPage] = useState(1);
    const PER_PAGE = 8;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    return (
        <div className='bodycontent_parent'>
           <div className='bodycontent_head'> <p>Mobile Camera Lens Protectors</p>
            <span>(Showing {PER_PAGE} products out of {data.length} products)</span>
            </div>
            <div className='bodycontent_card_parent'>
                {_DATA.currentData().map((cardData) => {
                    return <Card data={cardData} />
                })}
            </div>
            <div className='pagin'>
            <Pagination
                count={count}
                size="large"
                page={page}
                color="primary"
                onChange={handleChange}
            />
            </div>
        </div>
    )
}

export default BodyContent
