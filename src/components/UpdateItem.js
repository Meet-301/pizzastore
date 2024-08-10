import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Button, Form as BootstrapForm, Alert, Image } from 'react-bootstrap';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  ingredients: Yup.string().required('Ingredients are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
  image: Yup.mixed().required('Image is required'),
});

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => {
        setItem(response.data);
        setImagePreview(response.data.image); // Set initial image preview
      })
      .catch(error => {
        console.error("There was an error fetching the item!", error);
        setError("Could not fetch item details.");
      });
  }, [id]);

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('ingredients', values.ingredients);
    formData.append('price', values.price);
    formData.append('image', values.image); // This should be a file object

    axios.put(`http://localhost:5000/items/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        navigate('/myitems');
      })
      .catch(error => {
        console.error("There was an error updating the item!", error);
        setError("Could not update item.");
      });
  };

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("image", file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2 className="my-4">Update Item</h2>
      <Formik
        initialValues={{
          name: item.name,
          ingredients: item.ingredients.join(', '),
          price: item.price,
          image: '', // Initialize with an empty string, will be handled by file input
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize // To reset form values when item data changes
      >
        {({ setFieldValue }) => (
          <Form>
            <BootstrapForm.Group controlId="name">
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="ingredients">
              <BootstrapForm.Label>Ingredients</BootstrapForm.Label>
              <Field name="ingredients" className="form-control" />
              <ErrorMessage name="ingredients" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="price">
              <BootstrapForm.Label>Price</BootstrapForm.Label>
              <Field type="number" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="image">
              <BootstrapForm.Label>Image</BootstrapForm.Label>
              <input 
                type="file" 
                name="image" 
                className="form-control" 
                onChange={(event) => handleFileChange(event, setFieldValue)}
              />
              {imagePreview && (
                <div className="mt-2">
                  <Image src={imagePreview} rounded style={{ width: '100px', height: 'auto' }} />
                </div>
              )}
              <ErrorMessage name="image" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Update Item
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UpdateItem;