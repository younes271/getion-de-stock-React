import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateFournisseur = ({modal , toggle ,addFournisseur} ) => {

    const [taskName, setTaskName] = useState("");
	const [description, setDescription ] = useState("");
    
	const handleChange = (e) => {
		const {name, value} = e.target;
        console.log("tesssssst");

		if( name === "taskName"){
			setTaskName(value);
		}else {
			setDescription(value);
		};
	};

	const handleSave = (e) => {
		e.preventDefault();
		let Obj = {};
		Obj["Name"] = taskName;
		Obj["Description"] = description;
		addFournisseur(Obj);
	}




    console.log("ana f create fournisseur : ", modal);
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<form>
						<div className='form-group' >
                        
                        <input type="button" value="trrr" onClick={handleChange} />
							<label >eeee name</label>
							<input type="text" className= "form-control"  value = {taskName} onChange= {handleChange} name = "taskName"/>
						</div>
						<div className='form-group'>
							<label>Description</label>
                            <input type="email" value="" onChange={handleChange} />
							<textarea row = "5" className='form-control' value = {description} onChange= {handleChange} name = "description"></textarea>
						</div>
                        

					</form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary"onClick={handleSave} >
						Create
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
      		</Modal>
		</div>
       
    );
};

export default CreateFournisseur;