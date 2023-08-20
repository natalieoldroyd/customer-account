import {Form, useLoaderData, useRouteError} from '@remix-run/react';
import {type LoaderArgs, json} from '@shopify/remix-oxygen';

export default function () {
  return (
    <div>
      <Form method="post" action="/authorize">
        <button>Login</button>
      </Form>
    </div>
  );
}
