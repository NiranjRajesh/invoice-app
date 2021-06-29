import React from 'react'
import './InvoiceItem.css';
import dayjs from 'dayjs';
function InvoiceItem({id, paymentDue, clientName, total, status}) {
    const rightArrow = <i className="fas fa-angle-down" style={{transform:"rotate(-90deg)"}}></i>;
    return (
        
        <div className="invoiceItem">
            <h2 className="invoiceItem-header"><span>#</span>{id}</h2>
            <div className="invoiceItem-date">Due {dayjs(paymentDue).format('DD MMM YYYY')}</div>
            <div className="invoiceItem-client">{clientName}</div>
            <div className="invoiceItem-total"> <span>₹</span>45000</div>
            <div className="invoiceStatus">
                <div className="invoiceStatus-circle"></div>
                <div className="invoiceStatus-text">{status}</div>
            </div>
            <div className="invoice-arrow-icon">{rightArrow}</div>
        </div>
    )
}

export default InvoiceItem
