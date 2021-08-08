# useForm Hook

Ejemplo de uso:
```javascript
    const initialForm = {
        name: '',
        age: 0,
        email: '',
    };
    
    const [values, handleInputChange, reset] = useForm(initialForm);
```