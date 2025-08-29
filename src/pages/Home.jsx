import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, createItem, editItem, removeItem } from "../redux/crudSlice";
import CrudModal from "../components/CrudModal";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.crud);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleSave = (data) => {
    if (editData) {
      dispatch(editItem({ id: editData.id, data }));
    } else {
      dispatch(createItem(data));
    }
    setOpen(false);
    setEditData(null);
  };

  return (
    <div>
      <h2>CRUD List</h2>
      <button onClick={() => setOpen(true)}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                setEditData(item);
                setOpen(true);
              }}
            >
              Edit
            </button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <CrudModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        initialData={editData}
      />
    </div>
  );
};

export default Home;
