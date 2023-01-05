import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

import Navbarp from './navbar';


const Fournisseur = () => {
    const [fournisseur, setFournisseur]=useState([]);
    const addFournisseur =(objFournisseur)=>{
        let listFournisseur = fournisseur;
        listFournisseur.push(objFournisseur);
        localStorage.setItem("FournisseurList",JSON.stringify(listFournisseur));
        setFournisseur(listFournisseur);

    }
    

   




    return (
        <div>
            <Navbarp addFournisseur={addFournisseur} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    
                    </tr>
                    
                </tbody>
            </Table>

            
        </div>
    );
};

export default Fournisseur;