import { Quote } from '../components/quote/OneQuote';

const BASE_URL = 'http://localhost:5000/quotes';
const HEADERS = { 'Content-Type': 'application/json' };

export const fetchQuotes = async (): Promise<Quote[]> => {
  const res = await fetch(BASE_URL);
  return res.json() as Promise<Quote[]>;
};

export const addQuote = async (quote: Quote): Promise<Quote> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(quote),
  });

  return res.json() as Promise<Quote>;
};

export const deleteQuote = async (id: number): Promise<Response> =>
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

export const updateQuote = async (id: number, quote: Quote): Promise<Quote> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(quote),
  });

  return res.json() as Promise<Quote>;
};
