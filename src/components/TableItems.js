import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeObject, updateObject } from "../redux/itemReducer";

const TableItems = ({ item }) => {
  const [show, setShow] = useState(false);
  const [newItem, setNewItem] = useState({type:'' ,title:'',price:'' ,description:''});
  const dispatch = useDispatch()

  const list = useSelector((state) => state.itemSlice.itemList);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange =(e)=>{
      
    setNewItem({...newItem,[e.target.name]:e.target.value})
};

const handleEdit=()=>{
  dispatch(updateObject({id:item.id,newItem}))
  handleClose()
}



  return (
    <>
      <tr>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item.id}</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item.title}</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{item.price} DT</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">{item.description}</span>
        </td>
        <td>
          <a onClick={handleShow}>
            <BiEdit style={{ color: "orange" }} />{" "}
          </a>
          <a>
            {" "}
            <BiTrash
              onClick={() => dispatch(removeObject(item.id))}
              style={{ color: "orange", marginLeft: "20px" }}
            />{" "}
          </a>
        </td>
      </tr>







      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Modifying item</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          ID : <input name="id" disabled />
          Type : <input name="type" onChange={handleChange} />
          Product : <input name="title" onChange={handleChange} />
          Price : <input name="price"  onChange={handleChange}/>
          Description : <input name="description"  onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableItems;
