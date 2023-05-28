import {paginateData} from '../utils/pagination.js';

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

const getInitialCards = async (req, res, next) => {
  try {
    const {q} = req.query;
    const result = await fetch(`${url}&category=${q}`);
    images = await checkResponse(result);
    const paginationData = paginateData(images.hits, req);
    res.status(200).send(paginationData);
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res) => {
  try {
    const {q} = req.query;
    const result = await fetch(`${url}&category=${q}`);
    images = await checkResponse(result);
    const paginationData = paginateData(images.hits, req);
    res.status(200).send(paginationData);
  } catch (err) {
    next(err);
  }
};

const getImages = async (req, res, next) => {
  if (images.length > 0) {
    await updateCategory(req, res);
    return;
  }
  await getInitialCards(req, res, next);
};

const paginateToNext = (req, res) => {
  const paginatedData = paginateData(images.hits, req);
  res.status(200).send(paginatedData);
};

const paginateToPrev = (req, res) => {
  const paginatedData = paginateData(images.hits, req);
  res.status(200).send(paginatedData);
};

export {getImages, paginateToNext, paginateToPrev};
