export const required = value => value ? undefined : 'Required field'
export const maxLength = max => value =>
    value && value.length >= max ? `Must be ${max} characters or less` : undefined
export const maxLength100 = maxLength(100);