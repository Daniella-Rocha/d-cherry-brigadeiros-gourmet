import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';

import './ContactForm.css';

const ContactForm = () => {
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Agradecemos o contato!");
    navigate('/');
  }

  return (
    <div className="contact">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3"
          controlId="name"
        >
          <Form.Label>
            Nome:
          </Form.Label>
          <Form.Control
            type="text"
            {
            ...register("name",
              {
                required: "Este campo não ser vazio.",
                minLength: {
                  value: 10,
                  message: "Este campo deve ter no mínimo 10 caracteres."
                }
              }
            )}
          />
          <span>{errors.name?.message}</span>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="email"
        >
          <Form.Label>
            Email:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {
            ...register("email",
              {
                required: "Este campo não ser vazio.",
                minLength: {
                  value: 10,
                  message: "Este campo deve ter no mínimo 10 caracteres."
                },
                maxLength: {
                  value: 150,
                  message: "Este campo deve ter no máximo 150 caracteres."
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Por favor, informe um email válido."
                }
              }
            )}
          />
          <span>{errors.email?.message}</span>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="message"
        >
          <Form.Label>
            Mensagem:
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder='Deixe sua mensagem'
            {
            ...register("message",
              {
                required: "Este campo não ser vazio.",
                minLength: {
                  value: 10,
                  message: "Este campo deve ter no mínimo 10 caracteres."
                },
                maxLength: {
                  value: 150,
                  message: "Este campo deve ter no máximo 150 caracteres."
                }
              }
            )}
          />
          <span>{errors.message?.message}</span>
        </Form.Group>
        <div className='submit-btn'>
          <button type="submit">Enviar</button>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm;
