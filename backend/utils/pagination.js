export const paginateData = (data, req) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};

  if (endIndex < data.length) {
    result.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    result.prev = {
      page: page - 1,
      limit,
    };
  }

  result.data = data.slice(startIndex, endIndex);
  return result;
};
