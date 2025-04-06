// returns label with "*" if requried is true

const labelRequired = (label: string | null, required: boolean | undefined) => {
  return label ? (required ? `${label}* :` : label) : null;
};

export default labelRequired;
