export const validateContent = (text) => {
    if (!text) {
      return "Ne peut pas être vide";
    }
};
  
export const validateLength = (text) => {
    if (text && text.length < 4) {
        return '4 caractères minimum';
    }
};

export const validatePassword = (text) => {
    if (text && text.length < 8) {
        return '8 caractères minimum';
    }
    if (text && !text.match(/[A-Z]/, 'g')) {
        return 'Une majuscule minimum';
    }
};

export const validateTel = (text) => {
    if (text && text.length != 10) {
        return 'veuillez entrer un numéro valide';
    }
};

export const validateField = (validators, value) => {
    let error = '';
    validators.forEach((validator) => {
        const validationError = validator(value);
        if (validationError) {
        error = validationError;
        }
    });
    return error;
};

export const validateFields = (fields, values) => {
    const errors = {};
    const fieldKeys = Object.keys(fields);
    fieldKeys.forEach((key) => {
        const field = fields[key];
        const validators = field.validators;
        const value = values[key];
        if (validators && validators.length > 0) {
        const error = validateField(validators, value);
        if (error) {
            errors[key] = error;
        }
        if(key == "confirmationPassword")
        {
            if(values[key] != values["password"])
                errors[key] = "mots de passe ne correspondent pas"
        }
        }
    });

    return errors;
};

export const hasValidationError = (errors) => {
    return Object.values(errors).find((error) => error.length > 0);
};