const getError = (errors, id) => {
  if (errors?.length > 0) {
    const error = errors?.filter(item => item.id === id);

    return error?.length === 1 ? error[0]?.message : '';
  }

  return false;
};

const getMessage = item => {
  return item?.message || '';
};

export { getError, getMessage };
