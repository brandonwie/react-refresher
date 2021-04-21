import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const schema = Yup.object().shape({
  title: Yup.string().min(1).max(255).required(),
  image: Yup.string()
    .matches(
      /(https?:\/\/.*\.(?:png|jpg))/i,
      'the url must be ending with jpg or png'
    )
    .required(),
  address: Yup.string().min(1).max(255).required(),
  description: Yup.string().min(15).max(255).required(),
});

const NewMeetupForm: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Register Your Meetup</h1>
      <Formik
        initialValues={{
          title: '',
          imageUrl: '',
          address: '',
          description: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId='meetup-form__title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                placeholder='Enter title'
                value={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.title && !errors.title}
                isInvalid={touched.title && !!errors.title}
                required
              />
              <Form.Control.Feedback type='valid'>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='meetup-form__image-url'>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type='url'
                name='imageUrl'
                placeholder='Enter URL'
                value={values.imageUrl}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.imageUrl && !errors.imageUrl}
                isInvalid={touched.imageUrl && !!errors.imageUrl}
                required
              />
              <Form.Control.Feedback type='valid'>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                {errors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='meetup-form__address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                name='address'
                placeholder='Enter address'
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors.address}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='meetup-form__description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                name='description'
                placeholder='Enter description'
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={touched.description && !!errors.description}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors.description}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Uploading…' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewMeetupForm;
