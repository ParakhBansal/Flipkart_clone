import React, { useState } from 'react';
import "./styles.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FormControlLabel, InputAdornment, Input, Checkbox } from '@mui/material';

const brandarr = ["Ultra", "Hirdesh", "Dolphin", "VIRMON", "Urban", "Raxxy", "OLONGA", "Clickbit"]
const ratingsArr = ["4★ & above", "3★ & above", "2★ & above", "1★ & above"]
const offerArr = ["Buy More, Save More", "No Cost EMI", "Special Price"]
const Sidebar = () => {
    const [brandIcon, setbrandIcon] = useState(["up", "up", "up"]);
    const [brandData, setbrandData] = useState(brandarr)
    const [checkboxes, setcheckboxes] = useState([[], [], []])

    function SearchBrands(e) {
        let arr = [...brandarr]
        setbrandData(arr.filter((k) => {
            return ((k.toLowerCase()).includes(e.target.value))
        }))
    }
    function checkCheckbox(e, i) {
        let arr = [...checkboxes];
        if (!arr[i].includes(e.target.name)) {
            arr[i].push(e.target.name)
        }
        else {
            var index = arr[i].indexOf(e.target.name);
            if (index !== -1) {
                arr[i].splice(index, 1);
            }
        }
        setcheckboxes(arr)
    }

    return (
        <div className='sidebar_parent'>
            <div className='sidebar_header'>
                Filters
                <div className='filter_packet_parent'>
                    {
                        checkboxes.map((arr, i) => {
                            return arr.map((val) => {
                                return <div className='filter_packets' id={i} onClick={(e) => {
                                    let k = [...checkboxes];
                                    var index = k[e.target.id].indexOf(val);
                                    if (index !== -1) {
                                        k[e.target.id].splice(index, 1);
                                    }
                                    setcheckboxes(k)
                                }}>
                                    <span>X</span> {val}
                                </div>
                            })
                        })
                    }
                </div>
            </div>
            <div className='sidebar_brand'>
                <div className='sidebar_brand_head'>
                    BRAND
                    <span onClick={(e) => {
                        if (document.querySelector(".sidebar_Brand_display").style.display == "none") {
                            document.querySelector(".sidebar_Brand_display").style.display = "";
                            brandIcon[0] = "up"
                        }
                        else {
                            document.querySelector(".sidebar_Brand_display").style.display = "none";
                            brandIcon[0] = "down"
                        }
                        let arr = [...brandIcon]
                        setbrandIcon(arr)
                    }}>{(brandIcon[0] == "down") ? (<KeyboardArrowDownIcon />) : <KeyboardArrowUpIcon />}</span>
                </div>
                <div className='sidebar_Brand_display'>
                    <Input
                        id="input-with-icon-adornment"
                        placeholder='Seach Brand'
                        onChange={SearchBrands}
                        sx={{ height: 20 }}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        } />
                    {brandData.map((brand) => {
                        return <div><FormControlLabel
                            control={
                                <Checkbox name={brand} onClick={(e) => checkCheckbox(e, 0)} checked={checkboxes[0].indexOf(brand)==-1 ? false : true}/>
                            } label={brand}
                        /></div>
                    })}
                </div>
            </div>
            <div className='sidebar_brand'>
                <div className='sidebar_brand_head'>
                    CUSTOMER RATINGS
                    <span onClick={(e) => {
                        if (document.querySelector(".sidebar_rating_display").style.display == "none") {
                            document.querySelector(".sidebar_rating_display").style.display = "";
                            brandIcon[1] = "up"
                        }
                        else {
                            document.querySelector(".sidebar_rating_display").style.display = "none";
                            brandIcon[1] = "down"
                        }
                        let arr = [...brandIcon]
                        setbrandIcon(arr)
                    }}>{(brandIcon[1] == "down") ? (<KeyboardArrowDownIcon />) : <KeyboardArrowUpIcon />}</span>
                </div>
                <div className='sidebar_rating_display'>

                    {ratingsArr.map((rating) => {
                        return <div><FormControlLabel
                            control={
                                <Checkbox name={rating} onClick={(e) => checkCheckbox(e, 1)} checked={checkboxes[1].indexOf(rating)==-1 ? false : true}/>
                            } label={rating}
                        /></div>
                    })}
                </div>
            </div>
            <div className='sidebar_brand'>
                <div className='sidebar_brand_head'>
                    OFFERS
                    <span onClick={(e) => {
                        if (document.querySelector(".sidebar_offer_display").style.display == "none") {
                            document.querySelector(".sidebar_offer_display").style.display = "";
                            brandIcon[2] = "up"
                        }
                        else {
                            document.querySelector(".sidebar_offer_display").style.display = "none";
                            brandIcon[2] = "down"
                        }
                        let arr = [...brandIcon]
                        setbrandIcon(arr)
                    }}>{(brandIcon[2] == "down") ? (<KeyboardArrowDownIcon />) : <KeyboardArrowUpIcon />}</span>
                </div>
                <div className='sidebar_offer_display'>

                    {offerArr.map((offer) => {
                        return <div><FormControlLabel
                            control={
                                <Checkbox name={offer} onClick={(e) => checkCheckbox(e, 2)} checked={checkboxes[2].indexOf(offer)==-1 ? false : true}/>
                            } label={offer}
                        /></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
