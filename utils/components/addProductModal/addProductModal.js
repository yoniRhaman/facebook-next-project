import { Button, TextField } from "@mui/material";
import "./addProductModal.css"
export default function AddProductForm() {
  function handleSumbit(e) {
    e.preventDefault();
  }

  return (
    <div className="column  navbar-modal">
      <h1>Add new product</h1>
      <form className="column form" onSubmit={handleSumbit}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField type="file" label="img" name="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />

        <Button
          type="submit"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Add Product 
        </Button>
      </form>
    </div>
  );
}
