export const API_HEADER = {
  Authorization: `Bearer ${import.meta.env.VITE_API_KEY ?? 'empty'}`,
};

export const QUERY_PARAMS = {
  LANGUAGE: 'language',
};

export const DEFAULT_PARAMS = {
  LANGUAGE: 'fr-FR',
};
