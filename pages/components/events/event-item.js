import Link from "next/link";
import classes from './event-item.module.css'

import Button from '../ui/button';
import DateIcon from '../icons/date-icon'
import Address from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

const EventItem= (props) => {
    const {item} = props;
    console.log(item);    

    const humanReadableDate = new Date((item.date)).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: "numeric"
    })


    const formatAddress = item.location.replace(',','\n');

    return (
        <li className={classes.item}>
            <img className={classes.img} src ={`/${item.image}`} alt ={item.title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{item.title}</h2>
                </div>
                <div className={classes.date}>
                     <DateIcon/>   
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <Address/>
                    <address>{formatAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={`/events/${item.id}`}> <span>Explore Event</span><span className={classes.icon}><ArrowRightIcon/></span></Button>
            </div>
        </li>
    )
}

export default EventItem;