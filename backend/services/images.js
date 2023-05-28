const url = process.env.IS_PRODUCTION
  ? process.env.BASE_URL_PROD
  : `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q&orientation=horizontal`;

let images = [];

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

const getInitialCards = async (req, res) => {
  const {q} = req.query;
  const result = await fetch(`${url}&category=${q}`);
  images = await checkResponse(result);
  const paginationData = paginateData(images.hits, req);
  res.status(200).send(paginationData);
};

const updateCategory = async (req, res) => {
  const {q} = req.query;
  const result = await fetch(`${url}&category=${q}`);
  images = await checkResponse(result);
  const paginationData = paginateData(images.hits, req);
  res.status(200).send(paginationData);
};

const getImages = async (req, res) => {
  if (images.length > 0) {
    await updateCategory(req, res);
    return;
  }
  await getInitialCards(req, res);
};

const paginateToNext = (req, res) => {
  const paginatedData = paginateData(images.hits, req);
  res.status(200).send(paginatedData);
};

const paginateToPrev = (req, res) => {
  const paginatedData = paginateData(images.hits, req);
  res.status(200).send(paginatedData);
};

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

export {getImages, paginateToNext, paginateToPrev};
