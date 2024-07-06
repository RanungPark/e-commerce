import { http, HttpResponse } from 'msw';

type UserType = {
  username: string;
  password: string;
};

const users: UserType[] = [
  {
    username: '01087971558',
    password: '1558',
  },
];

type AddCommentParams = {
  postId: string;
};

type AddJoinRequestBody = {
  user: UserType;
};

type AddLoginRequestBody = {
  username: string;
};

type AddSignupRequestBody = {
  password: string;
};

export const authorizationHandlers = [
  http.post<AddCommentParams, AddJoinRequestBody, undefined, '/join'>(
    '/join',
    async ({ request }) => {
      const commentData = await request.json();
      users.push(commentData.user);

      return HttpResponse.json({
        status: 201,
      });
    }
  ),

  http.post<AddCommentParams, AddLoginRequestBody, undefined, '/login'>(
    '/login',
    async ({ request }) => {
      const commentData = await request.json();

      for (const user of users) {
        if (commentData.username === user.username) {
          return HttpResponse.json(
            { message: 'goToJoin' },
            {
              status: 200,
            }
          );
        }
      }

      return HttpResponse.json(
        { message: 'goToSginup' },
        {
          status: 202,
        }
      );
    }
  ),

  http.post<AddCommentParams, AddSignupRequestBody, undefined, '/signup'>(
    '/signup',
    async ({ request }) => {
      const commentData = await request.json();

      for (const user of users) {
        if (commentData.password === user.password) {
          return HttpResponse.json({
            status: 200,
          });
        }
      }

      return HttpResponse.json({
        status: 404,
      });
    }
  ),
];
