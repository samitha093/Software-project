import React, { useState } from 'react';
const name = process.env.HOST_IP;

export const startsession = (token: string, usertype: string) =>{

}

export const endsession = ()=>{

}

export const gettoken = () =>{

}
export const getuser = () =>{
 
}
export const getmyhost = () =>{
    const host = 'https://'+name+'/';
    return host;
}
export const gethost = () =>{
    const host = 'https://'+name+'/api/';
    return host;
}
export const getfastify = () =>{
    const host = 'https://'+name+'/fastify';
    return host;
}


export const addcart = (itemid: string, qty: number) =>{
    var cart = window.localStorage.getItem('cart');
    if(cart){
        var newcart= cart !==null ? JSON.parse(cart):null;
        var pos = newcart.map((itemdata:any)=> {return itemdata.itemid}).indexOf(itemid);
        if(pos>=0){
            newcart[pos].qty= newcart[pos].qty+qty;
            window.localStorage.setItem('cart', JSON.stringify(newcart));
        }else{
        const item = {
            itemid:itemid,
            qty:qty
        };
        newcart.push(item);
        window.localStorage.setItem('cart', JSON.stringify(newcart));
        }
        
    }else{
        const item = [
            {
            itemid:itemid,
            qty:qty
            },
        ]
        window.localStorage.setItem('cart', JSON.stringify(item));
    }
    cart = window.localStorage.getItem('cart');

}
export const getcart = () =>{
    var data = window.localStorage.getItem('cart')
    return data !==null ? JSON.parse(data):null;
}
export const removecart = (itemid: string) =>{
    var cart = window.localStorage.getItem('cart');
    var newcart= cart !==null ? JSON.parse(cart):null;
    //var pos = newcart.map((itemdata:any)=> {return itemdata.itemid}).indexOf(itemid);
    //newcart.splice(pos);
    window.localStorage.setItem('cart', JSON.stringify(newcart.filter((item: { itemid: string; }) => item.itemid !== itemid)));
    //window.localStorage.removeItem('cart');
    var personSize = Object.keys(newcart).length;
    if(personSize <= 1){
        window.localStorage.removeItem('cart');
    }
}

export const dropcart = () =>{
    window.localStorage.removeItem('cart');
}

export const syncdbcart = () =>{

}
export const synccartdb = () =>{

}