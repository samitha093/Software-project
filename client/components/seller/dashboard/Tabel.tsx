import React from 'react'
import styles from './styles.module.scss'

interface TabelProps {

}

const Tabel: React.FC<TabelProps> = ({}) => {
    const rows = [    
        { "id" : "14gsd54a3sfdc", "name":"Ram", "email":"ram@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"},    
        {"id" : "14gsd54e3sfdc", "name":"Shyam", "email":"shyam23@gmail.com", "type":"SELLER", "status":"ACTIVE", "date":"23-04-2022"},  
        {"id" : "14gsd54a3shdc", "name":"John", "email":"john@gmail.com", "type":"BUYER", "status":"DEACTIVE", "date":"23-04-2022"},    
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"ACTIVE", "date":"23-04-2022"},
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"},
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"}  
    ];
    return (
        <div className={styles.bg_tabel}>Tabel</div>
    );
}

export default Tabel;