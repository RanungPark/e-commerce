import { http, HttpResponse } from 'msw';

type UserType = {
  id: number;
  username: string;
  password: string;
};

const users: UserType[] = [
  {
    id: 1,
    username: '01087971558',
    password: '1558',
  },
];

type AddCommentParams = {
  postId: string;
};

type AddJoinRequestBody = {
  type: string;
  username: string;
  password: string;
};

type AddLoginRequestBody = {
  username: string;
};

export const authorizationHandlers = [
  http.post<AddCommentParams, AddJoinRequestBody, undefined, '/join'>(
    '/join',
    async ({ request }) => {
      const commentData = await request.json();
      if (commentData.type === '로그인') {
        for (const user of users) {
          if (
            commentData.username === user.username &&
            commentData.password === user.password
          ) {
            return HttpResponse.json(
              {
                id: user.id,
                username: user.username,
                message: '로그인 성공',
              },
              {
                status: 200,
                headers: {
                  'Set-Cookie': `token=1`,
                },
              }
            );
          } else {
            return HttpResponse.json(
              { message: '로그인 실패' },
              {
                status: 494,
              }
            );
          }
        }
      } else if (commentData.type === '회원가입') {
        const createUser: UserType = {
          id: users.length + 1,
          username: commentData.username,
          password: commentData.password,
        };

        users.push(createUser);

        return HttpResponse.json(
          {
            id: createUser.id,
            username: createUser.username,
            message: '회원가입 성공',
          },
          {
            status: 201,
            headers: {
              'Set-Cookie': `token=2`,
            },
          }
        );
      }
    }
  ),

  http.post<AddCommentParams, AddLoginRequestBody, undefined, '/login'>(
    '/login',
    async ({ request }) => {
      const commentData = await request.json();

      for (const user of users) {
        if (commentData.username === user.username) {
          return HttpResponse.json(
            { message: '로그인 진행' },
            {
              status: 200,
            }
          );
        }
      }

      return HttpResponse.json(
        { message: '회원가입 진행' },
        {
          status: 202,
        }
      );
    }
  ),
];
