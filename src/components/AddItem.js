import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const AddItem = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('ingredients', values.ingredients);
    formData.append('price', values.price);
    formData.append('image', values.image); // This should be a file object

    axios.post('http://localhost:5000/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        navigate('/myitems');
      })
      .catch(error => {
        console.error("There was an error adding the item!", error);
        setError("Could not add item.");
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

  return (
    <Container>
      <h2 className="my-4">Add New Item</h2>
      <Formik
        initialValues={{
          name: '',
          ingredients: '',
          price: '',
          image: '', // Initialize with an empty string, will be handled by file input
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
              Add Item
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddItem;