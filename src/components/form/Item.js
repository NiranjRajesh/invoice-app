import React, { useEffect } from 'react'
import Input from "./Input"
import Button from  "../shared/Button"
import {useFormikContext} from "formik";
import './ItemList.css'
function Item({index,helpers}) {
    const{values,setFieldValue}=useFormikContext();

    useEffect(()=>{
        const total=values.items[index].quantity * values.items[index].price
        const rounded = Math.round((total + Number.EPSILON) * 100) / 100
        setFieldValue(`items[${index}].total`, rounded || '0')
    },[values.items[index].quantity, values.items[index].price])

    const trashIcon =<i className="fas fa-trash"></i>
    return (
        <div className="invoiceForm-item-wrapper">
              <Input 
                label="Item Name" 
                name={`items[${index}].name`} 
                hideLabels={index > 0}
            />

            <Input 
                label="Qty." 
                name={`items[${index}].quantity`} 
                hideLabels={index > 0}
            />

            <Input 
                label="Price" 
                name={`items[${index}].price`}
                hideLabels={index > 0}
            />

            <Input 
                label="Total" 
                name={`items[${index}].total`} 
                hideLabels={index > 0}
                disabled
                className="disabled-field-total"
               
            />
            <Button buttonStyle="delete-item-btn"  iconValue={trashIcon} onClick={() => helpers.remove(index)}/>

        </div>
    )
}

export default Item
