import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Button, Form as BootstrapForm, Alert } from 'react-bootstrap';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  ingredients: Yup.string().required('Ingredients are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
  image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
});

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the item!", error);
        setError("Could not fetch item details.");
      });
  }, [id]);

  const handleSubmit = (values) => {
    axios.put(`http://localhost:5000/items/${id}`, values)
      .then(() => {
        navigate('/myitems');
      })
      .catch(error => {
        console.error("There was an error updating the item!", error);
        setError("Could not update item.");
      });
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
          image: item.image,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
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
              <BootstrapForm.Label>Image URL</BootstrapForm.Label>
              <Field name="image" className="form-control" />
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