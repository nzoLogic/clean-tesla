export const createStyle = (styles) => styles

export const showIf = condition => render => condition ? render() : null;

export const hideIf = condition => render => condition ? null : render();

