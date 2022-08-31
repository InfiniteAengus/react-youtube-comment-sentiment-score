import api from './axios';

const sentimentUrl =
  'https://language.googleapis.com/v1beta2/documents:analyzeSentiment';
const youtubeCommentUrl =
  'https://www.googleapis.com/youtube/v3/commentThreads';

export const apiGetSentimentScore = async (content: string) => {
  const urlParam = new URLSearchParams();
  urlParam.set('key', process.env.REACT_APP_API_KEY ?? '');

  try {
    const res: any = await api.post(`${sentimentUrl}?${urlParam.toString()}`, {
      document: {
        type: 'PLAIN_TEXT',
        content: content,
      },
      encodingType: 'UTF8',
    });

    return res.documentSentiment;
  } catch {
    return null;
  }
};

export const apiGetComments = async (
  videoId: string | undefined,
  maxResult: number = 50
) => {
  const urlParam = new URLSearchParams();
  urlParam.set('key', process.env.REACT_APP_API_KEY ?? '');
  urlParam.set('textFormat', 'plainText');
  urlParam.set('part', 'snippet');
  urlParam.set('videoId', videoId ?? '');
  urlParam.set('maxResult', maxResult.toString());

  try {
    const res: any = await api.get(
      `${youtubeCommentUrl}?${urlParam.toString()}`
    );

    return res;
  } catch {
    return null;
  }
};
