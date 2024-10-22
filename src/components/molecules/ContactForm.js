import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    });
    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);

    const inputStyle = {
        border: 'none',
        borderBottom: '2px solid #ccc',
        borderRadius: '0',
        boxShadow: 'none',
        transition: 'border-color 0.3s ease-in-out',
        outline: 'none',
    };

    const getDynamicStyle = (inputId) => {
        return focusedInput === inputId
            ? { ...inputStyle, borderBottom: '2px solid #002533' }
            : inputStyle;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido';
        if (!formData.email.trim()) newErrors.email = 'El email es requerido';
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formValidationErrors = validateForm();

        if (Object.keys(formValidationErrors).length > 0) {
            setErrors(formValidationErrors);
            setShowError(true);
        } else {
            setShowError(false);
            const { nombre, apellido, email, telefono, mensaje } = formData;

            // Crear el mensaje de WhatsApp
            const whatsappMessage = `Hola, me gustaría hacer una consulta.\n\n` +
                `Nombre: ${nombre}\n` +
                `Apellido: ${apellido}\n` +
                `Email: ${email}\n` +
                `Teléfono: ${telefono}\n\n` +
                `Mensaje: ${mensaje}`;

            // Codificar el mensaje para que sea compatible con una URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Crear el enlace a WhatsApp
            const whatsappLink = `https://api.whatsapp.com/send?phone=+5491123751804&text=${encodedMessage}`;

            // Abrir el enlace
            window.open(whatsappLink, '_blank');
        }
    };

    return (
        <Form style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
            {showError && (
                <Alert variant="danger">
                    Por favor completa todos los campos requeridos.
                </Alert>
            )}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label><strong>Nombre</strong></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            style={getDynamicStyle('formName')}
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            onFocus={() => setFocusedInput('formName')}
                            onBlur={() => setFocusedInput(null)}
                            isInvalid={!!errors.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nombre}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label><strong>Apellido</strong></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            style={getDynamicStyle('formLastName')}
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            onFocus={() => setFocusedInput('formLastName')}
                            onBlur={() => setFocusedInput(null)}
                            isInvalid={!!errors.apellido}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.apellido}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder=""
                            style={getDynamicStyle('formEmail')}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedInput('formEmail')}
                            onBlur={() => setFocusedInput(null)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label><strong>Número de teléfono</strong></Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="+1012 3456 789"
                            style={getDynamicStyle('formPhone')}
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            onFocus={() => setFocusedInput('formPhone')}
                            onBlur={() => setFocusedInput(null)}
                            isInvalid={!!errors.telefono}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.telefono}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label><strong>Mensaje</strong></Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ ...getDynamicStyle('formMessage'), resize: 'none' }}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('formMessage')}
                    onBlur={() => setFocusedInput(null)}
                    isInvalid={!!errors.mensaje}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.mensaje}
                </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button
                    variant="primary"
                    type="submit"
                    className="px-4"
                    style={{ backgroundColor: '#001B29', width: '10vw', marginTop: '1rem' }}
                >
                    Enviar Mensaje
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;
