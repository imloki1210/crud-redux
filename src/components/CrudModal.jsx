import { Modal, Button } from "rsuite";
import { useState, useEffect } from "react";

const CrudModal = ({ open, onClose, onSave, initialData }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (initialData) setName(initialData.name);
  }, [initialData]);

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{initialData ? "Edit Item" : "Add Item"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onSave({ name })} appearance="primary">
          Save
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CrudModal;
