import {toTitleCase} from './messages';
import {PATTERN} from './patterns';

export const PATTERN_ERRORS = (pattern, key) => {
    if (pattern === PATTERN.email.toString()) { 
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern === PATTERN.password.toString()) {
        return `${toTitleCase(key)} can not contain blank spaces`;
    }
    if (pattern === PATTERN.name.toString()) {
        return `${toTitleCase(key)} can not be blank`;
    }
    if (pattern === PATTERN.phone.toString()) {
        // return `${toTitleCase(key)} must contain only digits`;
        return `Please enter a valid ${key.toLowerCase()} number` ;
    }
    if (pattern === PATTERN.price.toString()) {
        return `${toTitleCase(key)} must be numeric`;
    }
};
